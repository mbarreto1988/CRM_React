import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/layout'
import NuevoCliente from './pages/NuevoCliente'
import Index from './pages/Index'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children:[
      {
        index: true,
        element: <Index />
      },
      {
        path: '/clientes/nuevo',
        element: <NuevoCliente/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />  
  </React.StrictMode>,
)
