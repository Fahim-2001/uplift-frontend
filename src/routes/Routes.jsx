import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import StudentSignUp from "../pages/StudentSignUp";
import EmployerSignUp from "../pages/EmployerSignUp";
import Programs from "../pages/Programs";
import Program from "../pages/Program";
import axios from "axios";
import ConfirmPayment from "../pages/ConfirmPayment";
import PaymentFailed from "../pages/PaymentFailed";
import PaymentSuccess from "../pages/PaymentSuccess";
import AuthLayout from "../layouts/AuthLayout";
import LoggedInUsersRestriction from "../contexts/LoggedInUsersRestriction";
import PrivateRoute from "../contexts/PrivateRoute";
import DashboardLayout from "../layouts/DashboardLayout";
import Analytics from "../pages/Dashboard/Analytics";
import Users from "../pages/Dashboard/Users";
import Instructors from "../pages/Dashboard/Instructors";
import Employers from "../pages/Dashboard/Employers";
import Students from "../pages/Dashboard/Students";
import ProgramsInDash from "../pages/Dashboard/ProgramsInDash";
import JobsInDash from "../pages/Dashboard/Jobs";
import ProfileSettings from "../pages/Dashboard/ProfileSettings";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/programs",
        element: <Programs />,
      },
      {
        path: "/programs/:prgId",
        loader: async ({ params }) => {
          return await axios.get(
            `${
              import.meta.env.VITE_PUBLIC_URL
            }/program/programs-with-instructors/${params?.prgId}`
          );
        },
        element: <Program />,
      },
      {
        path: "/payment-confirm",
        element: <ConfirmPayment />,
      },
      {
        path: "/payment-failed/:tranId",
        element: <PaymentFailed />,
      },
      {
        path: "/payment-success/:tranId",
        element: <PaymentSuccess />,
      },
    ],
  },
  {
    path: "/auth",
    element: (
      <LoggedInUsersRestriction>
        <AuthLayout />
      </LoggedInUsersRestriction>
    ),
    children: [
      {
        path: "student-signup",
        element: <StudentSignUp />,
      },
      {
        path: "employer-signup",
        element: <EmployerSignUp />,
      },
      {
        path: "signin",
        element: <SignIn />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "",
        element: <Analytics />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "instructors",
        element: <Instructors />,
      },
      {
        path: "employers",
        element: <Employers />,
      },
      {
        path: "students",
        element: <Students />,
      },
      {
        path: "programs",
        element: <ProgramsInDash />,
      },
      {
        path: "jobs",
        element: <JobsInDash />,
      },
      {
        path: "profile-settings",
        element: <ProfileSettings />,
      }
    ],
  },
]);

export default routes;
