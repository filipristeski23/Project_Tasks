import GlobalStyles from "./styles/GlobalStyles";
import MainSectionContainer from "./containers/MainSectionContainer";
import styled from "styled-components";
import SideMenuContainer from "./containers/SideMenuContainer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ContactForm from "./components/ContactForm";
import MainContentSection from "./components/MainContentSection";
import NewTask from "./components/NewTask";

const Div = styled.div`
  display: flex;
`;

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Div>
        <GlobalStyles />
        <SideMenuContainer />
        <MainSectionContainer />
      </Div>
    ),
    children: [
      {
        index: true,
        element: <MainContentSection />,
      },

      {
        path: "contact",
        element: <ContactForm />,
      },

      {
        path: "createtask",
        element: <NewTask />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
