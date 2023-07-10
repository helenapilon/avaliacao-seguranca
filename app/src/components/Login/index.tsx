import { Container } from "./styles";
import { useEffect, useState, useCallback } from "react";

import Image from "next/image";
import Link from "next/link";
import userServices from "services/apiServices/user.service";
import { useRouter } from "next/router";
import itemService from "services/apiServices/pet.service";
import { useAuth } from "services/hooks/useAuth/useAuth";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useAuth();

  const onSubmit = (event: any) => {
    event.preventDefault();

    signIn({ email, password });
  };

  return (
    <Container>
      <div>
        <h5>Login</h5>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="Email"
            onChange={({ target }) => setEmail(target.value)}
          />
          <input
            type="password"
            placeholder="Senha"
            onChange={({ target }) => setPassword(target.value)}
          />

          <button type="submit">Entrar</button>
        </form>
      </div>
    </Container>
  );
}
