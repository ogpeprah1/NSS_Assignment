import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ForgotPassword from "./screens/forgotPass";
import Dashboard from "./screens/dashboard";
import LoginPage from "./screens/login";
import Campaigns from "./screens/Campaigns";

function App() {
  // const user = useSelector(selectUser);

  return (
    <div className="bg-gray-100 App h-screen flex justify-center">
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<LoginPage />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/campaigns" element={<Campaigns />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
