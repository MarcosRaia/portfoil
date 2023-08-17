import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home/home';
import About from './pages/about/about';
import Resume from './pages/resume/resume';
import Contact from './pages/contact/contact';


// Rotas
const router = createBrowserRouter([
  {
    path:"/",
    element: <Home />,
  },

  {
    path: "about",
    element: <About />
  },
  {
    path: "resume",
    element: <Resume/>
  },
  {
    path:"contact",
    element: <Contact />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

