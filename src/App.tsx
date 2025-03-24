import "./index.css";

import { Helmet, HelmetProvider } from "react-helmet-async";
import { Router } from "./routes";

export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | pizza.shop" />
      <Router />
    </HelmetProvider>
  );
}
