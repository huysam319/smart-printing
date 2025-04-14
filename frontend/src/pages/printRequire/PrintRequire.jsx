import React from "react";
import "./PrintRequire.scss";
import { useNavigate} from "react-router-dom";
import {useState, useEffect } from "react"
const PrintRequire = () => {
  const navigate = useNavigate();
  const [logs,setLogs] = useState([])
  useEffect(()=>{
    fetch("http://localhost:5050/api/logs/admin",{
      method:'GET',
      headers:{
        'Content-Type':'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
    })
    .then(res=>res.json())
    .then(json=>{
      console.log(json)
      const logList = json.logs.filter(log => log.status == "Wait")
      setLogs(logList)
    })
    .catch(err=>console.log(err))
  },[])
  const handleSubmitPrint = (id) =>{
    console.log(id)
    fetch(`http://localhost:5050/api/logs/${id}`,{
      method:'PATCH',
      headers:{
        'Content-Type':'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body:JSON.stringify({status: "Printed"})
    })
    .then(() => window.location.reload())
    .catch(err=>console.log(err))
  }
  return (
    <div className="print-require-page">
      <div className="header">
        <button
          className="return-dashboard-btn"
          onClick={() => navigate("/dashboard")}
        >
          Return to Dashboard
        </button>
      </div>

      <div className="table-container">
        <h2>Print Requests</h2>
        <table className="print-requests-table">
          <thead>
            <tr>
              <th>Mã Số SV</th>
              <th>Họ và Tên SV</th>
              <th>Máy In</th>
              <th>Tên File</th>
              <th>Kích cỡ</th>
              <th>Trang in</th>
              <th>Số bản copy</th>
              <th>Số Lượng</th>
              <th>Trạng thái</th>
              <th>Xác Nhận</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log, index) => (
              <tr key={index}>
                <td>{log.studentId}</td>
                <td>{log.Student.name}</td>
                <td>{log.Printer.brand} {log.Printer.model}</td>
                <td>{log.fileName}</td>
                <td>A{log.pageSize}</td>
                <td>{log.pagePrinted}</td>
                <td>{log.numCopy}</td>
                <td>{log.totalPage}</td>
                <td>{log.status}</td>
                <td>
                  <button className="confirm-btn" onClick={() => handleSubmitPrint(log.logId)}>Confirm</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PrintRequire;
