import React from "react";
import Index from "./index.css";
import Cart from "./Cart";
import Navbar from "./Navbar";
import { render } from "@testing-library/react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 999,
          title: "Watch",
          quantity: 1,
          img: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80",
          id: 1,
        },
        {
          price: 999,
          title: "Mobile Phone",
          quantity: 10,
          img: "https://images.unsplash.com/photo-1580910051074-3eb694886505?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80",
          id: 2,
        },
        {
          price: 999,
          title: "Laptop",
          quantity: 1,
          img: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80",
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
  };

  handleDecreaseQuantity = (product) => {
    if (product.quantity == 0) {
      return;
    }
    const { products } = this.state;
    const index = products.indexOf(product);

    products[index].quantity -= 1;
    this.setState({
      products,
    });
  };

  handleDeleteProduct = (id) => {
    const { products } = this.state;
    const items = products.filter((item) => item.id !== id);
    this.setState({
      products: items,
    });
  };

  getCartCount = () => {
    const {products} = this.state;
    let count = 0;
    products.forEach((product) => {
      count += product.quantity;
    })
    return count;
  }
  
  getCartTotal = () => {
    const {products} = this.state;
    let cartTotal = 0;

    products.map((product) => {
      cartTotal = cartTotal + product.quantity * product.price;
    })
    return cartTotal;
  }


  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar count = {this.getCartCount()} />
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />

        <div style={{padding: 10, fontSize: 25}}>TOTAL: {this.getCartTotal()}</div>
      </div>
    );
  }
}
export default App;
