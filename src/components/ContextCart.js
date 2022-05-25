import React, { useContext } from "react";

import { Scrollbars } from "react-custom-scrollbars-2";
import Items from "./Items";
import Items1 from "./Items1";
import { CartContext } from "./Cart";

const ContextCart = () => {
  const { item, clearCart, totalItem, totalAmount } = useContext(CartContext);

  if (item.length === 0) {
    return (
      <>
        <header>
          <div className="continue-shopping">
            { <img src="./images/arrow.png" alt="arrow" className="arrow-icon" /> }
            <h3>bontinue shopping</h3>
          </div>

          <div className="cart-icon">
            <img src="./images/cart.png" alt="cart" />
            ++<p>{totalItem}</p>
          </div>
        </header>

        <section className="main-cart-section">
          <h1>shopping Cart</h1>
          <p className="total-items">
            you have <span className="total-items-count">{totalItem} </span>{" "}
            items in shopping cart
          </p>
        </section>
      </>
    );
  }

  return (
    <>
      <header>
        <div className="continue-shopping">
          
          <h3>your bil</h3>
        </div>

        <div className="cart-icon">
          <img src="./images/cart.png" alt="cart" />
          <p>{totalItem}</p>
        </div>
      </header>


      <section className="main-cart-section">
        <h1>BILL</h1>
        <p className="total-items">
          you have <span className="total-items-count">{totalItem} </span> items
          in shopping cart
        </p>

         <Items1>
         </Items1>
        <div className="cart-items">
        
          <div className="cart-items-container">
             


            <Scrollbars>
              {item.map((curItem) => {
                return <Items key={curItem.id} {...curItem} />;
              })}
            </Scrollbars>
          </div>
        </div>
       
          
          
        
       
       
        <div className="card-total">
          <h3>
            Cart Total : <span>{totalAmount}₹</span>
          </h3>
          <button> ADD NEW ITEMS</button>
          
          
          <button className="clear-cart">
                  PAY
            </button>
          <button className="clear-cart" onClick={clearCart}>
            Clear Cart
          </button>

        </div>
      </section>
    </>
  );
};

export default ContextCart;
