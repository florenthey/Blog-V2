import React from "react";
import "../Signup/Signup.css"

const Login = () => {

    return(
        <div className="containerSign">
          <h1>Connecte toi</h1>
          <form>
            <input className="inputFormSign" type="text" placeholder="Email"/>
            <input className="inputFormSign" type="text" placeholder="Mot de passe"/>
            <button className="btnFormSign" type="submit">Envoyer</button>
          </form>
        </div>
    )
}

export default Login;