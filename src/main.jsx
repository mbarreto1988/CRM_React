import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./components/Layout";
import ErrorPage from "./components/ErrorPage";
import EditarCliente, {loader as editarClienteLoader, action as editarClienteAction} from "./pages/EditarCliente";
import Inicio, { loader as clientesLoader } from "./pages/Inicio";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NuevoCliente, {action as nuevoClienteAction} from "./pages/NuevoCliente";


const route = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Inicio />,
        loader: clientesLoader,
        errorElement: <ErrorPage />
      },
      {
        path: "/clientes/nuevo",
        element: <NuevoCliente />,
        action: nuevoClienteAction,
        errorElement:<ErrorPage />
      },
      {
        path:'/clientes/:clienteId/editar',
        element: <EditarCliente />,
        loader: editarClienteLoader,
        action: editarClienteAction,
        errorElement: <ErrorPage />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>
);
