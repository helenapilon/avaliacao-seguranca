import { Container } from "./styles";
import { useEffect, useState, useCallback } from "react";

import Link from "next/link";
import petServices from "services/apiServices/pet.service";
import { useRouter } from "next/router";
import { Table } from "react-bootstrap";
import { FiEdit, FiSearch, FiTrash } from "react-icons/fi";
import { useLog } from "services/hooks/useLog/useLog";

interface petsProps {
  id: number;
  owner: string;
  type: string;
  name: string;
  gender: string;
  color: string;
  breed: string;
  type_id: number;
}

export default function PetsList() {
  const router = useRouter();
  const { generateLog } = useLog();

  const [pets, setPets] = useState([] as petsProps[]);
  const [filter, setFilter] = useState("");

  const getPets = async () => {
    petServices
      .getAll("")
      .then((res) => {
        const { data } = res;
        setPets(data);
      })
      .catch((err) => alert(err.response.data.message));
  };

  const deletePet = (id: number) => {
    const userId = sessionStorage.getItem("@login/id");
    if (!userId) {
      alert("Você não possui permissão para remover pets");
    } else {
      petServices
        .remove(id)
        .then(async () => {
          generateLog("DELETE", `removeu pet com id = ${id}`);
          getPets();
        })
        .catch((err) => alert(err.response.data.message));
    }
  };

  const filterPets = async () => {
    console.log(filter);
    petServices
      .getAll(filter)
      .then((res) => {
        const { data } = res;
        setPets(data);
      })
      .catch((err) => alert(err.response.data.message));
  };

  useEffect(() => {
    getPets();
  }, []);

  return (
    <Container>
      <div>
        <h5>Listagem de pets</h5>
        <input
          type="text"
          id="filter"
          placeholder="Filtrar pelo nome"
          onChange={({ target }) => setFilter(target.value)}
        />
        <button type="button" onClick={filterPets}>
          <FiSearch />
        </button>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Dono</th>
              <th>Tipo</th>
              <th>Id do Tipo</th>
              <th>Nome</th>
              <th>Raça</th>
              <th>Cor</th>
              <th>Sexo</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {!!pets &&
              pets.map((pet) => (
                <tr key={pet.id}>
                  <td>{pet.owner}</td>
                  <td>{pet.type}</td>
                  <td>{pet.type_id}</td>
                  <td>{pet.name}</td>
                  <td>{pet.breed}</td>
                  <td>{pet.color}</td>
                  <td>{pet.gender}</td>
                  <td className="actions">
                    <Link href={`/pet/${pet.id}`}>
                      <FiEdit />
                    </Link>
                    <button type="button" onClick={() => deletePet(pet.id)}>
                      <FiTrash />
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
    </Container>
  );
}
