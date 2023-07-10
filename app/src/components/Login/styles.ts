import styled from "styled-components";

import { styles } from "styles/theme";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 1rem;
  form {
    width: 400px;

    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    div {
      justify-content: center;
      margin: 0;
    }
  }
`;
