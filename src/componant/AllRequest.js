import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Form, Modal, Row } from "react-bootstrap";
import "../style/AllRequest.css";


function AllRequest() {
  const [Allrequest, setAllrequest] = useState([]);

  const [selectedRequests, setselectedRequests] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/allrequest")
      .then((result) => {
        setAllrequest(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  const UpdateRequest = () => {
    const RequestStatus = {
      Requestsid: selectedRequests._id,
      RequestStatus: "Approved",
    };
    axios
      .post("http://localhost:5000/api/updatestatus", RequestStatus)
      .then((result) => {
        setShowUpdate(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [ShowUpdate, setShowUpdate] = useState(false);
  const onShowUpdate = () => {
    setShowUpdate(true);
  };
  const onHideUpdate = () => {
    setShowUpdate(false);
  };

  return (
    <div className="main-allrequest">
      <h3 style={{ textAlign: "center" }}>AllRequest</h3>
      <Container>
        <Row>
          {Allrequest.map((requests) => {
            return (
              <Col sm={12} md={9} lg={3}>
                <Card>
                  <Card.Body className="allrequest-card">
                    <Card.Text>RequestDate : {requests.RequestDate}</Card.Text>
                    <Card.Text>
                      RequestStatus: {requests.RequestStatus}
                    </Card.Text>
                    <Card.Text>HospitalName: {requests.HospitalName}</Card.Text>
                    <Card.Text>
                      HospitalAddress: {requests.HospitalAddress}
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <button
                      className="button-approved"
                      onClick={() => {
                        setselectedRequests(requests)
                        onShowUpdate();
                      }}
                    >
                      Approved
                    </button>
                  </Card.Footer>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
      <Modal className="request-modal" show={ShowUpdate} onHide={onHideUpdate}>
        <Modal.Header closeButton>
          <Modal.Title>Request Status</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Are You Want Approved This Request</h4>
          <Modal.Footer>
              <button onClick={() => UpdateRequest()}>Approved</button>
            </Modal.Footer>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default AllRequest;
