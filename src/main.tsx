import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./i18n/config";
import "./index.css";
import App from "./App.tsx";

function detectLanguage(): "en" | "es" {
  const stored = localStorage.getItem("vocals_language");
  if (stored === "en" || stored === "es") return stored;

  const browserLang = navigator.language.toLowerCase();
  if (browserLang.startsWith("es")) return "es";

  return "en";
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to={`/${detectLanguage()}`} replace />,
  },
  {
    path: "/en",
    element: <App lang="en" />,
  },
  {
    path: "/es",
    element: <App lang="es" />,
  },
  {
    path: "*",
    element: <Navigate to={`/${detectLanguage()}`} replace />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </StrictMode>
);
