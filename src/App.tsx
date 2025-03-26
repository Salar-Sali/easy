import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { styled } from "styled-components";
import { pagesRoutes } from "~/bootstrap/helper/endpoints";
import LoginPage from "~/pages/login-page/login-page";
import PrivateRoute from "~/pages/login-page/private-routes";
import { AngiBotPage } from "./pages/angibot/angi-bot-page";
import OffersPageContainer from "~/pages/offers-page/offers-page-container";
import "./index.css";
import "./App.css";

const MainContent = styled.div`
  padding-top: 82px;
`;

function App() {
  return (
    <Router>
      <MainContent>
        <Routes>
          <Route path={pagesRoutes.login} element={<LoginPage />} />

          <Route
            path={pagesRoutes.main}
            element={
              <PrivateRoute>
                <AngiBotPage />
              </PrivateRoute>
            }
          />
          <Route
            path={pagesRoutes.offers}
            element={
              <PrivateRoute>
                <OffersPageContainer />
              </PrivateRoute>
            }
          />

          <Route path="*" element={<Navigate to={pagesRoutes.main} />} />
        </Routes>
      </MainContent>
    </Router>
  );
}

export default App;
