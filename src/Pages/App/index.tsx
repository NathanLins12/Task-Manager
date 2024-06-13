import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { Container } from "./style";
import { Footer } from "../../components/Footer";
import { SideBar } from "../../components/SideBar";

export function App() {
  return (
    <Container>
      <Header />

      <article>
        <section className="sideBar">
          <SideBar />
        </section>

        <Outlet/>
      </article>

      <Footer/>
    </Container>
  );
}
