

const Items = ({ id, description, title, img, price, quantity }) => {
 

  return (
    <>
      <div className="items-info">
        
        <div className="title">
          <h2>PRODUCT  ITEMS </h2>
          
        </div>
  
          




        {/* <div className="price">
          <h3>₹ price</h3>
        </div> */}
        <div className="price">
          <h3>₹ Total price</h3>
        </div>
        <div className="add-minus-quantity">
          {/* <i className="fas fa-minus minus" onClick={() => decrement(id)}></i> */}
          {/* <input type="text" placeholder="quantity" disabled /> */}
          <div className="price">
          <h3>Product</h3>
        </div>
          {/* <i className="fas fa-plus add" onClick={() => increment(id)}></i> */}
          </div>
        <div className="price">
          <h3>Detete Items</h3>
        </div>
        
      </div>

      <hr />
    </>
  );
};

export default Items;
