import LandingPage from "./pages/LandingPage/LandingPage";
import { Routes, Route } from "react-router-dom";
import { ForgotPassword } from "./pages/auth/ForgotPassword";
import Register from "./pages/auth/Register";
import { Login } from "./pages/auth/Login";
import TutorSignup from "./pages/auth/TurtorSignup";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/password-recovery" element={<ForgotPassword />} />
      <Route path="/signup" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/tutor-signup" element={<TutorSignup />} />
    </Routes>
  );
}
