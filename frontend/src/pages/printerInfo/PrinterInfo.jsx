import "./PrinterInfo.scss";
import PrintIcon from "@mui/icons-material/Print";
import CircleIcon from "@mui/icons-material/Circle";
import SettingsIcon from "@mui/icons-material/Settings";
// import InfoIcon from "@mui/icons-material/Info";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";

import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const PrinterInfo = () => {
  const navigate = useNavigate();
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
    <div className="printerInfo">
      <div className="printerInfoHeader">
        <KeyboardReturnIcon
          className="returnIcon"
          onClick={() => navigate("/printer")}
        />
        <div className="printerReady" onClick={() => navigate(`/printing/${id}`)}>
          <PrintIcon />
          <div className="printerName">
            <h2>{printer.brand} {printer.model}</h2>
            <div className="printerStatus">
              <CircleIcon />
              <span>Sẵn sàng</span>
            </div>
          </div>
        </div>
        <h1 className="BKSmart">BKSmart</h1>
      </div>
      <div className="printerInfoBody">
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
            <div>Location: {printer.buildingName} - {printer.roomNumber}</div>
            <div>Description: {printer.description}</div>
          </div>
        </div>
        {/* <div className="printerInfoCard">
          <div className="printerInfoCardHeader">
            <InfoIcon />
            <h1>Thông tin sử dụng</h1>
          </div>
          <hr />
          <div className="printerInfoCardBody">
            <div>Thời gian in: 123</div>
            <div>Các loại tệp được phép sử dụng: Word, PDF, PNG...</div>
            <div>Trang A4: 30</div>
            <div>Trang A3: 30</div>
            <div>Trang A2: 30</div>
            <div>Trang A1: 30</div>
            <div>Trang A0: 30</div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default PrinterInfo;
