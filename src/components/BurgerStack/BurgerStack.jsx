import { useState } from "react";

const BurgerStack = (props) => {
  const handleRemove = (ingredient) => {
    props.removeIngredient(ingredient)
  };
    
  const [burgerStack, setBurgerStack] = useState(props.Ingredients);
  
  
  return (
    <ul>
      {props.stack.map((stacks, index) => {
        return 
        <>
        <li style={{backgroundColor: stacks.color}}>
        {stacks.name}
        </li>
        <button>-</button>
        </>
      })}
    </ul>
    )

  };
  
  export default BurgerStack;
  