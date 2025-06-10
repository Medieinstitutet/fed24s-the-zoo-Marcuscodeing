import { createBrowserRouter } from "react-router-dom";
import { Homepage } from "../pages/Homepage";
import { Animalpage } from "../pages/Animalpage";
import { Layout } from "../pages/Layout";
import { AnimalDetails } from "../pages/AnimalDetails";

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
