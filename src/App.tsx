import { Route, Routes } from "react-router";
import "./index.css";

import { Dashboard } from "./pages/app/dashboard";
import { SignIn } from "./pages/auth/sign-in";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/sign-in" element={<SignIn />} />
    </Routes>
  );
}
