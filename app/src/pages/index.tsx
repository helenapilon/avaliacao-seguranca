import Link from "next/link";
import { Container } from "styles/styles";

export default function Home() {
  return (
    <Container>
      <h2>Avaliação</h2>
      <h3>Segurança em Aplicações</h3>
      <ul>
        <li>
          <Link href="/login">Login</Link>
        </li>
        <li>
          <Link href="/usuarios">Listagem de usuários</Link>
        </li>
        <li>
          <Link href="/pet/cadastro">Cadastro de Pets</Link>
        </li>
        <li>
          <Link href="/pet/listagem">Listagem de Pets</Link>
        </li>
      </ul>
    </Container>
  );
}
