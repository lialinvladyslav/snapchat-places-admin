import _ from "lodash";
import { icons } from "../base-components/Lucide";

export interface PerformanceInsight {
  title: string;
  value: string;
  percentageChange: number;
  description: string;
}

export interface ActivityStream {
  icon: keyof typeof icons;
  roomNumber: string;
  roomType: string;
  activity: string;
}

const fakers = {
  fakePerformanceInsight() {
    const performanceInsight: Array<PerformanceInsight> = [
      {
        title: "Occupied Rooms",
        value: "1,285",
        percentageChange: 5,
        description: "Number of rooms currently occupied",
      },
      {
        title: "Booking Statistics",
        value: "3,120",
        percentageChange: -2,
        description: "Total number of bookings made",
      },
      {
        title: "Room Booking Revenue",
        value: "28,500",
        percentageChange: 8,
        description: "Total revenue from room bookings",
      },
      {
        title: "Checked-In Guests",
        value: "2,442",
        percentageChange: 10,
        description: "Number of guests checked in today",
      },
      {
        title: "Checked-Out Guests",
        value: "9,538",
        percentageChange: -6,
        description: "Number of guests checked out today",
      },
      {
        title: "Daily Check-Ins",
        value: "7,810",
        percentageChange: 15,
        description: "Number of guests checked in today",
      },
      {
        title: "Daily Check-Outs",
        value: "4,218",
        percentageChange: 20,
        description: "Number of guests checked out today",
      },
      {
        title: "Occupancy Rate",
        value: "5,672",
        percentageChange: 3,
        description: "Percentage of occupied rooms",
      },
      {
        title: "Room Revenue Trends",
        value: "1.08",
        percentageChange: 5,
        description: "Revenue trends over the past week",
      },
      {
        title: "Weekly Arrivals",
        value: "6,232",
        percentageChange: -2,
        description: "Number of guests arriving this week",
      },
      {
        title: "Weekly Departures",
        value: "1,728",
        percentageChange: -4,
        description: "Number of guests departing this week",
      },
      {
        title: "Room Type Distribution - Deluxe",
        value: "9,345",
        percentageChange: 6,
        description: "Percentage of Deluxe rooms occupied",
      },
      {
        title: "Room Type Distribution - Standard",
        value: "4,135",
        percentageChange: -5,
        description: "Percentage of Standard rooms occupied",
      },
      {
        title: "Room Type Distribution - Suite",
        value: "1,520",
        percentageChange: 10,
        description: "Percentage of Suite rooms occupied",
      },
      {
        title: "Occupied Rooms",
        value: "7,172",
        percentageChange: 2,
        description: "Number of rooms currently occupied",
      },
      {
        title: "Vacant Rooms",
        value: "9,828",
        percentageChange: -2,
        description: "Number of rooms currently vacant",
      },
      {
        title: "RevPAR",
        value: "8,120",
        percentageChange: 7,
        description: "Revenue per available room",
      },
      {
        title: "Average Guest Rating",
        value: "4.5",
        percentageChange: 4,
        description: "Average rating given by guests",
      },
      {
        title: "Rooms Cleaned",
        value: "2,295",
        percentageChange: 12,
        description: "Number of rooms cleaned today",
      },
      {
        title: "Maintenance Requests",
        value: "4,792",
        percentageChange: -3,
        description: "Number of maintenance requests",
      },
      {
        title: "Response Time (minutes)",
        value: "3,201",
        percentageChange: -8,
        description: "Average response time for requests",
      },
      {
        title: "Special Requests Fulfilled",
        value: "9,122",
        percentageChange: 20,
        description: "Number of special requests fulfilled",
      },
      {
        title: "VIP Guests",
        value: "4,467",
        percentageChange: 0,
        description: "Number of VIP guests checked in",
      },
    ];

    return _.shuffle(performanceInsight);
  },
  fakeActivityStream() {
    const activityStream: Array<ActivityStream> = [
      {
        icon: "Zap",
        roomNumber: "101",
        roomType: "Standard",
        activity: "Guest checked in at 2:00 PM.",
      },
      {
        icon: "Laptop",
        roomNumber: "205",
        roomType: "Deluxe",
        activity: "Room cleaning completed in 205.",
      },
      {
        icon: "Fingerprint",
        roomNumber: "312",
        roomType: "Suite",
        activity: "Guest requested extra towels.",
      },
      {
        icon: "Inbox",
        roomNumber: "118",
        roomType: "Standard",
        activity: "Guest checked out at 11:30 AM.",
      },
      {
        icon: "Database",
        roomNumber: "401",
        roomType: "Suite",
        activity: "Maintenance request in 401.",
      },
      {
        icon: "Zap",
        roomNumber: "303",
        roomType: "Deluxe",
        activity: "Room service order for breakfast.",
      },
      {
        icon: "Laptop",
        roomNumber: "102",
        roomType: "Standard",
        activity: "Guest checked in at 3:15 PM.",
      },
      {
        icon: "Fingerprint",
        roomNumber: "306",
        roomType: "Deluxe",
        activity: "Room cleaning completed in 306.",
      },
      {
        icon: "Fingerprint",
        roomNumber: "215",
        roomType: "Suite",
        activity: "Guest requested a wake-up call.",
      },
      {
        icon: "Database",
        roomNumber: "125",
        roomType: "Standard",
        activity: "Guest checked out at 10:45 AM.",
      },
    ];

    return _.shuffle(activityStream);
  },
};

export default fakers;
