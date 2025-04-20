import { useState } from "react";

const BurgerStack = ({stack, removeIngredient }) => {
   
  
  return (
    <>
    <h2>Burger Stack</h2>
    <ul>
      {stack.map((ingredient, index) => (
        <li
          key={index}
          style={{ backgroundColor: ingredient.color }}>
          {ingredient.name}
          <button onClick={()=>removeIngredient(index)}>X</button>
        </li>
      ))}
    </ul>
    </>
    )

  };
  
  export default BurgerStack;
  