const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.getAllUsersInfo = functions.https.onCall(async (data, context) => {
  // Ensure the user is authenticated
  if (!context.auth) {
    throw new functions.https.HttpsError('unauthenticated', 'The function must be called while authenticated.');
  }

  try {
    const db = admin.database();
    const auth = admin.auth();

    // Retrieve all users from Firebase Realtime Database
    const usersSnapshot = await db.ref('Users').once('value');
    const usersData = usersSnapshot.val();

    // Prepare an array to hold the combined user info
    const allUsersInfo = [];

    for (const userKey in usersData) {
      const uid = usersData[userKey].uid;
      // Get user auth info using 'uid'
      const userInfo = await auth.getUser(uid);
      const provider = userInfo.providerData[0].providerId;
      const identifier = userInfo.providerData[0].uid;
      const status = usersData[userKey].disabled;
      const privacy = usersData[userKey].isPublic;
      const name = usersData[userKey].username;
      const avatar = usersData[userKey].avatar;
      // Calculate follower_numbers from "followers" ref
      const followersSnapshot = await db.ref('Followings').orderByChild('follower').equalTo(userKey).once('value');
      const followersData = followersSnapshot.val() || {};
      const followerNumbers = Object.keys(followersData).length;
      // Calculate follower_numbers from "followers" ref
      const followingsSnapshot = await db.ref('Followings').orderByChild('following').equalTo(userKey).once('value');
      const followingsData = followingsSnapshot.val() || {};
      const followingNumbers = Object.keys(followingsData).length;

      // Construct the user information object
      const userDetails = {
        id: uid,
        provider,
        identifier,
        status,
        privacy,
        name,
        avatar,
        followers: followerNumbers,
        followings: followingNumbers,
      };

      allUsersInfo.push(userDetails);
    }

    // Return the combined users information
    return { users: allUsersInfo };
  } catch (error) {
    console.error("Error fetching user data:", error.message);
    throw new functions.https.HttpsError('unknown', error.message, error);
  }
});


exports.toggleUserStatus = functions.https.onCall(async (data, context) => {
  // Ensure the user is authenticated and an admin.
  if (!context.auth) {
    console.log("-----------");
    throw new functions.https.HttpsError('unauthenticated', 'Request had invalid credentials.');
  }

  const { userUid, status } = data;
  console.log("+++++++++");
  console.log(userUid, status);

  try {
    // Update the disabled field in Firebase Authentication
    await admin.auth().updateUser(userUid, { disabled: !status });

    // Update the isDisabled field in the Users database reference
    const snapshot = await admin.database().ref(`Users`).orderByChild('uid').equalTo(userUid).once('value');
    // If we found the user, update their isDisabled status
    if (snapshot.exists()) {
      const updates = {};
      snapshot.forEach((childSnapshot) => {
        updates[`${childSnapshot.key}/disabled`] = !status;
      });
      await admin.database().ref(`Users`).update(updates);

      return { result: `User ${!status ? "disabled" : "enabled"} successfully.` };
    } else {
      throw new functions.https.HttpsError('not-found', 'User not found in the database.');
    }
  } catch (error) {
    console.error("Error updating user:", error);
    throw new functions.https.HttpsError('unknown', error.message, error);
  }
});
