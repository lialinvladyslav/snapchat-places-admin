import _ from "lodash";
import dayjs from "dayjs";
import { formatCurrency } from "../utils/helper";

export interface CafeSales {
  date: string;
  totalSales: string;
  menuItemsSold: string;
  customerFeedback: number;
  inventoryStatus: string;
}

const fakers = {
  fakeCafeSales() {
    const cafeSales: Array<CafeSales> = [
      {
        date: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
        totalSales: formatCurrency(_.random(1, 2000)),
        menuItemsSold: "Espresso: 50",
        customerFeedback: 4.5,
        inventoryStatus: "Coffee Beans: 10 kg",
      },
      {
        date: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
        totalSales: formatCurrency(_.random(1, 2000)),
        menuItemsSold: "Latte: 40",
        customerFeedback: 4.2,
        inventoryStatus: "Milk: 20 liters",
      },
      {
        date: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
        totalSales: formatCurrency(_.random(1, 2000)),
        menuItemsSold: "Cappuccino: 45",
        customerFeedback: 4.8,
        inventoryStatus: "Pastries: 30",
      },
      {
        date: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
        totalSales: formatCurrency(_.random(1, 2000)),
        menuItemsSold: "Americano: 30",
        customerFeedback: 4.0,
        inventoryStatus: "Syrup Bottles: 5",
      },
      {
        date: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
        totalSales: formatCurrency(_.random(1, 2000)),
        menuItemsSold: "Mocha: 35",
        customerFeedback: 4.7,
        inventoryStatus: "Cups: 100",
      },
      {
        date: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
        totalSales: formatCurrency(_.random(1, 2000)),
        menuItemsSold: "Iced Coffee:",
        customerFeedback: 4.3,
        inventoryStatus: "Sugar Packets: 50",
      },
      {
        date: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
        totalSales: formatCurrency(_.random(1, 2000)),
        menuItemsSold: "Tea: 25",
        customerFeedback: 4.6,
        inventoryStatus: "Napkins: 200",
      },
      {
        date: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
        totalSales: formatCurrency(_.random(1, 2000)),
        menuItemsSold: "Hot Chocolate:",
        customerFeedback: 4.9,
        inventoryStatus: "Stirrers: 100",
      },
      {
        date: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
        totalSales: formatCurrency(_.random(1, 2000)),
        menuItemsSold: "Croissant: 15",
        customerFeedback: 4.4,
        inventoryStatus: "Syrups: 8 flavors",
      },
      {
        date: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
        totalSales: formatCurrency(_.random(1, 2000)),
        menuItemsSold: "Scones: 10",
        customerFeedback: 4.8,
        inventoryStatus: "Whipped Cream: 3 kg",
      },
    ];

    return _.shuffle(cafeSales);
  },
};

export default fakers;
