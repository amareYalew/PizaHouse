import React from 'react';
// import style from '../../App.css'
import style from '../PizaComponent/Recipe.css';


 const Recipes=({title,image,calories,ingredients})=> {
    return (
        <div>
            <h1 style={recipe }>{title}</h1>
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text} </li>
                ))}
            </ol>
            <p>{calories}</p>
            <img src={image} alt=""></img>
        </div>
    )
}
export default Recipes;
const recipe = {
    borderRadius: "10px",
    boxShadow: "0px 5px 20px rgb(71,71,71)",
    margin:"20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    background: "white",
    alignItems: "center",
    minWidth: "40%"
}
