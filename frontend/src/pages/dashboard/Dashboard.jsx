import React from "react";
import "./Dashboard.scss";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
const Dashboard = () => {
  const navigate = useNavigate();
  const [admin,setAdmin] = useState({
    adminId: "",
    adminName: "",
    email: "",
    campusName: "",
    building: "",
    roomNumber: 0,
  })
  useEffect(() =>{
    fetch("http://localhost:5050/api/admins/",{
      method:'GET',
        headers:{
          'Content-Type':'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
    })
    .then(res => res.json())
    .then(json =>{
      const adminInfo = json.admin
      setAdmin({
        adminId: adminInfo.adminId,
        adminName: adminInfo.adminName,
        email: adminInfo.email,
        campusName: adminInfo.campusName,
        building: adminInfo.building,
        roomNumber: adminInfo.roomNumber,
      })
    })
    .catch(err =>{
      console.log(err)
    })
  },[])
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Admin Dashboard</h1>
      </header>

      <section className="dashboard-summary">
        <div className="summary-item">
          <h2>Admin</h2>
          <p>{admin.adminName}</p>{" "}
        </div>
        <div className="summary-item">
          <h2>Tòa</h2>
          <p>{admin.building}</p>
        </div>
        <div className="summary-item">
          <h2>Phòng</h2>
          <p>{admin.roomNumber}</p>
        </div>
        {/* <div
          className="summary-item-button"
          onClick={() => navigate("/print-require")}
        >
          <h2>Yêu Cầu In</h2>
          <p>300</p>
        </div>
        <div className="summary-item">
          <h2>Số Lượng Đã In</h2>
          <p>500</p>
        </div> */}
      </section>

      <section className="dashboard-actions">
        {/* <h2>Quick Actions</h2> */}
        <div className="actions-container">
          {/* <button onClick={() => navigate("/printing-logs")}>
            View Printing Logs
          </button> */}
          {/* <button onClick={() => navigate("/printer-management")}>
            Manage Printers
          </button> */}
          {/* <button onClick={() => navigate("/configuration")}>
            Students Configuration
          </button> */}
        </div>
      </section>

      <footer className="dashboard-footer">
        <p>Powered by SPSO Printing System</p>
      </footer>
    </div>
  );
};

export default Dashboard;
