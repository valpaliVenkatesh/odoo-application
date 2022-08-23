import React from "react";
import Apps from "../Apps";
import Header from "../Header";
import TotalCostCard from "../TotalCostCard";
import "./index.css";
function Home() {
  return (
    <div className="container-fluid p-0">
      <div className="row m-0 d-flex flex-column align-items-center">
        <div className="col-12 m-0 p-0">
          <Header />
        </div>
        <div className="col-12 p-0 m-0">
          <div className="odd-pricing">
            <h2>Odoo Pricing</h2>
          </div>
        </div>
        <div className="col-10 col-lg-10 p-0 m-0 align-self-start">
          <h5 className="m-3">Choose The No Users</h5>
          <div className="d-flex justify-content-evenly align-items-center m-3 ">
            <div className="users-count-input-container">
              <input className="users-count-input form-control" />
              <div className="m-0 bg-secondary form-control users-word mr-4">
                Users
              </div>
            </div>
            <div className="m-0 mr-2 d-flex  flex-wrap">
              <div className="cancelled-price d-flex">
                <h4 className="m-0 mr-2">$8.00 </h4>
                <h4 className="m-0 mr-2">USD</h4>
              </div>
              <div className="d-flex">
                <h4 className="m-0 mr-2">$6.00 </h4>
                <h4 className="m-0 mr-2">USD/user/month</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-center ">
          <div className="col-10 col-md-8 mt-4">
            <Apps />
          </div>
          <div className="col-lg-3 col-10">
            <TotalCostCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
