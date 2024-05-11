import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import SingleRelief from "../pages/home/reliefGoods/SingleRelief";
import Register from "../components/auth/Register";
import Login from "../components/auth/Login";
import AllReliefGoods from "../pages/allReliefsGoods/AllReliefGoods";
import Dashboard from "../pages/dashboard/dashboard/Dashboard";
import AdminLayout from "../components/layout/AdminLayout";
import Supplies from "../pages/dashboard/supplies/Supplies";
import CreateSupply from "../pages/dashboard/supplies/CreateSupply";
import LeaderBoard from "../pages/leaderBoard/LeaderBoard";
import CreateTestimonials from "../pages/dashboard/testimonials/CreateTestimonials";
import Volunteer from "../pages/volunteer/Volunteer";
import AboutUs from "../pages/about/AboutUs";
import Community from "../pages/community/Community";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/relief-goods",
        element: <AllReliefGoods />,
      },
      {
        path: "/relief-goods/:id",
        element: <SingleRelief />,
      },
      {
        path: "/leaderboard",
        element: <LeaderBoard />,
      },
      {
        path: "/volunteer",
        element: <Volunteer />,
      },
      {
        path: "/community",
        element: <Community />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <AdminLayout></AdminLayout>,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "create-supply",
        element: <CreateSupply />,
      },
      {
        path: "supplies",
        element: <Supplies />,
      },
      {
        path: "create-testimonial",
        element: <CreateTestimonials />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
