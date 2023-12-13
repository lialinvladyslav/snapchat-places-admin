import _ from "lodash";
import products, { type Product } from "./products";
import { icons } from "../base-components/Lucide";

interface PerformanceInsight {
  title: string;
  subtitle: string;
  icon: keyof typeof icons;
  images: Product["images"];
  link: string;
}

const fakers = {
  fakePerformanceInsights() {
    const performanceInsights: Array<PerformanceInsight> = [
      {
        title: "Top 10 Products",
        subtitle: "Featured products",
        icon: "Zap",
        images: products.fakeProducts()[0].images,
        link: "Explore Products",
      },
      {
        title: "Top 5 Categories",
        subtitle: "Popular categories",
        icon: "Laptop",
        images: products.fakeProducts()[0].images,
        link: "Explore Categories",
      },

      {
        title: "Customer Favorites",
        subtitle: "Customer of the month",
        icon: "Fingerprint",
        images: products.fakeProducts()[0].images,
        link: "Explore Products",
      },
      {
        title: "Low Stock Alerts",
        subtitle: "Items running out",
        icon: "Inbox",
        images: products.fakeProducts()[0].images,
        link: "View Inventory",
      },

      {
        title: "Marketing Highlights",
        subtitle: "Recent campaigns",
        icon: "Database",
        images: products.fakeProducts()[0].images,
        link: "Explore Campaigns",
      },
    ];

    return _.shuffle(performanceInsights);
  },
};

export default fakers;
