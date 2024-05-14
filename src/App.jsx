import GlobalStyles from "./styles/GlobalStyles";
import MainSectionContainer from "./containers/MainSectionContainer";
import styled from "styled-components";

function App() {
  return (
    <>
      <GlobalStyles />
      <div>
        <MainSectionContainer />
      </div>
    </>
  );
}

export default App;
