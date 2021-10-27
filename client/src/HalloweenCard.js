import React, {useState} from "react";

function HalloweenCard({name, image, person}) {
  const [isInStock, setIsInStock] = useState(true)

  function handleClick(){
    setIsInStock((isInStock) => (!isInStock))
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Creator: {person}</p>
      {isInStock ? (
        <button onClick={handleClick} className="primary">In Stock</button>
      ) : (
        <button onClick={handleClick}>Out of Stock</button>
      )}
    </li>
  );
}

export default HalloweenCard;