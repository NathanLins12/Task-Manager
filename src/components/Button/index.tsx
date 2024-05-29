import loadingGif from "../../assets/loading.gif";
import { ButtonStyle, Container } from "./style";

type ButtonTypes = {
  title: string;
  loading?: boolean;
  variant?: ButtonStyle;
};

export function Button({
  title,
  loading = false,
  variant = "primary",
}: ButtonTypes) {
  return (
    <Container variant={variant}>
      {loading ? <img src={loadingGif} width={14} /> : title}
    </Container>
  );
}
