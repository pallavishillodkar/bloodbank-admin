import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashBoard from "./componant/DashBoard";
import Donors from "./componant/Donors";
import BagsStatus from "./componant/BagsStatus";
import Doctors from "./componant/Doctors";
import MyOffCanvas from "./componant/MyOffCanvas";
import AddDoctor from "./componant/AddDoctor";
import AddBags from "./componant/AddBags";
import AllRequest from "./componant/AllRequest";

const MyRoutes = () => {
  return (
    <div>
      <BrowserRouter>
        <MyOffCanvas />
        <Routes>
          <Route path="/" element={<DashBoard/>}/>
          <Route path="/Donors" element={<Donors/>}/>
          <Route path="/BagsStatus" element={<BagsStatus/>}/>
          <Route path="/AddBag" element={<AddBags/>}/>
          <Route path="/Doctors" element={<Doctors/>}/>
          <Route path="/AddDoctor" element={<AddDoctor/>}/>
          <Route path="/AllRequest" element={<AllRequest/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default MyRoutes;
