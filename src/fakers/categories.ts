import _ from "lodash";
import { icons } from "../base-components/Lucide";

export interface Category {
  name: string;
  icon: keyof typeof icons;
  tags: string[];
  slug: string;
  isActive: boolean;
}

const fakers = {
  fakeCategories() {
    const categories: Array<Category> = [
      {
        name: "Electronics",
        icon: "Laptop",
        tags: ["Gadgets", "Tech", "Electrical"],
        slug: "electronics",
        isActive: true,
      },
      {
        name: "Clothing",
        icon: "Shirt",
        tags: ["Apparel", "Fashion", "Style"],
        slug: "clothing",
        isActive: true,
      },
      {
        name: "Home & Garden",
        icon: "DoorOpen",
        tags: ["Decor", "Furniture", "Outdoor"],
        slug: "home-and-garden",
        isActive: false,
      },
      {
        name: "Books",
        icon: "Book",
        tags: ["Reading", "Literature", "Knowledge"],
        slug: "books",
        isActive: true,
      },
      {
        name: "Sports & Outdoors",
        icon: "Trophy",
        tags: ["Fitness", "Recreation", "Nature"],
        slug: "sports-and-outdoors",
        isActive: true,
      },
      {
        name: "Toys & Games",
        icon: "Gamepad2",
        tags: ["Play", "Entertainment", "Fun"],
        slug: "toys-and-games",
        isActive: true,
      },
      {
        name: "Beauty & Personal Care",
        icon: "VenetianMask",
        tags: ["Beauty", "Personal Hygiene", "Self-care"],
        slug: "beauty-and-personal-care",
        isActive: true,
      },
      {
        name: "Furniture",
        icon: "Armchair",
        tags: ["Home Decor", "Interior", "Comfort"],
        slug: "furniture",
        isActive: true,
      },
      {
        name: "Jewelry",
        icon: "Gem",
        tags: ["Accessories", "Ornaments", "Luxury"],
        slug: "jewelry",
        isActive: true,
      },
      {
        name: "Food & Grocery",
        icon: "Cookie",
        tags: ["Food", "Groceries", "Consumables"],
        slug: "food-and-grocery",
        isActive: true,
      },
    ];
    return _.shuffle(categories);
  },
};

export default fakers;
