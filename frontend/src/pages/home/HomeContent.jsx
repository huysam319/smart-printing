import { useState, useEffect } from "react";
import PrintIcon from "@mui/icons-material/Print";
import CircleIcon from "@mui/icons-material/Circle";
import { useNavigate } from "react-router-dom";
import "./Home.scss";
function HomeContent() {
  const [logs, setLogs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5050/api/logs/student", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((json) => {
        const logList = json.logs.reverse().slice(0, 5);
        setLogs(logList);
      })
      .catch((err) => console.log(err));
  }, []);
  const navigate = useNavigate();
  return (
    <div>
      {logs.map((log, index) => {
        return (
          <div className="homePrinter" key={index}>
            <div className="homePrinterInfo">
              <div className="homePrinterInfoLogo">
                <PrintIcon style={{ fontSize: "50px" }} />
                <span>Máy in</span>
              </div>
              <span>{log.Printer.buildingName} - {log.Printer.roomNumber}</span>
            </div>

            <hr />

            <div className="homePrinterStatus">
              <div className="homePrinterStatusIcon">
                <h3>Máy in</h3>
                <div
                  className="homePrinterStatusIconProfile"
                  onClick={() => navigate("/history")}
                >
                  <PrintIcon />
                  <span> {log.Printer.brand} {log.Printer.model} </span>
                </div>
              </div>

              <div className="homeStatus">
                <h3>Trạng thái</h3>
                <div className="homeStatusIcon">
                  <CircleIcon />
                  <span>{log.status == "Wait" ? "Đang chờ để in" : "Tài liệu đã sẵn sàng"}</span>
                </div>
              </div>

              <div className="homeStatus">
                <h3>Tình trạng</h3>
                <div className="homeStatusIcon">
                  <CircleIcon />
                  <span>{log.Printer.enable ? "Enable" : "Disable"}</span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default HomeContent;
