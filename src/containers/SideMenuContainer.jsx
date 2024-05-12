import TaskList from "../components/TaskList";
import Logo from "../components/Logo";
import Contact from "../components/Contact";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`;

const DivParent = styled.div`
  border-right: 0.063rem solid #dbdbdb;
  max-width: 15.656rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

function SideMenuContainer() {
  return (
    <DivParent>
      <Logo />
      <Div>
        <TaskList />
        <Contact />
      </Div>
    </DivParent>
  );
}

export default SideMenuContainer;
