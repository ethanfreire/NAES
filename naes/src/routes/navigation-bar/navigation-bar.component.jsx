import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import { ReactComponent as NaesLogo } from "../../assets/naes web logo.svg";
import "./navigation-bar.styles.scss";

const NavigationBar = () => {
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
          <Link className="nav-link" to="/sign-in">
            Sign In
          </Link>
          <Link className="nav-link" to="/sign-up">
            Sign Up
          </Link>
        </div>
      </div>
      <Outlet></Outlet>
    </Fragment>
  );
};
export default NavigationBar;
