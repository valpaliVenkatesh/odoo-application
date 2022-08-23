import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import "./index.css";

function Header() {
  return (
    <nav className="d-flex justify-content-between align-items-center shadow nav-bar-container">
      <h4 className="m-0">odoo</h4>
      <div className="d-none d-md-inline">
        <div className="d-flex ">
          <h5 className="mr-3">Apps</h5>
          <h5 className="mr-3">Community</h5>
          <h5>Pricing</h5>
        </div>
      </div>
      <div className="d-none d-md-inline">
        <div className="d-flex align-items-center">
          <div></div>
          <h5 className="m-0 mr-3">Sign in</h5>
          <button className="btn btn-info">Try it free</button>
        </div>
      </div>
      <div className="d-md-none d-inline">
        <AiOutlineMenu />
      </div>
    </nav>
  );
}

export default Header;
