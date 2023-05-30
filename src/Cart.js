import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 999,
          title: "Watch",
          quantity: 1,
          img: "",
          id: 1,
        },
        {
          price: 999,
          title: "Mobile Phone",
          quantity: 10,
          img: "",
          id: 2,
        },
        {
          price: 999,
          title: "Laptop",
          quantity: 1,
          img: "",
          id: 3,
        },
      ],
    };
  }

handleIncreaseQuantity = (product) => {
  const { products } = this.state;
  const index = products.indexOf(product);

  products[index].quantity += 1;
  this.setState({
    products,
  });
}

handleDecreaseQuantity = (product) => {
  if(product.quantity == 0){
    return;
  }
  const { products } = this.state;
  const index = products.indexOf(product);

  products[index].quantity -= 1;
  this.setState({
    products,
  });
}

  render() {
    const { products } = this.state;
    return (
      <div className="cart">
        {products.map((product) => {
          return <CartItem 
          product={product} 
          key={product.id}
          onIncreaseQuantity={this.handleIncreaseQuantity} 
          onDecreaseQuantity={this.handleDecreaseQuantity}
          />;
        })}
      </div>
    );
  }
}

export default Cart;