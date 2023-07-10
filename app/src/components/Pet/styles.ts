import styled from "styled-components";

import { styles } from "styles/theme";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 1rem;
  form {
    margin-top: 1rem;
    width: 400px;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    div {
      justify-content: center;
      margin: 0;
    }
    input {
      width: 100%;
    }
    button {
      border: 1px solid #45648e;
      margin: 0.5rem;
      border-radius: 10px;
      padding: 0.3rem;
      background-color: #45648e;
      color: white;
    }
    .types {
      dislay: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      label {
        width: fit-content;
        margin-right: 1rem;
      }
      input {
        width: fit-content;
      }
    }
  }
`;
