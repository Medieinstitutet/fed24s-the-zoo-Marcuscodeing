import { createBrowserRouter } from "react-router";
import { Layout } from "./Layout";
import { Homepage } from "../pages/Homepage";
import { Animalpage } from "../pages/AnimalsPage";
import { AnimalDetails } from "../pages/AnimalPageDetail";
import { NavLink } from "react-router-dom";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <h1>Page not found </h1>,
    children: [
      {
        path: "",
        element: <Homepage />,
      },
      {
        path: "/Animalpage",
        element: <Animalpage />,
      },
      {
        path: "/Animal/:id",
        element: <AnimalDetails />,
      },
    ],
  },
]);
