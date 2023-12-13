import { useRoutes } from "react-router-dom";
import Users from "../pages/Users";
import Departments from "../pages/Departments";
import AddUser from "../pages/AddUser";
import ProfileOverview from "../pages/ProfileOverview";
import Login from "../pages/Login";
import RegularTable from "../pages/RegularTable";
import Tabulator from "../pages/Tabulator";

import Layout from "../themes";
import RequireAuth from "./ProtectedRouter";

function Router() {
  const routes = [
    {
      path: "/",
      element: (
        <RequireAuth>
          <Layout />
        </RequireAuth>
      ),
      children: [
        {
          path: "users",
          element: <Users />,
        },
        {
          path: "departments",
          element: <Departments />,
        },
        {
          path: "add-user",
          element: <AddUser />,
        },
        {
          path: "profile-overview",
          element: <ProfileOverview />,
        },
        //components
        {
          path: "regular-table",
          element: <RegularTable />,
        },
        {
          path: "tabulator",
          element: <Tabulator />,
        },
      ],
    },
    {
      path: "login",
      element: (
        <RequireAuth>
          <Login />
        </RequireAuth>
      ),
    },
  ];

  return useRoutes(routes);
}

export default Router;
