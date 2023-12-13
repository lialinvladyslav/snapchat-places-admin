import _ from "lodash";
import dayjs from "dayjs";
import users, { type User } from "./users";

export interface Project {
  projectName: string;
  projectManager: User;
  creativeDirector: User;
  dueDate: string;
}

const fakers = {
  fakeProjects() {
    const projects: Array<Project> = [
      {
        projectName: "Web Odyssey: Redesigning the Future - 2043",
        projectManager: users.fakeUsers()[0],
        creativeDirector: users.fakeUsers()[0],
        dueDate: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
      },
      {
        projectName: "Appventures: Crafting Magic - 2043",
        projectManager: users.fakeUsers()[0],
        creativeDirector: users.fakeUsers()[0],
        dueDate: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
      },
      {
        projectName: "Content Constellations: Shaping Stories - 2043",
        projectManager: users.fakeUsers()[0],
        creativeDirector: users.fakeUsers()[0],
        dueDate: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
      },
      {
        projectName: "Customer Chronicles: Engagement Quest - 2042",
        projectManager: users.fakeUsers()[0],
        creativeDirector: users.fakeUsers()[0],
        dueDate: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
      },
      {
        projectName: "Social Symphony: Spring Serenade - 2043",
        projectManager: users.fakeUsers()[0],
        creativeDirector: users.fakeUsers()[0],
        dueDate: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
      },
      {
        projectName: "E-commerce Enchantment: Winter Wonders - 2043",
        projectManager: users.fakeUsers()[0],
        creativeDirector: users.fakeUsers()[0],
        dueDate: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
      },
      {
        projectName: "Productivity Pioneers: Journey to Efficiency - 2042",
        projectManager: users.fakeUsers()[0],
        creativeDirector: users.fakeUsers()[0],
        dueDate: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
      },
      {
        projectName: "Brand Ballet: Dancing into Spring - 2043",
        projectManager: users.fakeUsers()[0],
        creativeDirector: users.fakeUsers()[0],
        dueDate: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
      },
      {
        projectName: "MarketQuest: Exploring New Horizons - 2042",
        projectManager: users.fakeUsers()[0],
        creativeDirector: users.fakeUsers()[0],
        dueDate: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
      },
      {
        projectName: "SalesSaga: Summer Success - 2043",
        projectManager: users.fakeUsers()[0],
        creativeDirector: users.fakeUsers()[0],
        dueDate: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
      },
    ];

    return _.shuffle(projects);
  },
};

export default fakers;
