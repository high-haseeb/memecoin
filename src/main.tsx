import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import Home from "./pages/Home";
import Gallery from "./pages/VideoGallery";

    const router = createBrowserRouter(
        [
            {path: "/", element: <Gallery />},
            {path: "/gallery", element: <Gallery/>},
        ]
    )

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
