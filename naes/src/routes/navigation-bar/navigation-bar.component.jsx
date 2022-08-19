import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as NaesLogo } from "../../assets/naes web logo.svg";
import "./navigation-bar.styles.scss";
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
      <div className="navigation">
        <Link className="logo-container" to="/">
          <NaesLogo className="logo"></NaesLogo>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              Sign Out
            </span>
          ) : (
            <Link className="nav-link" to="/sign-in">
              Sign In
            </Link>
          )}
          {currentUser ? null : (
            <Link className="nav-link" to="/sign-up">
              Sign Up
            </Link>
          )}

          <CartIcon></CartIcon>
        </div>
        {isCartOpen && <CartDropdown></CartDropdown>}
      </div>
      <Outlet></Outlet>
    </Fragment>
  );
};
export default NavigationBar;
