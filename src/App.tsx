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

function App() {
  return (
    <Router>
      <Routes>
        <Route path={pagesRoutes.main} element={<RegisterPage />} />

        <Route path="*" element={<Navigate to={pagesRoutes.main} />} />
      </Routes>
    </Router>
  );
}

export default App;
