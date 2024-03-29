import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import PrivacyPolicy from './components/PrivacyPolicy';
import { useEffect } from "react";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";


function Login() {
  const {login} = useKindeAuth();

  useEffect(() => {
    login();
  }, [login]);

  return <div>Login</div>;
}

function Register() {
  const {register} = useKindeAuth();

  useEffect(() => {
    register();
  }, [register]);
  return <div>Register</div>;
}

function Logout() {
  const {logout} = useKindeAuth();

  useEffect(() => {
    logout();
  }, [logout]);

  return <div>Logout</div>;
}


const router = createBrowserRouter([
  { path: "/", element: <LandingPage/>, index: true },
  { path: "/privacy-policy", element: <PrivacyPolicy />},
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/logout", element: <Logout /> },
])


export default function App() {
  return (
    <RouterProvider router={router} />
  );
}