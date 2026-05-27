import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./components/Auth/PrivateRoute";
import Layout from "./components/Layout/Layout";
import Login from "./pages/Login";
import Home from "./pages/Home";
import ArchivePage from "./pages/Archive";
import PersonnelPage from "./pages/Personnel";
import MTFPage from "./pages/MTF";
import FacilitiesPage from "./pages/Facilities";
import ProfilePage from "./pages/Profile";
import ControlPage from "./pages/Control";
import AISystemPage from "./pages/AISystem";

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Layout />
              </PrivateRoute>
            }
          >
            <Route index element={<Home />} />
            <Route path="archive" element={<ArchivePage />} />
            <Route path="personnel" element={<PersonnelPage />} />
            <Route path="mtf" element={<MTFPage />} />
            <Route path="facilities" element={<FacilitiesPage />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="control" element={<ControlPage />} />
            <Route path="ai" element={<AISystemPage />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}
