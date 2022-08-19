import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 25px;
  justify-content: center;

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

interface SelectedProps {
  selected?: boolean;
}
export const DivCheckBox = styled.div<SelectedProps>`
  align-items: center;
  justify-content: center;
  border: 2px solid ${({ selected }) => (selected ? "#000" : "#eee")};
  border-radius: 10px;
  background-color: ${({ selected }) => (selected ? "#CBD5E0" : "#fff")};
  display: flex;
  flex-direction: column;
  padding: 2%;
  min-height: 200px;
  max-width: 150px;
  > label {
    width: 84%;
  }
  > img {
    padding-top: 9%;
    height: 30%;
  }
`;

export const Principal = styled.div`
  width: 45%;
  padding-bottom: 50px;
  align-items: center;
`;
