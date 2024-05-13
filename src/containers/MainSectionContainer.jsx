import ContactForm from "../components/ContactForm";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  padding-left: 3.031rem;
`;

function MainSectionContainer() {
  return (
    <Div>
      <ContactForm />
    </Div>
  );
}

export default MainSectionContainer;
