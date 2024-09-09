import React, { useState } from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { AiFillCustomerService } from "react-icons/ai";
import { BiDonateBlood, BiSolidShoppingBags } from "react-icons/bi";
import { FaUserDoctor } from "react-icons/fa6";
import { VscRequestChanges } from "react-icons/vsc";
import { MdBloodtype, MdOutlineDashboardCustomize } from "react-icons/md";
import { Link } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
import "../style/MyOffCanvas.css";

const MyOffCanvas = () => {
  const [isShow, setisShow] = useState(false);
  const handleShow = () => setisShow(true);
  const handleHide = () => setisShow(false);
  return (
    <>
      <Navbar collapseOnSelect className="off-div" variant="dark" bg="dark" expand="md">
        <Container>
          <Navbar.Brand >
            <TiThMenu
              className="blood-bank-icon"
              onClick={() => handleShow()}
              size={30}
            />
            <BiDonateBlood  color="red" size={30} />
            Blood Bank
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Offcanvas className="menu-close" show={isShow} onHide={handleHide}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menus</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link onClick={() => handleHide()}>
              <Link className="mlink" to="/">
                <MdOutlineDashboardCustomize className="icon-off" /> DashBoard
              </Link>
            </Nav.Link>
            <Nav.Link onClick={() => handleHide()}>
              <Link className="mlink" to="/Donors">
                <MdBloodtype className="icon-off" /> Donors
              </Link>
            </Nav.Link>
            <Nav.Link onClick={() => handleHide()}>
              <Link className="mlink" to="/BagsStatus">
                <BiSolidShoppingBags className="icon-off" /> BagsStatus
              </Link>
            </Nav.Link>
            <Nav.Link onClick={() => handleHide()}>
              <Link className="mlink" to="/Doctors">
                <FaUserDoctor  className="icon-off"/> Doctors
              </Link>
            </Nav.Link>
            <Nav.Link onClick={() => handleHide()}>
              <Link className="mlink" to="/AllRequest">
                <VscRequestChanges  className="icon-off"/> AllRequest
              </Link>
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default MyOffCanvas;
