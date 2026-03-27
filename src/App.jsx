
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Hero from "./pages/Hero";
import Layout from "./pages/Layout";
import Contact from "./pages/Contact";
import Apropos from "./pages/Apropos";
import Projets from "./pages/Projets";
import Home from "./pages/Home";

function App() {

  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/Projets', element: <Projets /> },
        { path: '/Apropos', element: <Apropos /> },
        { path: '/Contact', element: <Contact /> },
      ],
    },
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App