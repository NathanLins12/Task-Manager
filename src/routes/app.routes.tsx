import { Route, Routes } from "react-router-dom";
import { Home } from "../Pages/Home";
import { Page404 } from "../Pages/Page404";
import { App } from "../Pages/App";

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  );
}
