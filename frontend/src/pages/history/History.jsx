import React, { useState , useEffect } from "react";
import "./History.scss";

const History = () => {
  const [logs,setLogs] = useState([])
  useEffect(()=>{
    fetch("http://localhost:5050/api/logs/student",{
      method:'GET',
      headers:{
        'Content-Type':'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
    })
    .then(res=>res.json())
    .then(json=>{
      const logList = json.logs
      setLogs(logList)
    })
    .catch(err=>console.log(err))
  },[])
  return (
    <div className="history">
      <h1>Lịch Sử In</h1>
      <table>
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default History;
