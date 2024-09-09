import axios from "axios";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import "../style/AddDoctor.css";

const AddDoctor = () => {
  const [adddoctor, setadddoctors] = useState([]);

  const [doctorname, setDoctorName] = useState("");
  const [doctoremailid, setDoctorEmailId] = useState("");
  const [doctormono, setDoctorMoNo] = useState("");
  const [hospitalname, setHospitalName] = useState("");

  const AddDoctor = () => {
    const adddoctor = {
        DoctorName: doctorname,
        DoctorEmailId: doctoremailid,
        DoctorMoNo: doctormono,
        HospitalName:hospitalname,
    };

    axios
      .post("http://localhost:5000/api/adddoctor", adddoctor)
      .then((result) => {
        setadddoctors(result.data);
        alert("Doctors Added..");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="cantainer">
    <div className="top">
      <form className="doctor-form">
        <h4 style={{ textAlign: "center", color: "black" }}>Add Doctor</h4>
        <label className="doctor-label">Doctor Name</label>
        <input
          className="doctor-input"
          type="text"
          placeholder="Enter Doctor Name "
          onChange={(e) => setDoctorName(e.target.value)}
        />
        <label className="doctor-label">Doctor EmailId</label>
        <input
          className="doctor-input"
          type="text"
          placeholder="Enter Doctor EmailId "
          onChange={(e) => setDoctorEmailId(e.target.value)}
        />
         <label className="doctor-label">Doctor MoNo</label>
        <input
          className="doctor-input"
          type="text"
          placeholder="Enter  Doctor MoNo"
          onChange={(e) => setDoctorMoNo(e.target.value)}
        />
        <label className="doctor-label">Hospital Name</label>
        <input
          className="doctor-input"
          type="text"
          placeholder="Enter Hospital Name "
          onChange={(e) => setHospitalName(e.target.value)}
        />
        <div>
          <button className="adddoctor-btn" onClick={() => AddDoctor()}>
            AddDoctor
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default AddDoctor;
