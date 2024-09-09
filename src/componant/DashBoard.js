import React from "react";
import "../style/DashBoard.css";
import doctor from "../image/icons8-doctor-48.png";
import donor from "../image/icons8-donor-64.png";
import patient from "../image/icons8-patient-32.png";
import request from "../image/icons8-request-24.png";
const DashBoard = () => {
  return (
    <div className ="dashboard-main"style={{ marginTop: "50px" }}>
      <div className="admin-container">
        <div className="admin-cards">
          <div className="admin-card">
            <div className="admin-card-inner">
              <h3>Doctors</h3>
              <h1>30</h1>
            </div>
            <img src={doctor} className="admin-card_icon" />
          </div>
          <div className="admin-card">
            <div className="admin-card-inner">
              <h3>Donors</h3>
              <h1>30</h1>
            </div>
            <img src={donor} className="admin-card_icon" />
          </div>
          <div className="admin-card">
            <div className="admin-card-inner">
              <h3>Patient</h3>
              <h1>40</h1>
            </div>
            <img src={patient} className="admin-card_icon" />
          </div>
          <div className="admin-card">
            <div className="admin-card-inner">
              <h3>Request</h3>
              <h1>20</h1>
            </div>
            <img src={request} className="admin-card_icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
