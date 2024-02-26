import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./components/LandingPage";

const router = createBrowserRouter([
  { path: "/", element: <LandingPage/>, index: true },
])


export default function App() {
  return (
    <RouterProvider router={router}/>
  );
}