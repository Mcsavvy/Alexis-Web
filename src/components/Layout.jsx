import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { clearCookie } from "../utils";

//
// eslint-disable-next-line no-unused-vars
const defaultActions = [
  {
    title: "Home",
    href: "/",
    active: true,
  },
  {
    title: "Documentation",
    href: "https://docs.alexis.futurdevs.tech",
    newTab: true,
  },
  {
    title: "Support",
    href: "#",
  },
  {
    title: "Contact",
    href: "mailto:futurdevsalexis@gmail.com",
    newTab: true,
  },
];

/**
 * @typedef {{
 *  title: string;
 *  href?: string;
 *  active?: boolean;
 *  onClick?: () => void;
 *  newTab?: boolean;
 * }} Action
 */

/**
 *
 * @param {{
 *  actions: Action[];
 * }} param0
 * @returns
 */
function Header({ actions }) {
  const {login, logout, register, isAuthenticated} = useKindeAuth();
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <a href="#" className="flex items-center py-4 px-2">
                <img src="/logo.png" alt="Alexis Logo" className="h-7 mr-1" />
                <span className="font-bold text-sky-950 text-lg">
                  Alexis
                </span>
              </a>
            </div>
            {/* Primary Navbar items */}
            <div className="hidden md:flex items-center space-x-1">
              {actions.map((action, index) => (
                <Link
                  key={index}
                  className={
                    "py-4 px-2" +
                    (action.active
                      ? " text-light-primary border-b-4 border-light-primary font-semibold"
                      : " text-gray-500 font-semibold hover:text-light-primary transition duration-300")
                  }
                  to={action.href}
                  target={action.newTab ? "_blank" : "_self"}
                  onClick={action.onClick}
                >
                  {action.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-3 ">
            <button
              hidden={isAuthenticated}
              onClick={register}
              className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-light-primary hover:text-white transition duration-300"
            >
              Register
            </button>
            <button
              hidden={isAuthenticated}
              onClick={login}
              className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-light-primary hover:text-white transition duration-300"
            >
              Login
            </button>
            <button
              hidden={!isAuthenticated}
              onClick={() => {
                logout();
                clearCookie("access_token");
              }}
              className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-light-primary hover:text-white transition duration-300"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

/**
 *
 * @param {{
 *  showJoinButton: boolean;
 * }} param0
 * @returns
 */
function Footer({ showJoinButton }) {
  return (
    <footer className="bg-gray-200 py-5 mt-auto">
      <div className="container mx-auto text-center">
        <ul className="flex justify-center space-x-4">
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              About Us
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Terms of Service
            </a>
          </li>
          <li>
            <Link
              to="/privacy-policy"
              className="text-gray-600 hover:text-gray-900"
            >
              Privacy Policy
            </Link>
          </li>
        </ul>
        {showJoinButton && (
          <Link
            to="/login"
            className="mt-5 inline-block border-2 border-light-primary text-light-primary hover:text-white hover:bg-light-primary font-bold py-2 px-4 rounded"
          >
            Join Alexis Today
          </Link>
        )}
      </div>
      <div className="flex justify-center space-x-4 py-2">
        <a href="https://www.github.com/mcsavvy" className="text-black">
          <FaGithub />
        </a>
        <a href="https://www.twitter.com/davemcsavvy" className="text-black">
          <FaXTwitter />
        </a>
        <a
          href="https://www.linkedin.com/in/david-john-148a211a5/"
          className="text-blue-800"
        >
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
}

export default function Layout({ children, actions, joinButton }) {
  const navActions = actions || defaultActions;
  if (joinButton === undefined) {
    joinButton = true;
  }
  return (
    <div className="font-sans flex flex-col min-h-screen">
      <Header actions={navActions} />
      {children}
      <Footer showJoinButton={joinButton} />
    </div>
  );
}
