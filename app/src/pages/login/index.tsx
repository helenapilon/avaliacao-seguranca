import ItemRegister from "components/Item";
import Login from "components/Login";
import Link from "next/link";
import { Container } from "styles/styles";

export default function Home() {
  return (
    <Container>
      <Login />
    </Container>
  );
}
