import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Router } from "./components/Router";
import "./index.css";
import { AnimalProvider } from "./context/animalContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AnimalProvider>
      <RouterProvider router={Router} />
    </AnimalProvider>
  </StrictMode>
);
