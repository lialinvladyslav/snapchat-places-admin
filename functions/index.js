const functions = require('firebase-functions');
const admin = require('firebase-admin');
const axios = require('axios');
admin.initializeApp();

const mapKey = 'AIzaSyAuiY-se4dvIZJNPHFGlkR42DqfxC-BLUg';

exports.getAllPlaces = functions.https.onCall(async (data, context) => {
  // Ensure the user is authenticated
  if (!context.auth) {
    throw new functions.https.HttpsError('unauthenticated', 'The function must be called while authenticated.');
  }
  try {
    // Initialize references to the database
    const storiesRef = admin.database().ref('Stories');
    const placeFollowingsRef = admin.database().ref('PlaceFollowings');

    // Fetch all stories to extract placeIds
    const storiesSnapshot = await storiesRef.once('value');
    const stories = storiesSnapshot.val();

    // Extract unique placeIds
    const placeIds = new Set(Object.values(stories).map(story => story.placeId));
    // Create an array to hold all place details
    const places = [];

    // Iterate over the placeIds and fetch details from Google Maps API
    for (const placeId of placeIds) {
      const fields = "id,displayName,formattedAddress,location,photos,primaryType";
      const googleMapsUrl =
        `https://places.googleapis.com/v1/places/${placeId}?fields=${fields}&key=${mapKey}`;
      const placeDetailsResponse =
        await axios.get(googleMapsUrl);
      const placeDetails = placeDetailsResponse.data;
      // Get the first photo reference if it exists
      let firstPhotoReference = undefined;
      if (placeDetails.photos) {
        firstPhotoReference = placeDetails.photos[0].name;
      }
      // Calculate following count
      const followingsSnapshot = await placeFollowingsRef.orderByChild('placeId').equalTo(placeId).once('value');
      const followingsCount = followingsSnapshot.numChildren();
      // Construct place object
      let photoUrl = "";
      if (firstPhotoReference != undefined) {
        const url =
          `https://places.googleapis.com/v1/${firstPhotoReference}/media?maxHeightPx=100&maxWidthPx=100&key=${mapKey}`;
        const photoInfo = await axios.get(url);
        console.log(";;;;;;;;;;", photoInfo);
        if (photoInfo.data) {
          photoUrl = photoInfo.data.photoUri;
        }
      }
      const place = {
        id: placeId,
        name: placeDetails.displayName.text,
        primaryType: placeDetails.primaryType,
        formattedAddress: placeDetails.formattedAddress,
        url: photoUrl,
        lng: placeDetails.location.longitude,
        lat: placeDetails.location.latitude,
        followings: followingsCount,
      };
      places.push(place);
    }
    return { places: places };
  } catch (error) {
    console.error("Error updating user:", error);
    throw new functions.https.HttpsError('unknown', error.message, error);
  }
});

exports.getPlaceStories = functions.https.onCall(async (data, context) => {
  // Ensure the user is authenticated
  if (!context.auth) {
    throw new functions.https.HttpsError('unauthenticated', 'The function must be called while authenticated.');
  }

  const { placeId } = data;
  try {
    // Get all stories with matching userUid
    const storiesRef = admin.database().ref('Stories');
    const storiesSnapshot = await storiesRef.orderByChild('placeId').equalTo(placeId).once('value');
    const stories = storiesSnapshot.val();
    const userIds = Array.from(new Set(Object.values(stories).map(story => story.userUid)));
    const storiesInfo = [];
    for (const userUid of userIds) {
      const usersSnapshot = await admin.database().ref('Users').orderByChild('uid').equalTo(userUid).once('value');
      const usersDataValues = usersSnapshot.val();
      const userData = Object.values(usersDataValues)[0];
      for (const storyKey in stories) {
        if (stories[storyKey].userUid === userUid) {
          const storyInfo = {
            storyKey: storyKey,
            userName: userData.username,
            userAvatar: userData.avatar,
            url: stories[storyKey].url,
            contentType: stories[storyKey].contentType,
          };
          storiesInfo.push(storyInfo);
        }
      }
    }
    return { stories: storiesInfo };
  } catch (error) {
    console.error("Error updating user:", error);
    throw new functions.https.HttpsError('unknown', error.message, error);
  }
});

exports.deleteStory = functions.https.onCall(async (data, context) => {
  // Ensure the user is authenticated
  if (!context.auth) {
    throw new functions.https.HttpsError('unauthenticated', 'The function must be called while authenticated.');
  }

  const { storyKey } = data;
  try {
    // Get all stories with matching userUid
    const storyRef = admin.database().ref(`Stories/${storyKey}`);
    await storyRef.remove();
    return { result: `Story deleted  successfully.` };
  } catch (error) {
    console.error("Error updating user:", error);
    throw new functions.https.HttpsError('unknown', error.message, error);
  }
});

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
      const followersSnapshot = await db.ref('Followings').orderByChild('following').equalTo(userKey).once('value');
      const followersData = followersSnapshot.val() || {};
      const followerNumbers = Object.keys(followersData).length;
      // Calculate follower_numbers from "followers" ref
      const followingsSnapshot = await db.ref('Followings').orderByChild('follower').equalTo(userKey).once('value');
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

exports.getUsersStories = functions.https.onCall(async (data, context) => {
  // Ensure the user is authenticated
  if (!context.auth) {
    throw new functions.https.HttpsError('unauthenticated', 'The function must be called while authenticated.');
  }

  const { userUid } = data;
  try {
    // Get all stories with matching userUid
    const storiesRef = admin.database().ref('/Stories');
    const storiesSnapshot = await storiesRef.orderByChild('userUid').equalTo(userUid).once('value');
    const stories = storiesSnapshot.val();
    const placeIds = Array.from(new Set(Object.values(stories).map(story => story.placeId)));
    // Fetch place details for each placeId from Google Maps API
    const placesInfo = [];
    for (const placeId of placeIds) {
      const googleMapsUrl =
        `https://places.googleapis.com/v1/places/${placeId}?fields=id,displayName,formattedAddress&key=${mapKey}`;

      const googleApiResponse = await axios.get(googleMapsUrl);
      // Check if API response is successful and has result data
      if (googleApiResponse.data) {
        const placeDetail = googleApiResponse.data;
        // Collect URL(s) associated with this placeId from our stories
        Object.values(stories).forEach(story => {
          if (story.placeId === placeId) {
            const placeInfo = {
              placeDisplayName: placeDetail.displayName.text,
              formattedAddress: placeDetail.formattedAddress,
              url: story.url,
              contentType: story.contentType,
            };
            placesInfo.push(placeInfo);
          }
        });
      }
    }
    return { stories: placesInfo };
  } catch (error) {
    console.error("Error updating user:", error);
    throw new functions.https.HttpsError('unknown', error.message, error);
  }
});

exports.toggleUserStatus = functions.https.onCall(async (data, context) => {
  // Ensure the user is authenticated and an admin.
  if (!context.auth) {
    throw new functions.https.HttpsError('unauthenticated', 'Request had invalid credentials.');
  }

  const { userUid, status } = data;

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

exports.getAllReports = functions.https.onCall(async (data, context) => {
  // Ensure the user is authenticated
  if (!context.auth) {
    throw new functions.https.HttpsError('unauthenticated', 'The function must be called while authenticated.');
  }
  try {
    // Initialize references to the database
    const reportsRef = admin.database().ref('Reports');

    // Fetch all reports to extract placeIds
    const reportsSnapshot = await reportsRef.once('value');
    const reports = reportsSnapshot.val();

    const reportsInfo = [];

    // Iterate over the placeIds and fetch details from Google Maps API
    for (const reportKey in reports) {
      console.log("*********", reportKey);
      const userKey = reports[reportKey].userKey;
      const userRef = admin.database().ref(`Users/${userKey}`);
      const userSnapshot = await userRef.once('value');
      const userData = userSnapshot.val();
      console.log("+++++", userData);
      const storyKey = reports[reportKey].storyKey;
      const storyRef = admin.database().ref(`Stories/${storyKey}`);
      const storySnapshot = await storyRef.once('value');
      const storyData = storySnapshot.val();
      console.log("+++++++++", storyData);
      const placeId = storyData.placeId;
      const googleMapsUrl =
        `https://places.googleapis.com/v1/places/${placeId}?fields=id,displayName,formattedAddress&key=${mapKey}`;

      const googleApiResponse = await axios.get(googleMapsUrl);

      if (googleApiResponse.data) {
        const placeDetail = googleApiResponse.data;
        console.log("________", placeDetail);
        const reportInfo = {
          reportKey: reportKey,
          storyKey: storyKey,
          placeDisplayName: placeDetail.displayName.text,
          formattedAddress: placeDetail.formattedAddress,
          url: storyData.url,
          contentType: storyData.contentType,
          reporter: userData.username,
          reporterAvatar: userData.avatar,
        };
        console.log("&&&&&&&&&", reportInfo);
        reportsInfo.push(reportInfo);
      }
    }
    return { reportsInfo: reportsInfo };
  } catch (error) {
    console.error("Error updating user:", error);
    throw new functions.https.HttpsError('unknown', error.message, error);
  }
});

exports.handleReport = functions.https.onCall(async (data, context) => {
  // Ensure the user is authenticated and an admin.
  if (!context.auth) {
    throw new functions.https.HttpsError('unauthenticated', 'Request had invalid credentials.');
  }

  const { reportKey, storyKey, action } = data;

  try {
    const reportRef = admin.database().ref(`Reports/${reportKey}`);
    reportRef.remove();
    if (action == "accept") {
      const storyRef = admin.database().ref(`Stories/${storyKey}`);
      storyRef.remove();
    }
    return { result: `Report solved successfully.` };
  } catch (error) {
    console.error("Error updating user:", error);
    throw new functions.https.HttpsError('unknown', error.message, error);
  }
});

exports.getStatistics = functions.https.onCall(async (data, context) => {
  // Ensure the user is authenticated and an admin.
  if (!context.auth) {
    throw new functions.https.HttpsError('unauthenticated', 'Request had invalid credentials.');
  }

  try {
    // get all users
    const usersRef = admin.database().ref('Users');
    const usersSnapshot = await usersRef.once('value');
    const users = usersSnapshot.val();
    const userUids = new Set(Object.values(users).map(user => user.uid));
    const usersNumber = userUids.size;
    // get all stories
    const storiesRef = admin.database().ref('Stories');
    const storiesSnapshot = await storiesRef.once('value');
    const stories = storiesSnapshot.val();
    const storiesNumber = Object.keys(stories).length;
    const placeIds = new Set(Object.values(stories).map(story => story.placeId));
    const placesNumber = placeIds.size;
    // get all users
    const reportsRef = admin.database().ref('Reports');
    const reportsSnapshot = await reportsRef.once('value');
    const reports = reportsSnapshot.val();
    const reportsUsers = new Set(Object.values(reports).map(report => report.userKey));
    const reportsUsersNumber = reportsUsers.size;
    const reportsNumber = Object.keys(reports).length;
    return {
      usersNumber,
      storiesNumber,
      placesNumber,
      reportsNumber,
      reportsUsersNumber,
    };
  } catch (error) {
    console.error("Error updating user:", error);
    throw new functions.https.HttpsError('unknown', error.message, error);
  }
});
