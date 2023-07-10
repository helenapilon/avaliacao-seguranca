import { Container } from "./styles";

import Link from "next/link";
import { FiHome } from "react-icons/fi";
import { useAuth } from "services/hooks/useAuth/useAuth";

export default function Header() {
  const { user, signOut } = useAuth();

  return (
    <Container>
      <div className="home">
        <Link href="/">
          <FiHome />
          <span> Início </span>
        </Link>
      </div>
      <div>
        {!!user && user.email ? (
          <div className="userData">
            <span>
              {"Bem vindo(a), "} {user.name}
            </span>
            <button onClick={signOut}>Sair</button>
          </div>
        ) : (
          <Link href="login">
            <span>Login</span>
          </Link>
        )}
      </div>
    </Container>
  );
}
