import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import { ReactComponent as NaesLogo } from "../../assets/naes web logo.svg";
import "../navigation/navigation.styles.scss";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <NaesLogo className="logo"></NaesLogo>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/sign-in">
            Sign In
          </Link>
        </div>
      </div>
      <Outlet></Outlet>
    </Fragment>
  );
};
export default Navigation;
