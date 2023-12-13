import _ from "lodash";
import users, { type User } from "./users";
import events, { type Event } from "./events";

export interface Achievement {
  id: string;
  title: string;
  description: string;
  date: string;
  imageUrl: string;
  category: string;
  location?: string;
  awardingOrganization?: string;
  level: number;
  duration: string;
  score: number;
  collaborators: Array<User>;
  event: Event;
}

const fakers = {
  fakeAchievements() {
    const achievements: Achievement[] = [
      {
        id: "1",
        title: "Certified Web Developer",
        description: "Achieved certification in web development",
        date: "2023-05-15",
        imageUrl: "/src/assets/images/projects/achievement1.jpg",
        category: "Professional",
        location: "Online",
        awardingOrganization: "Web Development Certification Institute",
        level: 3,
        duration: "6m",
        score: 95,
        collaborators: users.fakeUsers(),
        event: events.fakeEvents()[0],
      },
      {
        id: "2",
        title: "Top Performer of the Year",
        description: "Recognized as the top performer in the company",
        date: "2023-07-20",
        imageUrl: "/src/assets/images/projects/achievement2.jpg",
        category: "Professional",
        awardingOrganization: "Company ABC",
        location: "Headquarters",
        level: 2,
        duration: "1y",
        score: 90,
        collaborators: users.fakeUsers(),
        event: events.fakeEvents()[0],
      },
      {
        id: "3",
        title: "Community Volunteer Award",
        description: "Received an award for community volunteer work",
        date: "2023-08-10",
        imageUrl: "/src/assets/images/projects/achievement3.jpg",
        category: "Personal",
        location: "Local Community",
        awardingOrganization: "Community Service Association",
        level: 1,
        duration: "2y",
        score: 98,
        collaborators: users.fakeUsers(),
        event: events.fakeEvents()[0],
      },
      {
        id: "4",
        title: "Coding Competition Winner",
        description: "First place in a national coding competition",
        date: "2023-09-05",
        imageUrl: "/src/assets/images/projects/achievement4.jpg",
        category: "Academic",
        location: "City Auditorium",
        awardingOrganization: "National Coding Association",
        level: 3,
        duration: "3m",
        score: 100,
        collaborators: users.fakeUsers(),
        event: events.fakeEvents()[0],
      },
      {
        id: "5",
        title: "Leadership Excellence Award",
        description: "Recognized for outstanding leadership skills",
        date: "2023-10-15",
        imageUrl: "/src/assets/images/projects/achievement5.jpg",
        category: "Professional",
        awardingOrganization: "Leadership Association",
        level: 2,
        duration: "2y",
        score: 93,
        collaborators: users.fakeUsers(),
        event: events.fakeEvents()[0],
      },
      {
        id: "6",
        title: "Art Exhibition Honors",
        description: "Artwork featured in a prestigious art exhibition",
        date: "2023-11-20",
        imageUrl: "/src/assets/images/projects/achievement6.jpg",
        category: "Personal",
        location: "Art Gallery",
        awardingOrganization: "Art Society",
        level: 2,
        duration: "1y",
        score: 88,
        collaborators: users.fakeUsers(),
        event: events.fakeEvents()[0],
      },
      {
        id: "7",
        title: "Entrepreneurship Competition Winner",
        description: "First place in a startup competition",
        date: "2023-12-10",
        imageUrl: "/src/assets/images/projects/achievement7.jpg",
        category: "Professional",
        location: "Startup Expo",
        awardingOrganization: "Entrepreneurship Association",
        level: 3,
        duration: "6m",
        score: 97,
        collaborators: users.fakeUsers(),
        event: events.fakeEvents()[0],
      },
      {
        id: "8",
        title: "Music Performance Award",
        description: "Received an award for outstanding music performance",
        date: "2024-01-15",
        imageUrl: "/src/assets/images/projects/achievement8.jpg",
        category: "Personal",
        location: "Concert Hall",
        awardingOrganization: "Music Society",
        level: 2,
        duration: "2y",
        score: 91,
        collaborators: users.fakeUsers(),
        event: events.fakeEvents()[0],
      },
      {
        id: "9",
        title: "Innovation Challenge Winner",
        description: "Won the innovation challenge with a creative solution",
        date: "2024-02-20",
        imageUrl: "/src/assets/images/projects/achievement9.jpg",
        category: "Professional",
        location: "Innovation Expo",
        awardingOrganization: "Innovation Institute",
        level: 3,
        duration: "9m",
        score: 96,
        collaborators: users.fakeUsers(),
        event: events.fakeEvents()[0],
      },
      {
        id: "10",
        title: "Fitness Achievement",
        description: "Achieved fitness goals and lost 20 pounds",
        date: "2024-03-10",
        imageUrl: "/src/assets/images/projects/achievement10.jpg",
        category: "Personal",
        location: "Gym",
        level: 1,
        duration: "1y",
        score: 85,
        collaborators: users.fakeUsers(),
        event: events.fakeEvents()[0],
      },
    ];

    return _.shuffle(achievements);
  },
};

export default fakers;
