import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { styled } from "styled-components";
import { pagesRoutes } from "~/bootstrap/helper/endpoints";
import LoginPage from "~/pages/login-page/login-page";
import "./App.css";
import "./index.css";

const MainContent = styled.div`
  padding-top: 82px;
`;

function App() {
  return (
    <Router>
      <MainContent>
        <Routes>
          <Route path={pagesRoutes.register} element={<LoginPage />} />

          <Route path="*" element={<Navigate to={pagesRoutes.main} />} />
        </Routes>
      </MainContent>
    </Router>
  );
}

export default App;
