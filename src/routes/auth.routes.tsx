import { createBrowserRouter } from "react-router-dom";
import { SignIn } from "../Pages/SignIn";
import { SignUp } from "../Pages/SignUp";

export const authRouter = createBrowserRouter([
  { path: "/", element: <SignIn /> },
  { path: "/signup", element: <SignUp /> },
]);
