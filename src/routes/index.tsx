import { BrowserRouter } from "react-router-dom";
import { AuthRouter } from "./auth.routes";
import { AppRouter } from "./app.routes";
import { useAuth } from "../hooks/useAuth";

const { authUserID } = useAuth(); 
const isAuth = !!authUserID;

const routes = isAuth ? <AppRouter /> : <AuthRouter />;

export function AppRoutes() {
  return <BrowserRouter>{routes}</BrowserRouter>;
}
