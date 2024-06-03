import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from '../components/ProtectedRoute';

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
    element: <ProtectedRoute><Profile /></ProtectedRoute>,
    errorElement: <Errorpage />,
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
    element: <ProtectedRoute><Swipe /></ProtectedRoute>,
    errorElement: <Errorpage />,
  },
  {
    path: "/cookbook",
    element: <ProtectedRoute><Cookbook /></ProtectedRoute>,
    errorElement: <Errorpage />,
  },
]);

export default router
