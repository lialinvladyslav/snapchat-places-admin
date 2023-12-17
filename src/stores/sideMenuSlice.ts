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
    "BUSINESS MANAGEMENT",
    {
      icon: "Image",
      pathname: "/places",
      title: "Places",
    },
    "REPORTS MANAGEMENT",
    {
      icon: "AlertCircle",
      pathname: "/reports",
      title: "Reports",
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
