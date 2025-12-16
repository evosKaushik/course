import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import Home from "./components/Home.jsx";
// import About from "./components/About.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Contact from "./components/Contact.jsx";

const About = lazy(() => import("./components/About.jsx"));
const Home = lazy(() => import("./components/Home.jsx"));
const Contact = lazy(() => import("./components/Contact.jsx"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
