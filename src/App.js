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
      </div>
    );
  }
}
export default App;
