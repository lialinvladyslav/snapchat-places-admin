import _ from "lodash";
import browsers, { Browser } from "./browsers";

export interface RecentDevice {
  browser: Browser;
  device: string;
  location: string;
  activity: string;
  operatingSystem: string;
}

const fakers = {
  fakeRecentDevices() {
    const recentDevices: Array<RecentDevice> = [
      {
        browser: browsers.fakeBrowser()[0],
        device: "Desktop",
        location: "New York, USA",
        activity: "Online",
        operatingSystem: "Windows 10",
      },
      {
        browser: browsers.fakeBrowser()[0],
        device: "Laptop",
        location: "London, UK",
        activity: "Online",
        operatingSystem: "macOS Catalina",
      },
      {
        browser: browsers.fakeBrowser()[0],
        device: "Tablet",
        location: "Paris, France",
        activity: "Offline",
        operatingSystem: "iOS 14",
      },
      {
        browser: browsers.fakeBrowser()[0],
        device: "Mobile",
        location: "Tokyo, Japan",
        activity: "Online",
        operatingSystem: "Android 11",
      },
      {
        browser: browsers.fakeBrowser()[0],
        device: "Desktop",
        location: "Berlin, Germany",
        activity: "Online",
        operatingSystem: "Windows 11",
      },
      {
        browser: browsers.fakeBrowser()[0],
        device: "Laptop",
        location: "Sydney, Australia",
        activity: "Offline",
        operatingSystem: "macOS Big Sur",
      },
      {
        browser: browsers.fakeBrowser()[0],
        device: "Tablet",
        location: "Toronto, Canada",
        activity: "Online",
        operatingSystem: "iOS 15",
      },
      {
        browser: browsers.fakeBrowser()[0],
        device: "Mobile",
        location: "Seoul, South Korea",
        activity: "Offline",
        operatingSystem: "Android 12",
      },
      {
        browser: browsers.fakeBrowser()[0],
        device: "Desktop",
        location: "Mumbai, India",
        activity: "Online",
        operatingSystem: "Windows 10",
      },
      {
        browser: browsers.fakeBrowser()[0],
        device: "Laptop",
        location: "Rio de Janeiro, Brazil",
        activity: "Online",
        operatingSystem: "macOS Monterey",
      },
    ];

    return _.shuffle(recentDevices);
  },
};

export default fakers;
