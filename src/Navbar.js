import React from "react";

const Navbar = (props) => {
    return (
      <div style={styles.navbar}>
        <div style={styles.cartIconContainer}>
          <img style={styles.cartIcon} src={require("../src/images/cart.png")} alt="cart-icon" />
          <span style={styles.cartCount}>{props.count}</span>
        </div>
      </div>
    );
  }


const styles = {
  cartIcon: {
    height: 32,
    marginRight: 20,
  },

  navbar: {
    height: 70,
    background: "#4267b2",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  cartIconContainer: {
    position: "relative",
  },
  cartCount: {
    background: "yellow",
    borderRadius: "50%",
    padding: "4px 8px",
    position: "absolute",
    right: 0,
    top: -9,
  },
};

export default Navbar;
