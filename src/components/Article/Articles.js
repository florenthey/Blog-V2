import React, { Component } from "react";
import axios from 'axios'
import Article from './Article'
import "../Signup/Signup.css"

class Articles extends Component {
    
    state = {
        json : []
    }


    componentDidMount() {

        axios.get('http://localhost:7777/api/articles/')
            .then((response) => {
                console.log(response);
                this.setState({ json: response.data }, () => console.log(this.state.json))
            })
            .catch((error) => {
                console.log(error);
            });
    }


    render() {

        return (
            <div className="containerSign">
              <h1>Les nouvelles du club</h1>
                <ul className="list"> 
                  { this.state.json.map( e =>
                    <Article key={ e._id }
                             title={ e.title}
                             text={ e.text }
                    />)}
                </ul>    
             </div>          
                )}
}     

export default Articles; 