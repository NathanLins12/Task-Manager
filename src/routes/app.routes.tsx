import { Route, Routes } from "react-router-dom";
import { Home } from "../Pages/Home";
import { Page404 } from "../Pages/Page404";
import { App } from "../Pages/App";
import { Tasks } from "../Pages/Tasks";
import { CreateTask } from "../Pages/CreateTask";
import { About } from "../Pages/About";

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/create-task" element={<CreateTask />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  );
}
