// src/components/IngredientList/IngredientList.jsx

import { useState } from "react";

const IngredientList = (props) => {

  const handleAdd = (ingredient) => {
    props.addIngredients(ingredient)
  }  

  const [ingredientList, setIngredientList] = useState(props.Ingredients);



  
    return (
    <>
    <ul>
      {ingredientList.map((ingredient) => {
        return (
        <li style={{backgroundColor: ingredient.color}}>
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
  