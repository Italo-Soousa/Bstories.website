import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css";

// Páginas
import Login from './routes/index.jsx';
import PontoDeVendas from "./routes/Home/pontoDeVendas.jsx";
import IndexPDV from "./routes/PontoDeVendas/indexPDV.jsx";
import IndexVendas from "./routes/PontoDeVendas/Vendas/IndexVendas.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "Ponto-De-Vendas",
    element: <PontoDeVendas />
  },
  {
    path: "Processos-PDV",
    element: <IndexPDV />
  },
  {
    path: "/Vendas",
    element: <IndexVendas />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
