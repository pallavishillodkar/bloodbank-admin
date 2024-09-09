import React, { useEffect, useState } from "react";
import Apositive from "../image/A+ve.png";
import Anegative from "../image/A-ve.png";
import Opositive from "../image/O+ve.png";
import Onegative from "../image/O-ve.png";
import ABpositive from "../image/AB+ve.png";
import ABnegative from "../image/AB-ve.png";
import Bpositive from "../image/B+ve.png";
import Bnegative from "../image/B-ve.png";
import "../style/BagsStatus.css";
import { Card, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const BagsStatus = () => {
  const [Allbags, setAllbags] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/allbags")
      .then((result) => {
        setAllbags(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  
  return (
    <div className="bags-status-main-div">
      <h4 style={{ textAlign: "center" }}>BagsStatus</h4>

      <div className="bagsstatus-div">
        <button className="addbag-button" onClick={() => navigate("/addbag")}>
          <svg
            class="send-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              fill-opacity="0.4"
              d="m16.066 10.184l-3.89-1.795c-2.154-.994-3.231-1.491-3.725-.982c-.493.509.038 1.572 1.101 3.698c.22.44.33.659.33.895s-.11.456-.33.895c-1.063 2.126-1.594 3.19-1.1 3.698c.493.51 1.57.012 3.725-.982l3.889-1.795c1.698-.784 2.548-1.176 2.548-1.816c0-.64-.85-1.032-2.549-1.816"
            ></path>
            <path
              fill="currentColor"
              d="M8.895 11.684L8.174 9.52a1 1 0 0 0-.707-.654l-1.78-.445a.8.8 0 0 0-.91 1.134l1.111 2.22a.5.5 0 0 1 0 .448l-1.11 2.22a.8.8 0 0 0 .91 1.134l1.78-.445a1 1 0 0 0 .706-.654l.72-2.163a1 1 0 0 0 0-.632"
            ></path>
          </svg>
          Add Bags
        </button>
        <Row>
          <Col>
            <Card className="bagsstatus-card">
              <Card.Img className="bagsstatus-img" src={Apositive} />
              <Card.Body>
                <h6 className="bagsstatus-h6">BloodGroup:A+ve</h6>
                <h6 className="bagsstatus-h6">BagsPrice: &#8377; 300</h6>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="bagsstatus-card">
              <Card.Img className="bagsstatus-img" src={Anegative} />
              <Card.Body>
                <h6 className="bagsstatus-h6">BloodGroup:A-ve</h6>
                <h6 className="bagsstatus-h6">BagsPrice: &#8377; 200</h6>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="bagsstatus-card">
              <Card.Img className="bagsstatus-img" src={Opositive} />
              <Card.Body>
                <h6 className="bagsstatus-h6">BloodGroup:O+ve</h6>
                <h6 className="bagsstatus-h6">BagsPrice: &#8377; 150</h6>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="bagsstatus-card">
              <Card.Img className="bagsstatus-img" src={Onegative} />
              <Card.Body>
                <h6 className="bagsstatus-h6">BloodGroup:O-ve</h6>
                <h6 className="bagsstatus-h6">BagsPrice: &#8377; 400</h6>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card className="bagsstatus-card">
              <Card.Img className="bagsstatus-img" src={ABpositive} />
              <Card.Body>
                <h6 className="bagsstatus-h6">BloodGroup:AB+ve</h6>
                <h6 className="bagsstatus-h6">BagsPrice: &#8377; 200</h6>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="bagsstatus-card">
              <Card.Img className="bagsstatus-img" src={ABnegative} />
              <Card.Body>
                <h6 className="bagsstatus-h6">BloodGroup:AB-ve</h6>
                <h6 className="bagsstatus-h6">BagsPrice: &#8377; 250</h6>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="bagsstatus-card">
              <Card.Img className="bagsstatus-img" src={Bpositive} />
              <Card.Body>
                <h6 className="bagsstatus-h6">BloodGroup:B+ve</h6>
                <h6 className="bagsstatus-h6">BagsPrice: &#8377; 150</h6>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="bagsstatus-card">
              <Card.Img className="bagsstatus-img" src={Bnegative} />
              <Card.Body>
                <h6 className="bagsstatus-h6">BloodGroup:B-ve</h6>
                <h6 className="bagsstatus-h6">BagsPrice: &#8377; 200</h6>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default BagsStatus;
