import LogsList from "components/Logs";
import UserList from "components/Users";
import Link from "next/link";
import { Container } from "styles/styles";

export default function Home() {
  return (
    <Container>
      <UserList />
    </Container>
  );
}
