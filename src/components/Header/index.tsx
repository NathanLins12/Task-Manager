import { Link } from "react-router-dom";
import { Container } from "./style";
import logo from "../../assets/logo-rj.png";
import { useState } from "react";
import { SideBar } from "../SideBar";

export function Header() {
  const [showSideBar, setShowSideBar] = useState(false);

  function toggleSideBar() {
    setShowSideBar((prevState) => (prevState == true ? false : true));
  }
  return (
    <Container>
      <i className="menuIcon material-icons" onClick={toggleSideBar}>
        menu
      </i>

      <div className="appLogo">
        <h1>Task Manager</h1>
        <Link to="">
          <img src={logo} alt="" />
        </Link>
      </div>

      {showSideBar && <SideBar toggleSideBar={toggleSideBar} />}
    </Container>
  );
}
