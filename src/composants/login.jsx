import { useState } from "react";
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";

function Login({ onLogin, redirectPath = "/services" }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "admin") {
      Swal.fire({
        icon: "success",
        title: "Connexion réussie !",
        text: "Bienvenue dans votre espace",
        timer: 1500
      });
      onLogin();
      navigate(redirectPath);
    } else {
      Swal.fire({
        icon: "error",
        title: "Erreur de connexion",
        text: "Identifiants incorrects ! (user / password)",
      });
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h3>Connexion</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Login</label>
                  <input
                    type="text"
                    className="form-control"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="username"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Mot de passe</label>
                  <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="password"
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Se connecter
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;