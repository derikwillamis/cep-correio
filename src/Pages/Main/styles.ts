import styled from "styled-components";

export const Container = styled.div`
  max-width: 100vw;
  height: 100%;
  display: grid;
  place-items: center;
  font-family: sans-serif;
  padding-bottom: 100px;
  section {
    width: 30rem;
  }

  h1 {
    font-size: 2.5rem;
    color: rgba(0, 0, 0, 0.75);
  }

  p {
    font-size: 1.2rem;
    color: rgba(0, 0, 0, 0.5);
  }

  strong {
    color: rgba(0, 0, 0, 0.75);
  }
`;
