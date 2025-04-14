import "./AdminPrinterInfo.scss";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { useNavigate } from "react-router-dom";
import PrinterInfoCard from "./PrinterInfoCard";
import PrinterLogsCard from "./PrinterLogsCard"
import PrinterHeaderCard from "./PrinterHeaderCard";
const AdminPrinterInfo = () => {
  const navigate = useNavigate();
  return (
    <div className="adminprinterInfo">
      <div className="printerInfoHeader">
        <KeyboardReturnIcon
          className="returnIcon"
          onClick={() => navigate("/printer-management")}
        />
        <PrinterHeaderCard/>
        <h1 className="BKSmart">BKSmart</h1>
      </div>

      
      <div className="printerInfoBody">
          <PrinterInfoCard/>
          <PrinterLogsCard/>
      </div>
    </div>
  );
};

export default AdminPrinterInfo;
