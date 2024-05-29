import { Link } from "react-router-dom";
import { Container } from "./style";
import logo from "../../assets/logo-rj.png";
import { FormSignUp } from "../../components/formSingUp";

export function SignUp() {
  return (
    <Container>
      <div className="signInPart2">
        <FormSignUp />
      </div>

      <div className="signInPart1">
        <div>
          <Link
            to={"https://emanuelquintino.github.io/Page-WDC"}
            target="_blank"
          >
            <img src={logo} alt="" />
          </Link>
        </div>
      </div>
    </Container>
  );
}
