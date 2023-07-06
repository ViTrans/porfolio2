import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import Layout from "./components/layout/Layout.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import AddProducts from "./pages/AddProducts.jsx";
import Contact from "./pages/Contact.jsx";
import SignIn from "./pages/SignIn.jsx";
import { AuthProvider } from "./contexts/authContext.jsx";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
  {
    element: <AdminDashboard />,
    children: [
      {
        path: "admin/add-product",
        element: <AddProducts></AddProducts>,
      },
      {
        path: "admin/contact",
        element: <Contact></Contact>,
      },
    ],
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
