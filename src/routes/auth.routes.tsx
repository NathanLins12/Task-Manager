import { Navigate, Route, Routes } from "react-router-dom";
import { SignIn } from "../Pages/SignIn";
import { SignUp } from "../Pages/SignUp";

export function AuthRouter() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
  );
}
