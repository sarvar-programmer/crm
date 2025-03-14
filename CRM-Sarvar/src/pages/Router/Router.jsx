import { createBrowserRouter } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import Calendar from "../Calendar/Calendar";
import Dashboard from "../Dashboard/Dashboard";
import Employees from "../Employees/Employees";
import InfoPortal from "../InfoPortal/InfoPortal";
import Messenger from "../Messenger/Messenger";
import NotFound from "../NotFound/NotFound";
import Projects from "../Projects/Projects";
import Vacations from "../Vacations/Vacations";
import Login from "../../components/Layout/Login/Login"
import SignIn from "../../components/Layout/Sign In/SignIn";
export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signin",
    element: <SignIn/>,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "calendar",
        element: <Calendar />,
      },
      {
        path: "vacations",
        element: <Vacations />,
      },
      {
        path: "employees",
        element: <Employees />,
      },
      {
        path: "messenger",
        element: <Messenger />,
      },
      {
        path: "info",
        element: <InfoPortal />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
