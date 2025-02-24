import { createBrowserRouter } from "react-router-dom";
import Main from "../LeyOut/Main";
import About from "../components/Home/About";
import Blogs from "../Shared/Blogs/Blogs";
import Contact from "../LeyOut/Contact/Contact";
import Home from "../pages/Home/Home";

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
    ],
  },
]);
