import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as NaesLogo } from "../../assets/naes web logo.svg";
import "./navigation-bar.styles.scss";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
const NavigationBar = () => {
  const { currentUser,setCurrentUser } = useContext(UserContext);
  
  const signOutHandler = async() => {
    const response = await signOutUser();
    setCurrentUser(null);
    console.log("you've successfully signed out user.")
  };

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
            <span className="nav-link" onClick={signOutHandler}>Sign Out</span>
          ) : (
            <Link className="nav-link" to="/sign-in">
              Sign In
            </Link>
          )}
          {currentUser ? null : (<Link className="nav-link" to="/sign-up">
            Sign Up
          </Link>) }
        </div>
      </div>
      <Outlet></Outlet>
    </Fragment>
  );
};
export default NavigationBar;
