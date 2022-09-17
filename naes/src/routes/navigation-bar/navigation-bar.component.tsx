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
  selectIsLoading,
  selectUserName,
} from "../../store/user/user.selector";
import { selectIsCartOpen } from "../../store/cart/cart.selector";
import Spinner from "../../components/spinner/spinner.component";

const NavigationBar = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isLoading = useSelector(selectIsLoading);
  const userName = useSelector(selectUserName);
  const isCartOpen = useSelector(selectIsCartOpen);

  const dispatch = useDispatch();

  const signOutComplete = () => {
    dispatch(signOutStart());
    dispatch(updateUserName(userName !== null ? userName : ''));
  };

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <NaesLogo className="logo"></NaesLogo>
        </LogoContainer>
        <NavLinksContainer>
          {isLoading ? (
            <Spinner></Spinner>
          ) : currentUser !== null && userName !== null ? (
            <NavLink to="/">Hello, {userName}</NavLink>
          ) : null}

          <NavLink to="/shop">Shop</NavLink>

          {currentUser !== null ? (
            <NavLink as="span" onClick={signOutComplete}>
              Sign Out
            </NavLink>
          ) : null}

          {currentUser === null ? (
            <NavLink to="/sign-in">Sign In</NavLink>
          ) : null}

          {currentUser === null ? (
            <NavLink to="/sign-up">Sign Up</NavLink>
          ) : null}

          <CartIcon></CartIcon>
        </NavLinksContainer>
        {isCartOpen && <CartDropdown></CartDropdown>}
      </NavigationContainer>
      <Outlet></Outlet>
    </Fragment>
  );
};
export default NavigationBar;
