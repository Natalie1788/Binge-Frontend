
import { createBrowserRouter } from "react-router-dom";

import Errorpage from "../pages/Errorpage";
import Landing from "../pages/Landing";
import Profile from "../pages/Profile";
import SignIn from "../pages/SignIn";
import Signup from "../pages/SignUp";
import Swipe from "../pages/Swipe";
import Cookbook from "../pages/Cookbook";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing/>,
    errorElement: <Errorpage />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/signin",
    element: <SignIn />,
    errorElement: <Errorpage />,
  },
  {
    path: "/signup",
    element: <Signup />,
    errorElement: <Errorpage />,
  },
  {
    path: "/swipe",
    element: <Swipe />,
    errorElement: <Errorpage />,
  },
  {
    path: "/cookbook",
    element: <Cookbook />,
    errorElement: <Errorpage />,
  },
]);

export default router
