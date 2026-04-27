import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Homepage from "../pages/home/Homepage";
import Stats from "../pages/stats/Stats";
import Timeline from "../pages/timeline/Timeline";
import UserDetails from "../pages/userDetails/UserDetails";
import ErrorPage from "../pages/errorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "timeline",
        element: <Timeline></Timeline>,
      },
      {
        path: "stats",
        element: <Stats></Stats>,
      },
      {
        path:"/userDetails/:id",
        Component: UserDetails,
       

      }
    ],
    errorElement:<ErrorPage></ErrorPage>
  },
]);
