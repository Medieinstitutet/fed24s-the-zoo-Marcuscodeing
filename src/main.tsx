import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Router } from "./components/Router.tsx";
import { RouterProvider } from "react-router-dom";
import { AnimalsProvider } from "./contexts/AnimalContext.tsx";

createRoot(document.getElementById("root")!).render(
  <AnimalsProvider>
    <StrictMode>
      <RouterProvider router={Router} />
    </StrictMode>
  </AnimalsProvider>
);
