import "./AdminPrinterInfo.scss";
import PrintIcon from "@mui/icons-material/Print";
import CircleIcon from "@mui/icons-material/Circle";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
function PrinterHeaderCard(){
  const [printer,setPrinter] = useState({
    printerId: 0,
    model: "",
    brand: "",
    description: "",
    enable: true,
    campusName: "",
    buildingName: "",
    roomNumber: 0,
  })
  const {id} = useParams()
  useEffect(()=>{
    fetch(`http://localhost:5050/api/printers/${id}`,{
      method:'GET',
      headers:{
        'Content-Type':'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
    })
    .then(res=>res.json())
    .then(json=>{
      const printerInfo = json.printer
      setPrinter({
        printerId: printerInfo.printerId,
        model: printerInfo.model,
        brand: printerInfo.brand,
        description: printerInfo.description,
        enable: printerInfo.enable,
        campusName: printerInfo.campusName,
        buildingName: printerInfo.buildingName,
        roomNumber: printerInfo.roomNumber,
      })
    })
    .catch(err=>{
      console.log(err)
    })
  })
  return(
    <div className="printerReady">
    <PrintIcon />
    <div className="printerName">
      <h1>{printer.brand} {printer.model}</h1>
      <div className="printerStatus">
        <CircleIcon />
        <span>Sẵn sàng</span>
      </div>
    </div>
  </div> 
  )
}
export default PrinterHeaderCard