import "./AdminPrinterInfo.scss";
import SettingsIcon from "@mui/icons-material/Settings";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
function PrinterLogsCard(){
  const [logs,setLogs] = useState([])
  const {id} = useParams()
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
      const logList = json.logs.filter(log => log.printerId == id)
      setLogs(logList)
    })
    .catch(err=>console.log(err))
  },[])
  return(
    <div className="printerInfoCard">
    <div className="printerInfoCardHeader">
      <SettingsIcon />
      <h1>Printer Printing Logs</h1>
    </div>
    <hr />
    <div className="printerInfoCardBody">
    <section className="logs-section">
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
  </section>

  <footer className="printing-logs-footer">
    <p>
      Printing logs are updated regularly. Please check for recent
      activities.
    </p>
  </footer>
    </div>
  </div>
  )
}
export default PrinterLogsCard