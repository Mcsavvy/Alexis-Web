import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import PrivacyPolicy from './components/PrivacyPolicy';

const router = createBrowserRouter([
  { path: "/", element: <LandingPage/>, index: true },
  { path: "/privacy-policy", element: <PrivacyPolicy />}
])


export default function App() {
  return (
    <RouterProvider router={router} />
  );
}