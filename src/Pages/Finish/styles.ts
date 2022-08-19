import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  place-items: center;
  font-family: sans-serif;
  height: 100%;
  padding-bottom: 8%;
  padding-top: 4%;
  section {
    width: 40rem;
    display: flex;
    flex-direction: column;
    font-size: large;
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
