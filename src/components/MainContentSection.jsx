import styled from "styled-components";
import MiniTask from "./MiniTask";
import { useOutletContext } from "react-router-dom";

const Div = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 3.031rem;
  padding-right: 3.031rem;
  overflow: hidden;
  position: relative;
`;

const Div2 = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 2.625rem;
  overflow-y: auto;
  gap: 20px;
`;

const Div3 = styled.div`
  background-color: #f5f5f5;
  padding: 1.25rem 1.25rem 0rem 1.25rem;
  border-radius: 1rem 1rem 0rem 0rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Div4 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const H2 = styled.h2`
  font-size: 2.875rem;
  color: #0d062d;
  font-weight: 600;
  margin: 0;
  margin-top: 3.938rem;
`;

const H3 = styled.h3`
  font-size: 1.25rem;
  color: #0d062d;
  font-weight: 700;
`;

const Img = styled.img`
  width: 1.563rem;
`;

const DivLine = styled.div`
  background-color: #5030e5;
  width: 100%;
  height: 2px;
  margin-top: 1.25rem;
  margin-bottom: 2.5rem;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

const DivTask = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow: hidden;
  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
`;

function MainContentSection() {
  const outletContext = useOutletContext();
  const selectedProject = outletContext?.selectedProject;
  return !selectedProject ? (
    <>
      <Div>
        <H2>selectedProject.name</H2>
        <Div2>
          {selectedProject.tasks.map((task, index) => (
            <Div3 key={index}>
              <Div4>
                <H3>{task.title}</H3>
                <a href="www.google.com">
                  <Img src="./add-square.svg" alt="add to do" />
                </a>
              </Div4>
              <DivLine></DivLine>
              <DivTask>
                {task.subtasks.map((subtask, subIndex) => (
                  <MiniTask key={subIndex} />
                ))}
              </DivTask>
            </Div3>
          ))}
        </Div2>
      </Div>
    </>
  ) : (
    <div>Enter your first project</div>
  );
}
export default MainContentSection;
