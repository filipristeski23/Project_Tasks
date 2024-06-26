import styled from "styled-components";
import TaskData from "../TaskData.json";
import EachTask from "./EachTask";
import { Link } from "react-router-dom";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
`;

const H4 = styled.h4`
  font-size: 0.875rem;
  color: #787486;
  font-weight: 700;
`;

const Div2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 12.688rem;
  padding-left: 1.375rem;
  padding-right: 0.75rem;
`;

const Div3 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  overflow: auto;
  max-width: 14.063rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  margin-top: 1.25rem;
  max-height: calc(100vh - 30.25rem);

  &::-webkit-scrollbar {
    height: 0;
    width: 0;
  }
`;

const Img = styled.img`
  width: 1.563rem;
`;

function TaskList({ projects, onProjectClick }) {
  return (
    <Div>
      <Div2>
        <H4>MY PROJECTS</H4>
        <Link to="createtask">
          <Img src="./public/add-square.svg" alt="Add square"></Img>
        </Link>
      </Div2>
      <Div3>
        {projects.map((eachtask) => (
          <EachTask
            eachtask={eachtask}
            key={eachtask.projectId}
            onClick={() => onProjectClick(eachtask.projectId)}
            projects={projects}
          />
        ))}
      </Div3>
    </Div>
  );
}

export default TaskList;
