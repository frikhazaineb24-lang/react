import { useState } from "react";
import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom'
import NavBar from "./components/navbar";
import Home from './components/home'
import About from './components/about'
import Contact from './components/contact'
import Services from './components/service'
import Login from './components/login';
import ProtectedRoute from './protectedRoute';
function Layout({handleLogout,isAuthenticated}) {
return (
<>
<NavBar isAuthenticated={isAuthenticated} onLogout={handleLogout} />
<main style={{ minHeight: "100vh", marginTop: "1rem" }}>
<Outlet />
</main>
</>
)
}
function App() {
const[isAuthenticated,setIsAuthenticated]=useState(false)

const[redirectPath,setRedirectPath]=useState("/services")
const handleLogin =() =>{
setIsAuthenticated(true);
}
const handleLogout = () => {
setIsAuthenticated(false);
}
const router = createBrowserRouter([
{
path: '/',
element: <Layout handleLogout={handleLogout}
isAuthenticated={isAuthenticated} />, // parent avec NavBar
children: [
{ index: true, element: <Home /> },
{ path: 'login', element: <Login onLogin={handleLogin}
redirectPath={redirectPath} /> },
{ path: 'about', element: <About /> },
{ path: 'contact', element: <Contact /> },
{ path: 'services', element: <ProtectedRoute
isAuthenticated={isAuthenticated} element={<Services /> }
path={setRedirectPath} /> },
]
}
])
return (
<>
<RouterProvider router={router} />
</>
);
}
export default App