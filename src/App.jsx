import GlobalStyles from "./styles/GlobalStyles";
import MainSectionContainer from "./containers/MainSectionContainer";
import styled from "styled-components";
import SideMenuContainer from "./containers/SideMenuContainer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ContactForm from "./components/ContactForm";
import MainContentSection from "./components/MainContentSection";
import NewTask from "./components/NewTask";
import { useState } from "react";

const Div = styled.div`
  display: flex;
`;

function App() {
  const [arrayData, setArrayData] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  console.log("Initial selectedProject state:", selectedProject);

  const handleAddProject = (newProject) => {
    const updatedProject = {
      ...newProject,
      tasks: newProject.tasks.map((task) => ({
        ...task,
        status: "todo",
      })),
    };
    setArrayData((prevData) => [...prevData, updatedProject]);
  };

  const handleProjectClick = (projectId) => {
    const project = arrayData.find((proj) => proj.projectId === projectId);
    console.log("Selected Project:", project);
    setSelectedProject(project);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Div>
          <GlobalStyles />
          <SideMenuContainer
            projects={arrayData}
            onProjectClick={handleProjectClick}
          />
          <MainSectionContainer selectedProject={selectedProject} />
        </Div>
      ),
      children: [
        {
          index: true,
          element: <MainContentSection selectedProject={selectedProject} />,
        },
        {
          path: "contact",
          element: <ContactForm />,
        },

        {
          path: "createtask",
          element: <NewTask onAddProject={handleAddProject} />,
        },
      ],
    },
  ]);

  console.log(arrayData);

  return <RouterProvider router={router} />;
}

export default App;
