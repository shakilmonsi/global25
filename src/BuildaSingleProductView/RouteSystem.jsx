import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../MainLayOut";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

import DashboardLayout from "../DashboardLayout";
import Performance from "../layouts/DashBoard/UserDashBoard/Performance";
import Projects from "../layouts/DashBoard/UserDashBoard/Projects";
import TodayTask from "../layouts/DashBoard/UserDashBoard/TodayTask";
import UserListPage from "../layouts/DashBoard/UserDashBoard/userListpage/UserListPage";
import UserDetails from "../layouts/DashBoard/userDetails/UserDetails";
import BestContributors from "../pages/bestContributor/BestContributors";
import ChartView from "../layouts/DashBoard/UserDashBoard/chart/ChartView";
import RegisterForm from "../pages/Auth/RegisterForm";
import LoginForm from "../pages/Auth/LoginForm";

// const Home = lazy(() => import("../pages/Home/Home"));

const Home = lazy(() => import("../pages/Home/Home"));

const Contact = lazy(() => import("../pages/Contact/Contact"));

const AppRoutes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <LoginForm />,
      },
      {
        path: "/register",
        element: <RegisterForm />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },

      {
        path: "*",
        element: <NotFoundPage />,
      },

      {
        path: "/bestContributor",
        element: <BestContributors />,
      },
    ],
  },

  // DashBoard Route
  {
    path: "dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        path: "/dashboard",
        element: <ChartView />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "todaytask",
        element: <TodayTask />,
      },
      {
        path: "performance",
        element: <Performance />,
      },

      {
        path: "userlist",
        element: <UserListPage />,
      },
      {
        path: "userdetails/:id", // <-- :id is dynamic
        element: <UserDetails />,
      },
    ],
  },
]);

export { AppRoutes };
