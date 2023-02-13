import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/loginPage/LoginPage";
import SignupPage from "./pages/signupPage/SignupPage";
import Home from "./pages/home/Home";
import AlertNotification from "./shared/components/AlertNotification";
import Dashboard from "./pages/dashboard/Dashboard";
import Call from "./pages/call/Call";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/signup" element={<SignupPage />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/call" element={<Call />} />
        </Routes>
      </BrowserRouter>
      <AlertNotification />
    </>
  );
}

export default App;
