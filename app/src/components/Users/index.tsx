import { Container } from "./styles";
import { useEffect, useState, useCallback } from "react";

import Image from "next/image";
import Link from "next/link";
import userServices from "services/apiServices/user.service";
import { useRouter } from "next/router";
import { Table } from "react-bootstrap";
import { FiEdit, FiSearch, FiTrash } from "react-icons/fi";
import { useLog } from "services/hooks/useLog/useLog";

interface userProps {
  id: number;
  name: string;
  email: string;
  password: string;
}

export default function UserList() {
  const router = useRouter();
  const { generateLog } = useLog();

  const [users, setUsers] = useState([] as userProps[]);
  const [filter, setFilter] = useState("");

  const getUsers = async () => {
    userServices
      .getAll("")
      .then((res) => {
        const { data } = res;
        setUsers(data);
      })
      .catch((err) => alert(err.response.data.message));
  };

  const filterUsers = async () => {
    console.log(filter);
    userServices
      .getAll(filter)
      .then((res) => {
        const { data } = res;
        setUsers(data);
      })
      .catch((err) => alert(err.response.data.message));
  };

  const deleteUser = (id: number) => {
    const userId = sessionStorage.getItem("@login/id");
    if (!userId) {
      alert("Você não possui permissão para remover usuarios");
    } else {
      userServices
        .remove(id)
        .then(async () => {
          generateLog("DELETE", `removeu user com id = ${id}`);
          getUsers();
        })
        .catch((err) => alert(err.response.data.message));
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Container>
      <div>
        <h5>Listagem de usuários</h5>
        <input
          id="filter"
          type="text"
          placeholder="Filtrar pelo nome"
          onChange={({ target }) => setFilter(target.value)}
        />
        <button type="button" onClick={filterUsers}>
          <FiSearch />
        </button>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Email</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {!!users &&
              users.map((user) => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td className="actions">
                    <Link href={`/usuario/${user.id}`}>
                      <FiEdit />
                    </Link>
                    <button type="button" onClick={() => deleteUser(user.id)}>
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
