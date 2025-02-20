import styled from "styled-components";


export const ColoredBox =styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== "bg",
  })`
    background-color: ${(props) => props.bg || "gray"};
    padding: 20px;
    margin:10px;
    border-radius:8px;
`;


