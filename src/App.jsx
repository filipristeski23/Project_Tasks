import GlobalStyles from "./styles/GlobalStyles";
import MainSectionContainer from "./containers/MainSectionContainer";
import styled from "styled-components";
import SideMenuContainer from "./containers/SideMenuContainer";
import ContactForm from "./components/ContactForm";

const Div = styled.div`
  display: flex;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <Div>
        <SideMenuContainer />
        <MainSectionContainer />
      </Div>
    </>
  );
}

export default App;
