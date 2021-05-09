import React from "react";
import { connect } from "react-redux";
import { auth } from "../../firebase/firebase";
import { createStructuredSelector } from "reselect";

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from "./header.styles";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "../cart-icon/cart-icon";
import CardDropdown from "../cart-dropdown/cart-dropdown";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop">Shop</OptionLink>
      <OptionLink to="/shop">Contact </OptionLink>
      {currentUser ? (
        <OptionLink as="div" onClick={() => auth.signOut()}>
          Sign Out
        </OptionLink>
      ) : (
        <OptionLink to="/signin">Sign In</OptionLink>
      )}

      <CartIcon />
    </OptionsContainer>
    {hidden ? null : <CardDropdown />}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
