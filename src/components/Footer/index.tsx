import { Link } from "react-router-dom";
import { Container } from "./style";

export function Footer() {
  return (
    <Container>
      <Link to={""}>
        <strong>&copy; {new Date().getFullYear()} Reprpgrama Jucás</strong>
      </Link>
    </Container>
  );
}
