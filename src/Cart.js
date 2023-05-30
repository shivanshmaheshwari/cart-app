import React from "react";
import CartItem from "./CartItem";

const Cart = (props) => {
    const { products } = props;
    return (
      <div className="cart">
        {/* using for loop each element is iterated to show in browser */}
        {products.map((product) => {
          return (
            <CartItem
              product={product}
              key={product.id}
              onIncreaseQuantity={props.onIncreaseQuantity}
              onDecreaseQuantity={props.onDecreaseQuantity}
              onDeleteProduct={props.onDeleteProduct}
            />
          );
        })}
      </div>
    );
  }


export default Cart;
