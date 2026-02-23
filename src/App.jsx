import { useState } from "react";
import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom';
import NavBar from "./composants/NavBar";
import Login from './composants/login';
import Home from './composants/Home';
import Contact from './composants/contact';
import Menu from './composants/menu';
import Reservation from './composants/reservation';
import Services from './composants/services.jsx';
import Panier from './composants/panier';
import ProtectedRoute from './composants/ProtectedRouter';
import Swal from 'sweetalert2';

function Layout({ isAuthenticated, handleLogout }) {
  return (
    <>
      <NavBar isAuthenticated={isAuthenticated} onLogout={handleLogout} />
      <main style={{ minHeight: "100vh" }}>
        <Outlet />
      </main>
    </>
  );
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [cart, setCart] = useState([]); 

  const handleLogin = () => setIsAuthenticated(true);
  const handleLogout = () => setIsAuthenticated(false);

  const addToCart = (plat) => {
    if (isAuthenticated) {
      setCart((prev) => [...prev, plat]);
      Swal.fire({
        icon: 'success',
        title: 'Plat ajouté au panier!',
        text: plat.nom,
      });
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'Veuillez vous connecter',
        text: 'Vous devez être connecté pour ajouter au panier'
      }).then(() => {
        window.location.href = '/login'; 
      });
    }
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout isAuthenticated={isAuthenticated} handleLogout={handleLogout} />,
      children: [
        { index: true, element: <Home /> },
        { path: "menu", element: <Menu addToCart={addToCart} /> }, 
        { path: "reservation", element: <Reservation /> },
        { path: "contact", element: <Contact /> },
        { path: "login", element: <Login onLogin={handleLogin} /> },
        { path: "panier", element: <Panier cart={cart} setCart={setCart} /> }, 
        {
          path: "services",
          element: (
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              element={<Services />}
            />
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
