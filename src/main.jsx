import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// 1. IMPORTAÇÕES DAS PÁGINAS
// Repare como o caminho do Login ficou limpo (não precisa de /index.jsx no final)
import PaginaDeLogin from './Pages/Login'; 

// caminhos temporários enquanto não refatoramos as outras páginas:
import RecuperarSenha from './Pages/Registro'; 
import PaginaDeCadastro from './Pages/Cadastro'; 
import PaginaPrincipal from './Pages/Principal'; 

// 2. CONFIGURAÇÃO DAS ROTAS (MANTEMOS A SUA LÓGICA ORIGINAL)
const router = createBrowserRouter([
  {
    path: "/",
    element: <PaginaDeLogin />,
  },
  {
    path: "/recuperar-senha",
    element: <RecuperarSenha />,
  },
  {
    path: "/cadastro",
    element: <PaginaDeCadastro />,
  },
  {
    path: "/plataforma",
    element: <PaginaPrincipal />,
  }
]);

// 3. RENDERIZAÇÃO DA APLICAÇÃO
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);