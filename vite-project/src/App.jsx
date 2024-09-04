import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from './components/AppLayout';
import Homepage from './components/Homepage';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error'; 

function App() {

  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        {
          path: '/',
          element: <Homepage />
        },
        {
          path: '/about',
          element: <About />,
        },
        {
          path: '/contact',
          element: <Contact />,
        },
        {},
      ]
    },
  ])

  return (
    <RouterProvider router={ router } />
  )
}

export default App
