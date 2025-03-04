import Header from "~/generic/header/main-header";
import "./App.css";
import { AngiBotPage } from "./pages/angibot/angi-bot-page";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import AngibotsList from "~/pages/angibots-list/angibots-list";
import { styled } from "styled-components";
import { pagesRoutes } from "~/bootstrap/helper/endpoints";
import PrivateRoute from "~/pages/login-page/private-routes";
import LoginPage from "~/pages/login-page/login-page";
const MainContent = styled.div`
  padding-top: 80px;
`;
function App() {
  return (
    <Router>
      <Header />
      <MainContent>
        <Routes>
          {/* Public Route */}
          <Route path={pagesRoutes.login} element={<LoginPage />} />

          {/* Private Routes (only accessible if logged in) */}
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
                <AngibotsList />
              </PrivateRoute>
            }
          />

          {/* Default redirect to main if not matched */}
          <Route path="*" element={<Navigate to={pagesRoutes.main} />} />
        </Routes>
      </MainContent>
    </Router>
  );
}

export default App;
