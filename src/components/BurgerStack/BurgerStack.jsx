

const BurgerStack = (props) => {
    return (
    <ul>
      {props.stack.map((stacks, index) => {
        return 
        <button key={index}>{stacks}</button>
      })}
    </ul>
    )

  };
  
  export default BurgerStack;
  