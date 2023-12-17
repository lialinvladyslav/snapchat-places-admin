import { useRoutes } from "react-router-dom";
import Users from "../pages/Users";
import Places from "../pages/Places";
import Reports from "../pages/Reports";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";

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
          path: "",
          element: <Dashboard />,
        },
        {
          path: "users",
          element: <Users />,
        },
        {
          path: "places",
          element: <Places />,
        },
        {
          path: "reports",
          element: <Reports />,
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
