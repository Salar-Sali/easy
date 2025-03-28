import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { pagesRoutes } from "~/bootstrap/helper/endpoints";
import "./App.css";
import "./index.css";
import RegisterPage from "~/pages/register/register-page";
import LoginPage from "~/pages/login/login-page";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={pagesRoutes.login} element={<LoginPage />} />
        <Route path={pagesRoutes.register} element={<RegisterPage />} />

        <Route path="*" element={<Navigate to={pagesRoutes.main} />} />
      </Routes>
    </Router>
  );
}

export default App;
