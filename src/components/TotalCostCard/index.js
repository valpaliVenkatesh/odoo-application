import React from "react";
import "./index.css";
function TotalCostCard(props) {
  return (
    <div className="total-cost-card shadow">
      <div className="d-flex justify-content-start cost-buttons-container">
        <h6 className="active-button">Annually</h6>
        <h6 className="passive-button">Monthly</h6>
      </div>
      <div className="p-3">
        <div className="d-flex justify-content-between total-cost-card-row">
          <div className="d-flex">
            <p className="mb-1">1 </p>
            <p className="mb-1 user-word">Users</p>
          </div>
          <div className="d-flex">
            <p className="mb-1 cost-in-dollars">$712.00</p>
            <p className="mb-1">USD</p>
          </div>
        </div>
        <div className="d-flex justify-content-between total-cost-card-row">
          <div className="d-flex">
            <p className="mb-1">users Discount </p>
            <p className="mb-1 align-self-start">(1)</p>
          </div>
          <div className="d-flex">
            <p className="mb-1 user-Discount">- $2.00</p>
            <p className="mb-1">USD</p>
          </div>
        </div>
        <div className="d-flex justify-content-between total-cost-card-row">
          <div className="d-flex">
            <p className="mb-1">1 </p>
            <p className="mb-1 user-word">Apps</p>
          </div>
          <div className="d-flex">
            <p className="mb-1 cost-in-dollars">$712.00</p>
            <p className="mb-1">USD</p>
          </div>
        </div>
        <div className="d-flex justify-content-between total-cost-card-row">
          <div className="d-flex">
            <p className="cost-in-dollars mr-1">Total</p>
            <p className="mb-1">/ month </p>
            <p className="mb-1 align-self-start">(1)</p>
          </div>
          <div className="d-flex">
            <p className="mb-1 cost-in-dollars">$6.00</p>
            <p className="mb-1">USD</p>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <p className="align-self-center">
            (2) Billed annually: <span className="cost-in-dollars">$72.0</span>{" "}
            USD
          </p>
        </div>
        <div className="d-flex align-items-center flex-column justify-content-center try-now-container">
          <h2>TRY NOW</h2>
          <p className="m-0">15-day- Free Trail</p>
        </div>
        <div className="buy-now-button d-flex align-items-center flex-column justify-content-center">
          BUY NOW
        </div>
        <div className="print-sentence">Send / Print the quote</div>
        <div>
          (1) New customers get a discount on the initial number of users
          purchased .($6.00 USD instead of $8.00 USD).
        </div>
      </div>
    </div>
  );
}

export default TotalCostCard;
