import { Outlet } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as NaesLogo } from "../../assets/naes web logo.svg";
import {NavigationContainer, LogoContainer, NavLinksContainer, NavLink} from "./navigation-bar.styles";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
const NavigationBar = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

 

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <NaesLogo className="logo"></NaesLogo>
        </LogoContainer>
        <NavLinksContainer>
          <NavLink to="/shop">
            Shop
          </NavLink>
          {currentUser ? (
            <NavLink as='span' onClick={signOutUser}>
              Sign Out
            </NavLink>
          ) : (
            <NavLink to="/sign-in">
              Sign In
            </NavLink>
          )}
          {currentUser ? null : (
            <NavLink to="/sign-up">
              Sign Up
            </NavLink>
          )}

          <CartIcon></CartIcon>
        </NavLinksContainer>
        {isCartOpen && <CartDropdown></CartDropdown>}
      </NavigationContainer>
      <Outlet></Outlet>
    </Fragment>
  );
};
export default NavigationBar;
