import { useState } from "react";

export default function Product(props) {
  const {product} = props;
  const [count, setCount] = useState(0);

  function handleDecrementClick() {
    setCount(count => count - 1);
  }

  function handleIncrementClick() {
    setCount(count => count + 1);
  }
  
  return <>
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
    </div>
    <div>
      <button onClick={handleDecrementClick} disabled={count === 0}>-</button>
      <p>{count > 0 && count}</p>
      <button onClick={handleIncrementClick}>+</button>
    </div>
  </>
}