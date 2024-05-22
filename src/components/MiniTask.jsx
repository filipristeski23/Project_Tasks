import styled from "styled-components";

const Div = styled.div`
  border-radius: 1rem;
  background-color: white;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const H4 = styled.div`
  margin: 0;
  font-size: 0.75rem;
  color: black;
  background-color: rgba(223, 168, 116, 0.2);
  width: max-content;
  padding: 0.5rem 0.75rem;
  border-radius: 0.25rem;
  font-weight: 600;
`;

const H3 = styled.h3`
  color: #0d062d;
  font-size: 1.125rem;
  font-weight: 700;
  margin-bottom: 0;
  margin-top: 1.75rem;
`;

const H5 = styled.h4`
  color: #787486;
  font-weight: 400;
  font-size: 1rem;
  margin: 0;
  margin-top: 0.5rem;
  max-height: 2.5rem;
  overflow: hidden;
`;

function MiniTask() {
  return (
    <Div>
      <H3>Mini Task Name</H3>
      <H5>
        The mini description goes here The mini description goes here The mini
        description goes here The mini description goes here..
      </H5>
    </Div>
  );
}

export default MiniTask;
