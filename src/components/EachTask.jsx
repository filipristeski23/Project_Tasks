import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  border-radius: 0.375rem;
  max-width: 14.063rem;
  padding: 0.625rem 0.625rem 0.625rem 0rem;
  cursor: pointer;

  &:hover {
    background-color: #eaeaea;
  }
`;

const H4 = styled.h4`
  font-size: 1 rem;
  font-weight: 600;
  color: #787486;
  margin: 0;
`;

const Img = styled.img`
  padding-left: 0.75rem;
  width: 8px;
`;

function EachTask({ eachtask }) {
  return (
    <Div>
      <Img src="./elipse.svg" alt="ellipse"></Img>
      <H4>{eachtask.projectName}</H4>
    </Div>
  );
}

export default EachTask;
