import styled from "styled-components";

import { styles } from "styles/theme";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;

  #filter {
    width: 600px;
    margin-right: 0.5rem;
  }

  table {
    margin-top: 1rem;
  }

  th,
  td {
    text-align: center;
  }

  .actions {
    width: 200px;
    justify-content: center;

    button {
      margin: 0 1rem;
      border: none;
      background: transparent;
    }
  }
`;
