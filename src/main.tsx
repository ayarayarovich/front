import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'

import { ProSidebarProvider } from "react-pro-sidebar";

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import {RouterErrorPage} from "./pages/error";
import {Dashboard} from "./pages/dashboard";
import {QueryClient, QueryClientProvider} from "react-query";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <RouterErrorPage/>,
        children: [
            {
                path: "dashboard",
                element: <Dashboard />,
            },
            {
                path: "pampam",
                element: <div>Pampam</div>
            }
        ],
    }
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <QueryClientProvider client={queryClient}>
          <ProSidebarProvider>
              <RouterProvider router={router}/>
          </ProSidebarProvider>
      </QueryClientProvider>
  </React.StrictMode>,
)
