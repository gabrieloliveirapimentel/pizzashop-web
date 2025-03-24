import { Route, Routes } from "react-router";
import "./index.css";

import { Dashboard } from "./pages/app/dashboard";
import { SignIn } from "./pages/auth/sign-in";

import { AuthLayout } from "./pages/__layouts/auth";
import { AppLayout } from "./pages/__layouts/app";

export function App() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/sign-in" element={<SignIn />} />
      </Route>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}
