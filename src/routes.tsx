import { Route, Routes } from "react-router";

import { AuthLayout } from "./pages/__layouts/auth";
import { AppLayout } from "./pages/__layouts/app";

import { Dashboard } from "./pages/app/dashboard";

import { SignIn } from "./pages/auth/sign-in";
import { SignUp } from "./pages/auth/sign-up";

export function Router() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Route>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}
