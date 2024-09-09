import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AddDoctor from "./AddDoctor";
import "../style/Doctors.css";
import axios from "axios";
import { Card, Col, Container, Row } from "react-bootstrap";

export const Doctors = () => {
  const [Alldoctors, setAlldoctors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/alldoctors")
      .then((result) => {
        setAlldoctors(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <div className="doctor-main-div">
      <div>
      <button
        className="adddoctor-button"
        onClick={() => navigate("/adddoctor")}
      >
        Add Doctor
      </button>
      <h2 style={{ textAlign: "center" }}>Doctors</h2>
      <Container>
        <Row>
          {Alldoctors.map((doctors) => {
            return (
              <Col sm={12} md={9} lg={3}>
                <Card className="doctor-card">
                  <Card.Body>
                    <Card.Text>DoctorName: {doctors.DoctorName}</Card.Text>
                    <Card.Text>
                      DoctorEmailId: {doctors.DoctorEmailId}
                    </Card.Text>
                    <Card.Text> DoctorMoNo: {doctors.DoctorMoNo}</Card.Text>
                    <Card.Text>HospitalName: {doctors.HospitalName}</Card.Text>
                  </Card.Body>
                  {/* <Card.Footer>
                    <button className="button"
                    >
                      Details
                    </button>
                  </Card.Footer> */}
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
      </div>
    </div>
  );
};
export default Doctors;
