import React from "react";

export default function Panier({ cart, setCart }) {


  const handelremove = (productId) => {
    setCart(cart.filter((item) => item.id !== productId))
  };

  const calculateTotal = () =>
    cart.reduce((total, product) => total + product.price, 0)

  return (
    <div>
      <h3>Panier</h3>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.imageUrl}/>
            <h5>{item.Name}</h5>
            <p>Price: {item.price}</p>
            <button
              className="btn btn-danger"
              onClick={() => handelremove(item.id)}
            >
              Remove
            </button>
          </div>
        ))
      )}
      <h4>Total: {calculateTotal()}</h4>
    </div>
  );
}
