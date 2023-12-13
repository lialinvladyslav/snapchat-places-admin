import _ from "lodash";
import users, { type User } from "./users";

export interface ProjectDetail {
  title: string;
  link: string;
  contributors: Array<User>;
  image: string;
}

const imageAssets = import.meta.glob<{
  default: string;
}>("/src/assets/images/projects/*.{jpg,jpeg,png,svg}", { eager: true });

function generateRandomLink() {
  const randomChars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  return `http://left4code.com/share/${Array.from(
    { length: 10 },
    () => randomChars[Math.floor(Math.random() * randomChars.length)]
  ).join("")}`;
}

const fakers = {
  fakeProjectDetails() {
    const projectDetails: Array<ProjectDetail> = [
      {
        title: "Marketing Campaign Poster",
        link: generateRandomLink(),
        contributors: users.fakeUsers(),
        image:
          imageAssets["/src/assets/images/projects/project1-400x400.jpg"]
            .default,
      },
      {
        title: "Social Media Graphics",
        link: generateRandomLink(),
        contributors: users.fakeUsers(),
        image:
          imageAssets["/src/assets/images/projects/project2-400x400.jpg"]
            .default,
      },
      {
        title: "Website Redesign Mockup",
        link: generateRandomLink(),
        contributors: users.fakeUsers(),
        image:
          imageAssets["/src/assets/images/projects/project3-400x400.jpg"]
            .default,
      },
      {
        title: "Content Calendar",
        link: generateRandomLink(),
        contributors: users.fakeUsers(),
        image:
          imageAssets["/src/assets/images/projects/project4-400x400.jpg"]
            .default,
      },
      {
        title: "Email Campaign Templates",
        link: generateRandomLink(),
        contributors: users.fakeUsers(),
        image:
          imageAssets["/src/assets/images/projects/project5-400x400.jpg"]
            .default,
      },
      {
        title: "Market Research Report",
        link: generateRandomLink(),
        contributors: users.fakeUsers(),
        image:
          imageAssets["/src/assets/images/projects/project6-400x400.jpg"]
            .default,
      },
      {
        title: "Video Advertisements",
        link: generateRandomLink(),
        contributors: users.fakeUsers(),
        image:
          imageAssets["/src/assets/images/projects/project7-400x400.jpg"]
            .default,
      },
      {
        title: "Product Brochures",
        link: generateRandomLink(),
        contributors: users.fakeUsers(),
        image:
          imageAssets["/src/assets/images/projects/project8-400x400.jpg"]
            .default,
      },
      {
        title: "Social Media Analytics",
        link: generateRandomLink(),
        contributors: users.fakeUsers(),
        image:
          imageAssets["/src/assets/images/projects/project9-400x400.jpg"]
            .default,
      },
      {
        title: "Sales Presentation Deck",
        link: generateRandomLink(),
        contributors: users.fakeUsers(),
        image:
          imageAssets["/src/assets/images/projects/project10-400x400.jpg"]
            .default,
      },
    ];

    return _.shuffle(projectDetails);
  },
};

export default fakers;
