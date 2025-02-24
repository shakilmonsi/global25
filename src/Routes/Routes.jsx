import { createBrowserRouter } from "react-router-dom";
import Main from "../LeyOut/Main";
import About from "../components/Home/About";
import Blogs from "../Shared/Blogs/Blogs";
import Contact from "../LeyOut/Contact/Contact";
import Home from "../pages/Home/Home";
import Login from "../pages/Home/Login/Login";
import Sinup from "../pages/Home/Sinup/Sinup";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },

      {
        path: "/blog",
        element: <Blogs></Blogs>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/Signup",
        element: <Sinup></Sinup>,
      },
    ],
  },
]);
