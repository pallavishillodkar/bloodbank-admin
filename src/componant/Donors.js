import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Form, Modal, Row } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
import "../style/Donors.css";
// import { useSelector } from "react-redux";

function Donors() {
  // const { UserData } = useSelector((state) => state.user);
  const [Alldonors, setAlldonors] = useState([]);
  
  // const [RequestStatus, setRequestStatus] = useState(0);
  // const [selectedDonor, setselectedDonor] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/alldonors")
      .then((result) => {
        setAlldonors(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  //update
  // const Update = () => {
  //   const RequestStatus = {
  //     requestid:setRequestStatus._id,
  //     RequestStatus: String(RequestStatus)
  //   };
  // }
  // axios
  // .post("http://localhost:5000/api/updatestatus",RequestStatus)
  // .then((result) => {
  //     // alert("status Changes!");
  //    setShowUpdate(false);
  // })
  // .catch((err) => {
  //   console.log(err);
  // });
 
//   const [ShowUpdate, setShowUpdate] = useState(false);
//   const onShowUpdate = () => {
//     setShowUpdate(true);
//   };
//   const onHideUpdate = () => {
//     setShowUpdate(false);
// };

  return (
    <div className="donor-main-div">
      <h2 style={{textAlign:"center"}}>Donors</h2>
      <Container>
        <Row>
          {Alldonors.map((donor) => {
            return (
              <Col sm={12} md={9} lg={3}>
                <Card className="donor-card">
                  <Card.Body>
                    <Card.Text>DonorName: {donor.DonorName}</Card.Text>
                    <Card.Text>DonorMoNo: {donor.DonorMoNo}</Card.Text>
                    <Card.Text>DonorAddress: {donor. DonorAddress}</Card.Text>
                    <Card.Text>DonorCity: {donor.DonorCity}</Card.Text>
                    <Card.Text>DonorBloodGroup: {donor.DonorBloodGroup}</Card.Text>
                    <Card.Text>DonorGender: {donor.DonorGender}</Card.Text>
                    {/* <Card.Text>
                      Total Amount: {order.OrderTotalAmount}
                    </Card.Text> */}
                  </Card.Body>
                  {/* <Card.Footer>
                    <button className="button"
                    onClick={() => {
                      // setRequestStatus(donor);
                      onShowUpdate();
                    }}
                    >
                      Approved
                    </button>
                  </Card.Footer> */}
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>

      {/* <Modal className="donor-modal" show={ShowUpdate}
      onHide={onHideUpdate}>
        <Modal.Header closeButton>
          <Modal.Title>Request Status</Modal.Title>
        </Modal.Header>
        <Modal.Body className="donor-modal-body">
          <h4>Are You Want Approved This Request</h4>
          <Form>
            <Container>
              <Form.Control onChange={(e) => setRequestStatus(e.target.value)}
                type="string" placeholder="Enter status"/>
            </Container>
            <Modal.Footer>
          <button onClick={()=> approved()}>Approved</button>
          <button>Update</button>
          <button>Approved</button>
        </Modal.Footer>
          </Form>
        </Modal.Body>
         </Modal> */}
    </div>
  );
}

export default Donors;