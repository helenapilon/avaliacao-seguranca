import LogsList from "components/Logs";
import PetsList from "components/Pets";
import Link from "next/link";
import { Container } from "styles/styles";

export default function Home() {
  return (
    <Container>
      <PetsList />
    </Container>
  );
}
