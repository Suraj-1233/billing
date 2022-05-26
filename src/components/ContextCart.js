import React, { useContext } from "react";

import { Scrollbars } from "react-custom-scrollbars-2";
import Items from "./Items";
import Items1 from "./Items1";
import Items2 from "./Items2";
import { CartContext } from "./Cart";

const ContextCart = () => {
  const { item,  totalItem, totalAmount } = useContext(CartContext);

  if (item.length === 0) {
    return (
      <>
        <header>
          <div className="continue-shopping">
         
            <h3>SURAJ KANNUJIYA</h3>
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
          
          <h3> SURAJ KANNUJIYA </h3>
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
              <Items2 price={totalAmount}>
             </Items2>
            </Scrollbars>
           
       
          </div>
          
        
         
        </div>
       
        <div className="card-total">
          
          <button> ADD NEW ITEMS</button>
          
          
          

        </div>
          
        
       
       
       
        
      </section>
    </>
  );
};

export default ContextCart;
