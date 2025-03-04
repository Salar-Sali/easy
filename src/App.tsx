import Header from "~/generic/header/main-header";
import "./App.css";
import { AngiBotPage } from "./pages/angibot/angi-bot-page";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AngibotsList from "~/pages/angibots-list/angibots-list";
import { styled } from "styled-components";
import { pagesRoutes } from "~/bootstrap/helper/endpoints";
const MainContent = styled.div`
  padding-top: 80px;
`;
function App() {
  return (
    <Router>
      <Header />
      <MainContent>
        <Routes>
          <Route path={`${pagesRoutes.main}`} element={<AngiBotPage />} />
          <Route path={`${pagesRoutes.offers}`} element={<AngibotsList />} />
        </Routes>
      </MainContent>
    </Router>
  );
}

export default App;
