import React, { Component } from "react";
import "../Signup/Signup.css"
import axios from "axios"

class Login extends Component {

  state = {
    email: "",
    password: ""
  }

  postLogin = e => {
    e.preventDefault()
    const login = {
        email:this.state.email,
        password:this.state.password
    }

    axios.post("http://localhost:7777/api/users/login", login)
        .then((response) => {
            console.log(response);
            localStorage.setItem("token", response.data.token)
            this.props.history.push("/login")
        })
        .catch((error) => {
            console.log(error);
        });
}

  getValue = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
  }

  render(){

    return(
        <div className="containerSign">
          <h1>Connecte toi</h1>
          <form>
            <input onChange={this.getValue} className="inputFormSign" type="email" placeholder="Email"/>
            <input onChange={this.getValue} className="inputFormSign" type="password" placeholder="Mot de passe"/>
            <button className="btnFormSign" type="submit">Envoyer</button>
          </form>
        </div>
    )
  }
}

export default Login;