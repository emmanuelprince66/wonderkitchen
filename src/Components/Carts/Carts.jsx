import React, { useEffect, useState } from "react";
import "./cart.css";

const Carts = ({ cart, setCart }) => {
  const [cartTotal, setCartTotal] = useState(0);
  const Increment = (items, amount) => {
    setCart((cart) =>
      cart.map((item) =>
        item.name === items.name
          ? {
              ...item,
              quantity: item.quantity + amount,
            }
          : item
      )
    );
  };
  const Decrement = (items, amount) => {
    setCart((cart) =>
      cart.map((item) =>
        item.name === items.name
          ? {
              ...item,
              quantity: item.quantity <= 1 ? 1 : item.quantity - amount,
            }
          : item
      )
    );
  };

  const handleRemove = (items) => {
    setCart(cart.filter((product) => product !== items));
  };

  useEffect(() => {
    const Total = cart.reduce(
      (total, cart) => total + cart.price * cart.quantity,
      0
    );
    setCartTotal(Total);
  }, [cart]);

  const EmptyCart = () => (
    <div className="container">
      <div className="row">
        <div className="empty">
          <h3>The Cart is Empty Add Product In Store</h3>
        </div>
      </div>
    </div>
  );
  const func = (price, quantity) => {
    let add = price * quantity;
    return Number(add);
  };
  return (
    <React.Fragment>
      {cart.length < 1 ? (
        EmptyCart()
      ) : (
        <div className="container">
          <div className="row">
            <div className="cartsInfo">
              <h1>Cart Items</h1>
              <h3>Products</h3>
            </div>
            {cart.map((items) => {
              return (
                <div className="col-md-4 px-5" key={items.id}>
                  <div
                    className="card mb-3 mobileScreen"
                    style={{ width: "18rem" }}
                  >
                    <div className="card-head">
                      <div className="cardImg">
                        <img
                          src={items.image}
                          className="card-img-top h-25"
                          alt="..."
                        />
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="nameprice">
                        <h5>{items.name}</h5>
                        <button onClick={() => Decrement(items, 1)}>-</button>
                        {items.quantity}
                        <button onClick={() => Increment(items, 1)}>+</button>
                        <h5>${func(items.price, items.quantity)}</h5>
                        <button onClick={() => handleRemove(items)}>
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="totalCart">
            <h4>Total price ${cartTotal}</h4>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Carts;
