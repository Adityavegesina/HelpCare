import React, { useState, useEffect } from "react";

import Sidebar from "../../Hospital/Dashboard/Reception/Sidebar";
const Mainpage = () => {
  const url =
    "http://localhost:5001/api/doctor/patientinfo/64d1d29b25e5eb5e63e61f2f";

  const [data, setData] = useState([]);

  const fetchInfo = () => {
    fetch(url)
      .then((res) => res.json())
      .then((d) => console.log(d));
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div>
      <Sidebar />
      <img
        src="https://media.istockphoto.com/id/1204177269/photo/portrait-of-multi-cultural-medical-team-standing-in-hospital-corridor.jpg?s=612x612&w=0&k=20&c=PR3ulMitMJnrYRpe12C95HWnLWvU15NP6QcLtxEQYJQ="
        style={{ minWidth: "100%" }}
      />
      {data}
    </div>
  );
};

export default Mainpage;
