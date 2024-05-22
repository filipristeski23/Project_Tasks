import styled from "styled-components";
import MainContentSection from "../components/MainContentSection";
import ContactForm from "../components/ContactForm";
import { Outlet, useOutletContext } from "react-router-dom";
import { useMemo } from "react";

const Div = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

function MainSectionContainer({ selectedProject }) {
  const hasProject = useMemo(
    () =>
      selectedProject !== null &&
      selectedProject !== undefined &&
      JSON.stringify(selectedProject) !== "{}",
    [selectedProject]
  );
  return (
    <Div>
      {hasProject ? (
        <MainContentSection />
      ) : (
        <Outlet context={{ selectedProject }} />
      )}
    </Div>
  );
}

export default MainSectionContainer;
