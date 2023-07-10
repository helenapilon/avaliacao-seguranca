import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    @media (max-width: 1080px){
        html {
            font-size: 93.75%;
        }
    }

    @media (max-width: 720px){
        html {
            font-size: 87.5%;
        }
    }

    @media (max-width: 480px){
        html {
            font-size: 75%;
        }
    }
`;
