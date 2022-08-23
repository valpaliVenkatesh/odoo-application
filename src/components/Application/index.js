import React from "react";
import "./index.css";

function Application(props) {
  const { appDetails } = props;
  const { logoUrl, name, cost } = appDetails;
  return (
    <li className="col-12 col-md-6 col-xl-4">
      <div className="shadow app-card rounded">
        <img src={logoUrl} alt={name} className="app-logo" />
        <div>
          <h5>{name}</h5>
          <p>${cost} USD / month</p>
        </div>
        <input type="radio" className="align-self-start" />
      </div>
    </li>
  );
}

export default Application;
