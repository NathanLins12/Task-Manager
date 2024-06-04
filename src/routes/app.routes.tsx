import { Route, Routes } from "react-router-dom";
import { SignIn } from "../Pages/SignIn";
import { Home } from "../Pages/Home";
import { Page404 } from "../Pages/Page404";

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />}>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  );
}
