import { useAuth } from "../../hooks/useAuth";
import { Container } from "./style";

export function App() {
  const { signOut } = useAuth()
  return (
    <Container>
      <h1>App</h1>
      <button onClick={signOut}>Sair</button>
    </Container>
  );
}
