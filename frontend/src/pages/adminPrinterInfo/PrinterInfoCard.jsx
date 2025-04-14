import "./AdminPrinterInfo.scss";
import CircleIcon from "@mui/icons-material/Circle";
import SettingsIcon from "@mui/icons-material/Settings";
import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
function PrinterInfoCard() {
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
  return (
    <div className="printerInfoCard">
      <div className="printerInfoCardHeader">
        <SettingsIcon />
        <h1>Thông tin máy in</h1>
      </div>
      <hr />
      <div className="printerInfoCardBody">
        <div>Printer ID : {printer.printerId}</div>
        <div>Brand : {printer.brand}</div>
        <div>Model : {printer.model}</div>
        <div style={{ display: "flex", alignItems: "center" }}>
          Status :
          <CircleIcon
            style={{ fontSize: 20, color: "green", margin: "0 4px" }}
          />
          {printer.enable ? "Enable" : "Disable"}
        </div>
        <div>
          Location: {printer.buildingName} - {printer.roomNumber}
        </div>
        <div>Description: {printer.description}</div>
      </div>
    </div>
  );
}
export default PrinterInfoCard;
