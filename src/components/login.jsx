import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

function Login({ onLogin,redirectPath }){
    
    const[username,setUsername]=useState("");
    const[password,setpassword]=useState("");
    const navigate = useNavigate();
    const handleSubmit=(event)=>{
        event.preventDefault();
        if(username=="admin" && password=="admin"){
            Swal.fire({
            title: "Bravo",
            icon: "success",
            draggable: true
});
navigate("/service");
onLogin(); // Appel de la fonction de connexion
navigate(redirectPath || "/services");
        }
        else{
            Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "try again please!",
            footer: '<a href="#">Why do I have this issue?</a>'
});
        }
    }
   const[remember,setremember] = useState(false);

    return(
        <>
        <form onSubmit={handleSubmit}>
            {/* <label htmlFor="username">Username:</label>
            <input type="text" value={username} onChange={(event)=>{setUsername(event.target.value)}}/>
             <label htmlFor="password">password:</label>
            <input type="text" value={password} onChange={(event)=>{setpassword(event.target.value)}}/> */}
  <div class="form-group mb-2">
    <label for="username" class="sr-only">Username:</label>
    <input type="text" readonly class="form-control-plaintext" value={username}  placeholder="username" onChange={(event)=>{setUsername(event.target.value)}}/>
  </div>
  <div class="form-group mx-sm-3 mb-2">
    <label for="password" class="sr-only">Password:</label>
    <input type="password" class="form-control" value={password} placeholder="Password" onChange={(event)=>{setpassword(event.target.value)}}/>
  <button type="submit" class="btn btn-primary mb-2">Valider</button>
  <input type="checkbox" checked={remember} onChange={()=>{setremember(!remember)}}/>
  </div>
  <label htmlFor="remember">remember me</label>
    
</form>
        </>
    );
}
export default Login;