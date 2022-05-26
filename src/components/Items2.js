

const Items = ({ id, description, title, img, price, quantity }) => {
 

    return (
      <>
        <div className="items-info">
          
          <div className="title">
            <h2>TOTAL  ITEMS  </h2>
            
          </div>
    
            
  
  
  
  
          {/* <div className="price">
            <h3>₹ price</h3>
          </div> */}
          <div className="price">
            <h3> Total price ₹ : {price}</h3>
          </div>
          <div className="add-minus-quantity">
            {/* <i className="fas fa-minus minus" onClick={() => decrement(id)}></i> */}
            {/* <input type="text" placeholder="quantity" disabled /> */}
            <div className="price">
            {/* <h3>Quantity</h3> */}
          </div>
            {/* <i className="fas fa-plus add" onClick={() => increment(id)}></i> */}
            </div>
          <div className="price">
          <div className="card-total">
          
          <button> PAY </button>
          
          
          

        </div>
          </div>
          
        </div>
  
        <hr />
      </>
    );
  };
  
  export default Items;
  