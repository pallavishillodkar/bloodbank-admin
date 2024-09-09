import axios from "axios";
import React, { useState } from "react";
import { useAccordionButton } from "react-bootstrap";
import "../style/AddBags.css";


const AddBags = () => {
    const [addbag, setaddbags] = useState([]);

    const [bloodgroup,setBloodGroup] = useState("");
    const [numberofavailable,setNumberOfAvailable] = useState("");
    const [bagsprice, setBagsPrice] = useState("");
    // const [bloodquantity,setBloodQuantity] = useState("");

    const AddBags = () => {
        const addbag = {
            BloodGroup: bloodgroup,
            NumberOfAvailable:numberofavailable,
            BagsPrice:bagsprice,
            // BloodQuantity:bloodquantity,
        };
        axios
        .post("http://localhost:5000/api/addbag",addbag)
        .then((result) => {
            setaddbags(result.data);
            alert("Bags Added..");
        })
        .catch((error) => {
            console.log(error);
        });
    };

  return (
    <div className="bag-cantainer"> 
      <div className="top - bag">
        <form className="bags-form">
          <h4 style={{ textAlign: "center" , fontWeight:"600" }}>Add Bags</h4>
          <label className="bags-label">Blood Group</label>
          <select className="bags-select"
          onChange={(e) => setBloodGroup(e.target.value)}>
             <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
          </select>
          {/* <input
            className="bags-input"
            type="text"
            placeholder="Enter Blood Group"
            onChange={(e) => setBloodGroup(e.target.value)}
          /> */}

          <label className="bags-label">Number Of Bags</label>
          <input
            className="bags-input"
            type="text"
            placeholder="Enter Number Of Bags"
            onChange={(e) => setNumberOfAvailable(e.target.value)}
          />

          <label className="bags-label">Bags Price</label>
          <input
            className="bags-input"
            type="text"
            placeholder="Enter Bags Price"
            onChange={(e) => setBagsPrice(e.target.value)}
          />

          {/* <label className="bags-label"> Blood Quantity</label>
          <input
            className="bags-input"
            type="text"
            placeholder="Enter Blood Quantity"
            onChange={(e) => setBloodQuantity(e.target.value)}
          /> */}

          <div>
            <button className="addbag-btn" onClick={() => AddBags()}>
              AddBags
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBags;
