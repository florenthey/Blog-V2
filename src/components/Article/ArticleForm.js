import React from "react"
import "../Signup/Signup.css"


const ArticleForm = () => {

    return(
        <div className="containerSign">
        <h1>Ajoute un article</h1>
        <form method="POST" action="http://localhost:7777/api/articles/add">
        <input name="title" className="inputFormSign" type="text" placeholder="Titre" />
        <textarea name="text" className="inputFormSign"  placeholder="Texte" />
        <button className='btnFormSign' type='submit'>Publier</button>
        </form>
        </div>
    )
}

export default ArticleForm