import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { icons } from "../base-components/Lucide";

export interface Menu {
  icon: keyof typeof icons;
  title: string;
  badge?: number;
  pathname?: string;
  subMenu?: Menu[];
  ignore?: boolean;
}

export interface SideMenuState {
  menu: Array<Menu | string>;
}

const initialState: SideMenuState = {
  menu: [
    "USER MANAGEMENT",
    {
      icon: "UserSquare",
      pathname: "/users",
      title: "Users",
    },
    {
      icon: "CakeSlice",
      pathname: "/departments",
      title: "Departments",
    },
    {
      icon: "PackagePlus",
      pathname: "/add-user",
      title: "Add User",
    },
    "PERSONAL DASHBOARD",
    {
      icon: "Presentation",
      pathname: "/profile-overview",
      title: "Profile Overview",
    },
    {
      icon: "CalendarRange",
      pathname: "/profile-overview?page=events",
      title: "Events",
    },
    "COMPONENTS",
    {
      icon: "LayoutPanelLeft",
      title: "Table",
      subMenu: [
        {
          icon: "FlipVertical",
          pathname: "/regular-table",
          title: "Regular Table",
        },
        {
          icon: "FlipHorizontal",
          pathname: "/tabulator",
          title: "Tabulator",
        },
      ],
    },

  ],
};

export const sideMenuSlice = createSlice({
  name: "sideMenu",
  initialState,
  reducers: {},
});

export const selectSideMenu = (state: RootState) => state.sideMenu.menu;

export default sideMenuSlice.reducer;
