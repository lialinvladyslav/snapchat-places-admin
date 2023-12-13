import _ from "lodash";
import dayjs from "dayjs";
import { icons } from "../base-components/Lucide";
import users, { type User } from "./users";

export interface Event {
  id: string;
  title: string;
  description: string;
  location: string;
  date: string;
  time: string;
  icon: keyof typeof icons;
  organizer: string;
  attendees: Array<User>;
  availableSeats: number;
  registrationLink?: string;
  maxAttendees?: number;
  image: string;
}

const imageAssets = import.meta.glob<{
  default: string;
}>("/src/assets/images/projects/*.{jpg,jpeg,png,svg}", { eager: true });

const fakers = {
  fakeEvents() {
    const events: Array<Event> = [
      {
        id: "1",
        title: "Tech Conference",
        description: "Annual tech conference for developers",
        location: "City Convention Center",
        date: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
        time: "09:00 AM",
        icon: "Hourglass",
        organizer: "Tech Events Inc.",
        attendees: users.fakeUsers(),
        availableSeats: _.random(1, 4),
        registrationLink: "https://left4code.com/tech-conference",
        maxAttendees: 500,
        image:
          imageAssets["/src/assets/images/projects/project1-400x400.jpg"]
            .default,
      },
      {
        id: "2",
        title: "Product Launch",
        description: "Launch event for our latest product",
        location: "Company Headquarters",
        date: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
        time: "02:30 PM",
        icon: "Clock4",
        organizer: "Left4code",
        attendees: users.fakeUsers(),
        availableSeats: _.random(1, 4),
        registrationLink: "https://left4code.com/product-launch",
        maxAttendees: 200,
        image:
          imageAssets["/src/assets/images/projects/project2-400x400.jpg"]
            .default,
      },
      {
        id: "3",
        title: "Team Building Workshop",
        description: "Team-building activities and games",
        location: "City Park",
        date: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
        time: "10:00 AM",
        icon: "Truck",
        organizer: "Team Builders Inc.",
        attendees: users.fakeUsers(),
        availableSeats: _.random(1, 4),
        registrationLink: "https://left4code.com/team-building",
        maxAttendees: 100,
        image:
          imageAssets["/src/assets/images/projects/project3-400x400.jpg"]
            .default,
      },
      {
        id: "4",
        title: "Marketing Workshop",
        description: "Workshop on modern marketing strategies",
        location: "Hotel Conference Room",
        date: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
        time: "11:15 AM",
        icon: "PackageCheck",
        organizer: "Marketing Pro",
        attendees: users.fakeUsers(),
        availableSeats: _.random(1, 4),
        registrationLink: "https://left4code.com/marketing-workshop",
        maxAttendees: 150,
        image:
          imageAssets["/src/assets/images/projects/project4-400x400.jpg"]
            .default,
      },
      {
        id: "5",
        title: "Community Cleanup",
        description: "Volunteer event to clean up the neighborhood",
        location: "Community Center",
        date: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
        time: "09:00 AM",
        icon: "PackageX",
        organizer: "Local Community Association",
        attendees: users.fakeUsers(),
        availableSeats: _.random(1, 4),
        registrationLink: "https://left4code.com/community-cleanup",
        maxAttendees: 50,
        image:
          imageAssets["/src/assets/images/projects/project5-400x400.jpg"]
            .default,
      },
      {
        id: "6",
        title: "Webinar: AI in Healthcare",
        description: "Online webinar on AI applications in healthcare",
        location: "Online",
        date: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
        time: "03:00 PM",
        icon: "Wallet",
        organizer: "AI Experts",
        attendees: users.fakeUsers(),
        availableSeats: _.random(1, 4),
        registrationLink: "https://left4code.com/ai-webinar",
        maxAttendees: 300,
        image:
          imageAssets["/src/assets/images/projects/project6-400x400.jpg"]
            .default,
      },
      {
        id: "7",
        title: "Networking Mixer",
        description: "Networking event for professionals",
        location: "Downtown Lounge",
        date: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
        time: "07:30 PM",
        icon: "ArrowLeftSquare",
        organizer: "Networking Pro",
        attendees: users.fakeUsers(),
        availableSeats: _.random(1, 4),
        registrationLink: "https://left4code.com/networking-mixer",
        maxAttendees: 80,
        image:
          imageAssets["/src/assets/images/projects/project7-400x400.jpg"]
            .default,
      },
      {
        id: "8",
        title: "Customer Workshop",
        description: "Hands-on workshop for our customers",
        location: "Company Training Center",
        date: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
        time: "10:30 AM",
        icon: "FileX2",
        organizer: "Left4code",
        attendees: users.fakeUsers(),
        availableSeats: _.random(1, 4),
        registrationLink: "https://left4code.com/customer-workshop",
        maxAttendees: 120,
        image:
          imageAssets["/src/assets/images/projects/project8-400x400.jpg"]
            .default,
      },
      {
        id: "9",
        title: "Holiday Party",
        description: "Annual holiday celebration and party",
        location: "Grand Hotel Ballroom",
        date: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
        time: "08:00 PM",
        icon: "PackageSearch",
        organizer: "Left4code",
        attendees: users.fakeUsers(),
        availableSeats: _.random(1, 4),
        registrationLink: "https://left4code.com/holiday-party",
        maxAttendees: 250,
        image:
          imageAssets["/src/assets/images/projects/project9-400x400.jpg"]
            .default,
      },
      {
        id: "10",
        title: "Company Retreat",
        description: "Team retreat in a scenic location",
        location: "Mountain Resort",
        date: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
        time: "All Day",
        icon: "Package",
        organizer: "Left4code",
        attendees: users.fakeUsers(),
        availableSeats: _.random(1, 4),
        registrationLink: "https://left4code.com/company-retreat",
        maxAttendees: 60,
        image:
          imageAssets["/src/assets/images/projects/project10-400x400.jpg"]
            .default,
      },
    ];

    return _.shuffle(events);
  },
};

export default fakers;
