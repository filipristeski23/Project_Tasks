import styled from "styled-components";
import MainContentSection from "../components/MainContentSection";
import ContactForm from "../components/ContactForm";

const Div = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

function MainSectionContainer() {
  return (
    <Div>
      <MainContentSection />
    </Div>
  );
}

export default MainSectionContainer;
