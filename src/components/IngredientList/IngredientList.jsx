// src/components/IngredientList/IngredientList.jsx

import { useState } from "react";

const IngredientList = (props) => {

  const handleAdd = (ingredient) => {
    props.addIngredients(ingredient)
  }  

  const [ingredientList, setIngredientList] = useState(props.Ingredients);



  
    return (
    <>
    <h2>Ingredients</h2>
    <ul>
      {ingredientList.map((ingredient, index) => {
        return (
        <li 
        key={index}
        style={{backgroundColor: ingredient.color}}>
          {ingredient.name}
          <button onClick={()=>handleAdd(ingredient)}>+</button>
        </li>
        )
      })}
        </ul>
      </>
     
    );
  };
  
  export default IngredientList;
  