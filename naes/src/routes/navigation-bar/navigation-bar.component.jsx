import { Outlet } from "react-router-dom";
import { Fragment } from "react";
import { ReactComponent as NaesLogo } from "../../assets/naes web logo.svg";
import {
  NavigationContainer,
  LogoContainer,
  NavLinksContainer,
  NavLink,
} from "./navigation-bar.styles";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { useSelector, useDispatch } from "react-redux";
import { updateUserName, signOutStart } from "../../store/user/user.action";
import {
  selectCurrentUser,
  selectUserName,
} from "../../store/user/user.selector";
import { selectIsCartOpen } from "../../store/cart/cart.selector";

const NavigationBar = () => {
  const currentUser = useSelector(selectCurrentUser);

  const userName = useSelector(selectUserName);

  const dispatch = useDispatch();

  const isCartOpen = useSelector(selectIsCartOpen);

  const signOutComplete = () => {
    dispatch(signOutStart());
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
          {userName !== null ? (
            <NavLink as="span" onClick={signOutComplete}>
              Sign Out
            </NavLink>
          ) : (
            <NavLink to="/sign-in">Sign In</NavLink>
          )}
          {userName === null ? <NavLink to="/sign-up">Sign Up</NavLink> : null}

          <CartIcon></CartIcon>
        </NavLinksContainer>
        {isCartOpen && <CartDropdown></CartDropdown>}
      </NavigationContainer>
      <Outlet></Outlet>
    </Fragment>
  );
};
export default NavigationBar;
