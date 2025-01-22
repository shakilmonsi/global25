import {
  createBrowserRouter,
  
} from "react-router-dom";
import Main from "../LeyOut/Main";
import Home from "../components/Home/Home";
import About from "../components/Home/About";


export const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/about",
            element: <About></About>
        }
    ]
  },
]);