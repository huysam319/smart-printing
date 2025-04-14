import React, { useEffect, useState } from "react";
import PrintIcon from "@mui/icons-material/Print"; // Nhập biểu tượng máy in
import "./Printer.scss";
import { useNavigate } from "react-router-dom";


const Printer = () => {
  const [printers, setPrinters] = useState([])
  const navigate = useNavigate()
  useEffect(()=>{
    fetch("http://localhost:5050/api/printers/all",{
      method:'GET',
      headers:{
        'Content-Type':'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
    })
    .then(res=>res.json())
    .then(json =>{
      const printerList = json.printers.filter( printer => printer.enable == true)
      setPrinters(printerList)
    })
    .catch(err=>{
      console.log(err)
    })
  },[])
  return (
    <div className="printer">
      <h1>Danh Sách Máy In</h1>
      <div className="printer-list">
        {printers.map((printer, index) => (
          <div key={index} className="printer-item">
            <PrintIcon className="printer-icon" /> {/* Biểu tượng máy in */}
            <span className="printer-name">{printer.brand}</span>
            <span className="printer-name">{printer.model}</span>
            <span className="printer-name">{printer.buildingName}-{printer.roomNumber}</span>
            <button style={{backgroundColor:'green', width:'60px', height:'30px', color:'white',fontWeight:'bold', borderRadius:'10px', cursor:'pointer'}} onClick={()=>navigate(`/printerInfo/${printer.printerId}`)}>Chọn</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Printer;
