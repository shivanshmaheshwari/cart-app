import React from "react";

class CartItem extends React.Component {
  constructor() {
    super();
    this.state = {
      price: 999,
      title: "Mobile Phone",
      quantity: 1,
      img: "",
    };
  }

  //   increase quantity function
  increaseQuantity = () => {
    // this.state.quantity += 1;
    // console.log("this.state",this.state);

    // set state form 1 1st way to set state by giveing it an object
    // to be used when the state is not dependent on the previous state
    // object form

    // this.setState({
    //   quantity: this.state.quantity + 1,
    // });

    // form no 2  to be used when the next state is dependent on the previous state
    // function form

    this.setState((prevState) => {
      return {
        quantity: prevState.quantity + 1,
      };
    });
  };

  //   decrease quantity function
  decreaseQuantity = () => {
    if (this.state.quantity == 1) {
      alert("quantity cannot be zero");
    } else {
      this.setState((prevState) => {
        return {
          quantity: prevState.quantity - 1,
        };
      });
    }
  };

delete = () => {
    
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
              onClick={this.decreaseQuantity}
            />
            <img
              alt="delete"
              className="action-icons"
              src={require("../src/images/delete.png")}
              onClick={this.delete}
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
