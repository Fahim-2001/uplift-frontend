import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import StudentSignUp from "../pages/StudentSignUp";
import EmployerSignUp from "../pages/EmployerSignUp";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
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
        element: <EmployerSignUp/>
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
    ],
  },
]);

export default routes;
