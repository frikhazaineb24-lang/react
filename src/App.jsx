import { useState } from "react";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";

import NavBar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import Menu from "./components/menu";
import Reservation from "./components/reservation";
import Services from "./components/service";
import Login from "./components/login";
import Panier from "./components/panier";

import ProtectedRoute from "./protectedRoute";
import Swal from "sweetalert2";

function Layout({ isAuthenticated, handleLogout }) {
  return (
    <>
      <NavBar isAuthenticated={isAuthenticated} onLogout={handleLogout} />
      <main style={{ minHeight: "100vh", marginTop: "1rem" }}>
        <Outlet />
      </main>
    </>
  );
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [cart, setCart] = useState([]);
  const [redirectPath, setRedirectPath] = useState("/services");

  const handleLogin = () => setIsAuthenticated(true);
  const handleLogout = () => setIsAuthenticated(false);

  const addToCart = (plat) => {
    if (isAuthenticated) {
      setCart((prev) => [...prev, plat]);
      Swal.fire({
        icon: "success",
        title: "Plat ajouté au panier!",
        text: plat.nom,
      });
    } else {
      Swal.fire({
        icon: "warning",
        title: "Veuillez vous connecter",
        text: "Vous devez être connecté pour ajouter au panier",
      }).then(() => {
        window.location.href = "/login";
      });
    }
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout
          isAuthenticated={isAuthenticated}
          handleLogout={handleLogout}
        />
      ),
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "menu", element: <Menu addToCart={addToCart} /> },
        { path: "reservation", element: <Reservation /> },
        { path: "contact", element: <Contact /> },
        {
          path: "login",
          element: (
            <Login
              onLogin={handleLogin}
              redirectPath={redirectPath}
            />
          ),
        },
        {
          path: "panier",
          element: <Panier cart={cart} setCart={setCart} />,
        },
        {
          path: "services",
          element: (
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              element={<Services />}
              path={setRedirectPath}
            />
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;