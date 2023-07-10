import { Container } from "./styles";
import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useRouter } from "next/router";
import petService from "services/apiServices/pet.service";
import { useLog } from "services/hooks/useLog/useLog";
import pet_typeService from "services/apiServices/pet_type.service";
interface typeProps {
  id: number;
  name: string;
}

export default function PetRegister() {
  const router = useRouter();
  const [id, setId] = useState(0);
  const [pet, setPet] = useState({} as any);
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [color, setColor] = useState("");
  const [gender, setGender] = useState("");
  const [petType, setPetType] = useState(0);
  const { generateLog } = useLog();
  const [types, setTypes] = useState([] as typeProps[]);

  const getPet = (id: number) => {
    if (id > 0)
      petService
        .get(id)
        .then((res) => {
          const { data } = res;
          setPet(data);
          setName(data.name);
          setBreed(data.breed);
          setColor(data.color);
          setGender(data.gender);
          setPetType(data.pet_type_id);
        })
        .catch((err) => alert(err.response.data.message));
  };
  const getTypes = () => {
    pet_typeService
      .getAll("")
      .then((res) => {
        const { data } = res;
        setTypes(data);
      })
      .catch((err) => alert(err.response.data.message));
  };
  const createPet = async () => {
    const userId = sessionStorage.getItem("@login/id");
    const user_id = Number(userId);
    if (!user_id || Number.isNaN(user_id)) {
      alert("Você precisa estar logado");
    } else {
      petService
        .create({
          name,
          breed,
          color,
          gender,
          pet_type: petType,
          user_id,
        })
        .then(async (res) => {
          alert("Pet criado");
          generateLog("INSERT", `criou pet com id = ${res.data.id}`);
          router.push("/pet/listagem");
        })
        .catch((err: any) => {
          console.log("error on create pets: ", err);
          alert("Ocorreu um erro ao criar o pet");
        });
    }
  };
  const updatePet = () => {
    const userId = sessionStorage.getItem("@login/id");
    const user_id = Number(userId);
    if (!user_id || Number.isNaN(user_id)) {
      alert("Você precisa estar logado");
    } else {
      petService
        .update(id, { name, breed, color, gender, pet_type: petType })
        .then(async (res) => {
          alert("Pet atualizado");
          generateLog("UPDATE", `atualizou pet com id = ${id}`);
          router.push("/pet/listagem");
        })
        .catch((err: any) => {
          console.log("error on update pets: ", err);
          router.push("/pet/listagem");
        });
    }
  };
  const onSubmit = (event: any) => {
    event.preventDefault();

    console.log(id, name, breed, color, gender, petType);

    if (id > 0) updatePet();
    else createPet();
  };

  useEffect(() => {
    console.log("pet type: ", petType);
  }, [petType]);

  useEffect(() => {
    getTypes();
    let id = router.query.id;
    let parsedId = Number(id);
    if (!!parsedId && parsedId > 0) {
      setId(parsedId);
      getPet(parsedId);
    } else setId(0);
  }, [router.query.id]);

  return (
    <Container>
      <div>
        <h5>{id > 0 ? "Editar pet" : "Cadastro de pets"}</h5>
        <form onSubmit={onSubmit}>
          <Row>
            <Col md={3}>
              <label htmlFor="name">Nome</label>
            </Col>
            <Col md={9}>
              <input
                type="text"
                id="name"
                placeholder="Nome"
                onChange={({ target }) => setName(target.value)}
                defaultValue={pet.name}
              />
            </Col>
          </Row>
          <Row>
            <Col md={3}>
              <label htmlFor="breed">Raça</label>
            </Col>
            <Col md={9}>
              <input
                type="text"
                id="breed"
                placeholder="Raça"
                onChange={({ target }) => setBreed(target.value)}
                defaultValue={pet.breed}
              />
            </Col>
          </Row>
          <Row>
            <Col md={3}>
              <label htmlFor="color">Cor</label>
            </Col>
            <Col md={9}>
              {" "}
              <input
                type="text"
                id="color"
                placeholder="Cor"
                onChange={({ target }) => setColor(target.value)}
                defaultValue={pet.color}
              />
            </Col>
          </Row>
          <Row>
            <Col md={3}>
              <label htmlFor="Gender">Sexo</label>
            </Col>
            <Col md={9}>
              <input
                type="text"
                id="Gender"
                placeholder="Sexo"
                onChange={({ target }) => setGender(target.value)}
                defaultValue={pet.gender}
              />
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <label>Tipo: </label>
            </Col>
            {!!types &&
              types.length > 0 &&
              types.map((type) => (
                <Col md={4} className="types" key={`${type.id}`}>
                  <label htmlFor={type.id.toString()}>{type.name}</label>
                  <input
                    type="radio"
                    id={type.id.toString()}
                    name="pet_type"
                    value={type.name}
                    checked={type.id === petType}
                    onChange={() => setPetType(type.id)}
                  />
                </Col>
              ))}
          </Row>
          <button type="submit">Salvar</button>
        </form>
      </div>
    </Container>
  );
}
