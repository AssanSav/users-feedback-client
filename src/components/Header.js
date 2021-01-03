import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Billings from "./Billings";

const Header = () => {
  const user = useSelector((state) => state.auth.user);
  let BASE_URL = process.env.REACT_APP_URL;

  console.log(user);
  const renderContent = () => {
    switch (user) {
      case null:
        return;
      case false:
        return (
          <li>
            <Link href={`${BASE_URL}/auth/google`}>Login with Google</Link>
          </li>
        );
      default:
        return [
          <li key="1">
            <Billings />
          </li>,
          <li key="2" style={{ margin: "0 10px " }}>
            Credits: {user.credits}
          </li>,
          <li key="3">
            <a href={`${BASE_URL}/api/logout`}>Logout</a>
          </li>,
        ];
    }
  };

  return (
    <nav>
      <div className="nav-wrapper">
        <Link to={user ? "/surveys" : "/"} className="left brand-logo">
          Emaily
        </Link>
        <ul className="right">{renderContent()}</ul>
      </div>
    </nav>
  );
};

export default Header;
