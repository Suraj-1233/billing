import React, { useContext } from "react";
import { CartContext } from "./Cart";
import  "./css.css"
const Items = ({ id, description, title, img, price, quantity }) => {
  const { removeItem, increment, decrement } = useContext(CartContext);

  return (
    <>
      <div className="items-info">
        
        <div className="title">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        
        {/* <div className="price">
          <h3>₹ {price}</h3>
        </div> */}
        <div className="price">
          <h3>₹ {price*quantity}</h3>
        </div>
        <div className="add-minus-quantity">
         
        <button type="button"  className="fas fa-plus add button" onClick={() => increment(id)}></button>
          {/* <input type="text" placeholder={quantity} disabled /> */}
          <button type="button"  className="fas fa-minus add button" onClick={() => decrement(id)}></button>
           {/* <i className="fas fa-plus add" onClick={() => increment(id)}></i>  */}
        </div>


        <div className="remove-item">
          <i
            className="fas fa-trash-alt remove"
            onClick={() => removeItem(id)}></i>
        </div>
      </div>

      <hr />
    </>
  );
};

export default Items;
