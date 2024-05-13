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
        path: "/student-signup",
        element: <StudentSignUp />,
      },
      {
        path: "/employer-signup",
        element: <EmployerSignUp />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/programs",
        loader: async () => {
          return await axios.get(
            `${
              import.meta.env.VITE_PUBLIC_URL
            }/program/programs-with-instructors`
          );
        },
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
        element: <PaymentFailed/>,
      },
      {
        path: "/payment-success/:tranId",
        element: <PaymentSuccess/>,
      },
    ],
  },
]);

export default routes;
