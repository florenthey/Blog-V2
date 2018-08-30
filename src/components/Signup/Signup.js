import React from "react";
import "./Signup.css"


const Signup = (props) => {

    return(
        <div className="containerSign">
          <h1>Créé ton compte</h1>
          <form>
            <input className="inputFormSign" type="text" placeholder="Nom"/>
            <input className="inputFormSign" type="text" placeholder="Prénom"/>
            <input className="inputFormSign" type="text" placeholder="Email"/>
            <input className="inputFormSign" type="text" placeholder="Mot de passe"/>
            <input className="inputFormSign" type="text" placeholder="Confirme ton mot de passe"/>
            <button className="btnFormSign" type="submit">Envoyer</button>
          </form>
        </div>
    )
}

export default Signup;