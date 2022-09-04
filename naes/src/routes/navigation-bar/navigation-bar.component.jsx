import { Outlet } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as NaesLogo } from "../../assets/naes web logo.svg";
import {
  NavigationContainer,
  LogoContainer,
  NavLinksContainer,
  NavLink,
} from "./navigation-bar.styles";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../contexts/cart.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {  updateUserName } from "../../store/user/user.action"  

const NavigationBar = () => {

  const dispatch = useDispatch();

  const currentUser = useSelector((state) => {
    return state.user.currentUser;
  });
  const userName = useSelector((state) => {
    return state.user.userName;
  });

  const { isCartOpen } = useContext(CartContext);

  const signOutComplete = () => {
    signOutUser();
    
    dispatch(updateUserName(null));
  };
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <NaesLogo className="logo"></NaesLogo>
        </LogoContainer>
        <NavLinksContainer>
          {currentUser !== null && userName !== null ? (
            <NavLink to="/">Hello, {userName}</NavLink>
          ) : null}
          <NavLink to="/shop">Shop</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutComplete}>
              Sign Out
            </NavLink>
          ) : (
            <NavLink to="/sign-in">Sign In</NavLink>
          )}
          {currentUser ? null : <NavLink to="/sign-up">Sign Up</NavLink>}

          <CartIcon></CartIcon>
        </NavLinksContainer>
        {isCartOpen && <CartDropdown></CartDropdown>}
      </NavigationContainer>
      <Outlet></Outlet>
    </Fragment>
  );
};
export default NavigationBar;
