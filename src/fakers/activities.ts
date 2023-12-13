import _ from "lodash";
import dayjs from "dayjs";

type UploadedFile = {
  filename: string;
  size: string;
  fileType: string;
};

export interface Activity {
  date: string;
  activity: string;
  activityDetails?: string;
  uploadedFiles?: UploadedFile[];
  statusBadge: string;
  images?: string[];
}

const imageAssets = import.meta.glob<{
  default: string;
}>("/src/assets/images/projects/*.{jpg,jpeg,png,svg}", { eager: true });

const filteredImages = Object.keys(imageAssets).filter(
  (file) => file.search("400x400") !== -1
);

const fakers = {
  fakeActivities() {
    const activities: Activity[] = [
      {
        date: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
        activity: "Uploaded documents",
        activityDetails: "Uploaded important project documents",
        uploadedFiles: [
          {
            filename: "document1.pdf",
            size: "2.5MB",
            fileType: "PDF",
          },
          {
            filename: "document2.docx",
            size: "1.8MB",
            fileType: "DOCX",
          },
        ],
        statusBadge: "Completed",
      },
      {
        date: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
        activity: "Logged in successfully",
        activityDetails: "Accessed the dashboard",
        statusBadge: "Success",
        images: [
          imageAssets[filteredImages[_.random(0, filteredImages.length - 1)]]
            .default,
          imageAssets[filteredImages[_.random(0, filteredImages.length - 1)]]
            .default,
          imageAssets[filteredImages[_.random(0, filteredImages.length - 1)]]
            .default,
        ],
      },
      {
        date: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
        activity: "Uploaded a spreadsheet",
        activityDetails: "Added financial data for Q3",
        uploadedFiles: [
          {
            filename: "spreadsheet.xlsx",
            size: "3.4MB",
            fileType: "XLSX",
          },
        ],
        statusBadge: "Completed",
      },
      {
        date: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
        activity: "Updated profile picture",
        activityDetails: "Changed profile photo",
        statusBadge: "Success",
        images: [
          imageAssets[filteredImages[_.random(0, filteredImages.length - 1)]]
            .default,
          imageAssets[filteredImages[_.random(0, filteredImages.length - 1)]]
            .default,
          imageAssets[filteredImages[_.random(0, filteredImages.length - 1)]]
            .default,
        ],
      },
      {
        date: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
        activity: "Uploaded code files",
        activityDetails: "Added new code modules",
        uploadedFiles: [
          {
            filename: "code1.js",
            size: "300KB",
            fileType: "JavaScript",
          },
          {
            filename: "code2.py",
            size: "450KB",
            fileType: "Python",
          },
        ],
        statusBadge: "Completed",
      },
      {
        date: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
        activity: "Received 5 new emails",
        activityDetails: "Inbox updates",
        uploadedFiles: [
          {
            filename: "presentation1.pptx",
            size: "5.2MB",
            fileType: "PPTX",
          },
          {
            filename: "presentation2.ppt",
            size: "4.5MB",
            fileType: "PPT",
          },
        ],
        statusBadge: "Info",
      },
      {
        date: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
        activity: "Uploaded video files",
        activityDetails: "Shared video tutorials",
        uploadedFiles: [
          {
            filename: "video1.mp4",
            size: "15MB",
            fileType: "MP4",
          },
          {
            filename: "video2.mov",
            size: "12.5MB",
            fileType: "MOV",
          },
        ],
        statusBadge: "Completed",
      },
      {
        date: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
        activity: "Task completed: Review Project Proposal",
        activityDetails: "Reviewed and provided feedback",
        statusBadge: "Completed",
        images: [
          imageAssets[filteredImages[_.random(0, filteredImages.length - 1)]]
            .default,
          imageAssets[filteredImages[_.random(0, filteredImages.length - 1)]]
            .default,
          imageAssets[filteredImages[_.random(0, filteredImages.length - 1)]]
            .default,
        ],
      },
      {
        date: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
        activity: "Uploaded images",
        activityDetails: "Added project screenshots",
        images: [
          imageAssets[filteredImages[_.random(0, filteredImages.length - 1)]]
            .default,
          imageAssets[filteredImages[_.random(0, filteredImages.length - 1)]]
            .default,
          imageAssets[filteredImages[_.random(0, filteredImages.length - 1)]]
            .default,
        ],
        statusBadge: "Completed",
      },
      {
        date: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
        activity: "Posted a status update",
        activityDetails: "Shared thoughts on the project",
        statusBadge: "Success",
      },
      {
        date: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
        activity: "Uploaded presentations",
        activityDetails: "Added slides for the team meeting",
        uploadedFiles: [
          {
            filename: "presentation1.pptx",
            size: "5.2MB",
            fileType: "PPTX",
          },
          {
            filename: "presentation2.ppt",
            size: "4.5MB",
            fileType: "PPT",
          },
        ],
        statusBadge: "Completed",
      },
      {
        date: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
        activity: "Logged out",
        activityDetails: "Signed out from the dashboard",
        statusBadge: "Info",
        images: [
          imageAssets[filteredImages[_.random(0, filteredImages.length - 1)]]
            .default,
          imageAssets[filteredImages[_.random(0, filteredImages.length - 1)]]
            .default,
          imageAssets[filteredImages[_.random(0, filteredImages.length - 1)]]
            .default,
        ],
      },
      {
        date: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
        activity: "Received a friend request",
        activityDetails: "Friend request from John",
        images: [
          imageAssets[filteredImages[_.random(0, filteredImages.length - 1)]]
            .default,
          imageAssets[filteredImages[_.random(0, filteredImages.length - 1)]]
            .default,
          imageAssets[filteredImages[_.random(0, filteredImages.length - 1)]]
            .default,
        ],
        statusBadge: "New",
      },
      {
        date: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
        activity: "Added a new contact",
        activityDetails: "Added a new contact, Sarah",
        uploadedFiles: [
          {
            filename: "spreadsheet.xlsx",
            size: "3.4MB",
            fileType: "XLSX",
          },
        ],
        statusBadge: "Success",
      },
      {
        date: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
        activity: "Uploaded audio recordings",
        activityDetails: "Recorded podcast episodes",
        uploadedFiles: [
          {
            filename: "audio1.mp3",
            size: "4.8MB",
            fileType: "MP3",
          },
          {
            filename: "audio2.wav",
            size: "6.2MB",
            fileType: "WAV",
          },
        ],
        statusBadge: "Completed",
      },
    ];

    return _.shuffle(activities);
  },
};

export default fakers;
