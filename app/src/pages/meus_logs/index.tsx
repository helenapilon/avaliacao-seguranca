import LogsList from "components/Logs";
import Link from "next/link";
import { Container } from "styles/styles";

export default function Home() {
  return (
    <Container>
      <LogsList />
    </Container>
  );
}
