import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Billings from "./Billings";

const Header = () => {
  const user = useSelector((state) => state.auth);

  const renderContent = () => {
    switch (user) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="https://users-feedback-app.herokuapp.com/auth/google">Login with Google</a>
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
            <a href="/api/logout">Logout</a>
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
