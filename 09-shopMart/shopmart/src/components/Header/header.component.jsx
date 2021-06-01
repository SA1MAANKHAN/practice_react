import React from "react";

import "./header.styles.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">Shomart</div>
      <div className="header__navLinks">
        <div className="header__navLink">Shop</div>
        <div className="header__navLink">Login</div>
        <div className="header__navLink">Cart</div>
      </div>
    </div>
  );
};

export default Header;
