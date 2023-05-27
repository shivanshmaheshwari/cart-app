import React from "react";

class CartItem extends React.Component {
  constructor() {
    super();
    this.state = {
      price: 999,
      title: "Mobile Phone",
      quantity: 1,
      img: "",
    }
    // this.increaseQuantity = this.increaseQuantity.bind(this);
  }
 
  increaseQuantity = () => {
    console.log("this.state",this.state);
  }
  render() {
    const { price, title, quantity } = this.state;
    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image} />
        </div>
        <div className="right-block">
          <div style={{ fontSize: 22 }}>{title}</div>
          <div style={{ fontSize: 18 }}>Rs {price}</div>
          <div style={{ fontSize: 18 }}>Qty:{quantity}</div>

          <div className="cart-item-actions">
            {/* buttons */}
            <img
              alt="increase"
              className="action-icons"
              src={require("../src/images/plus.png")}
              onClick={this.increaseQuantity}
            />
            <img
              alt="decrease"
              className="action-icons"
              src={require("../src/images/minus.png")}
            />
            <img
              alt="delete"
              className="action-icons"
              src={require("../src/images/delete.png")}
            />
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  image: {
    height: 120,
    width: 120,
    borderRadius: 4,
    background: "#ccc",
  },
};

export default CartItem;

// https://static.vecteezy.com/system/resources/previews/011/912/005/original/minus-sign-icon-free-png.png
