import LogsList from "components/Logs";
import PetRegister from "components/Pet";
import Link from "next/link";
import { Container } from "styles/styles";

export default function Home() {
  return (
    <Container>
      <PetRegister />
    </Container>
  );
}
