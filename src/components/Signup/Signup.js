import React, { Component } from "react";
import "./Signup.css"


const Signup = () => {

    return(
        <div className="containerSign">
          <h1>Créé ton compte</h1>
          <form method="POST" action="http://localhost:7777/api/users/signup">
            <input name="firstName" className="inputFormSign" type="text" placeholder="Nom"/>
            <input name="lastName" className="inputFormSign" type="text" placeholder="Prénom"/>
            <input name="email" className="inputFormSign" type="text" placeholder="Email"/>
            <input name="password" className="inputFormSign" type="password" placeholder="Mot de passe"/>
            <input name="password2" className="inputFormSign" type="password" placeholder="Confirme ton mot de passe"/>
            <button className="btnFormSign" type="submit">Envoyer</button>
          </form>
        </div>
    )
}

export default Signup