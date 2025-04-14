import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./PrintingLogs.scss";

const PrintingLogs = () => {
  const [studentLogs, setStudentLogs] = useState([]);
  const [printerLogs, setPrinterLogs] = useState([]);
  const navigate = useNavigate();

  // Simulate fetching data (replace this with actual API calls)
  useEffect(() => {
    // Example static data for student logs
    const fetchedStudentLogs = [
      {
        id: 1,
        student: "John Doe",
        mssv: 2211620,
        defPages: 10,
        defDate: "2024-11-22",
        printedPages: "A0:1 A1:2 A3:4 A4:5",
      },
      {
        id: 2,
        student: "Jane Smith",
        mssv: 2211621,
        defPages: 15,
        defDate: "2024-11-21",
        printedPages: "A0:1 A1:2 A3:4 A4:5",
      },
      {
        id: 3,
        student: "Samuel Lee",
        mssv: 2211622,
        defPages: 5,
        defDate: "2024-11-20",
        printedPages: "A0:1 A1:2 A3:4 A4:5",
      },
    ];
    setStudentLogs(fetchedStudentLogs);

    // Example static data for printer logs
    const fetchedPrinterLogs = [
      {
        id: 1,
        printer: "Canon M10",
        printerID: "H660701",
        location: "H6-607",
        fileTypes: " PDF, PNG, JPEG",
        printedPages: "A0:1 A1:2 A3:4 A4:5",
        maintenance: "2024-11-21",
        status: "Active",
      },
      {
        id: 2,
        printer: "HP LaserJet",
        printerID: "H660701",
        location: "H6-607",
        fileTypes: " PDF, PNG, JPEG",
        printedPages: "A0:1 A1:2 A3:4 A4:5",
        maintenance: "2024-11-21",
        status: "Active",
      },
      {
        id: 3,
        printer: "Canon M10",
        printerID: "H660701",
        location: "H6-607",
        fileTypes: " PDF, PNG, JPEG",
        printedPages: "A0:1 A1:2 A3:4 A4:5",
        maintenance: "2024-11-20",
        status: "Active",
      },
    ];
    setPrinterLogs(fetchedPrinterLogs);
  }, []);

  return (
    <div className="printing-logs">
      <header className="printing-logs-header">
        <button onClick={() => navigate("/dashboard")}>
          Back to Dashboard
        </button>
        <h1>Printing Logs</h1>
      </header>

      {/* Printing Logs for Students */}
      <section className="logs-section">
        <h2>Student Printing Logs</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Student</th>
              <th>MSSV</th>
              <th>Default Pages</th>
              <th>Default Date</th>
              <th>Printed Pages</th>
            </tr>
          </thead>
          <tbody>
            {studentLogs.length > 0 ? (
              studentLogs.map((log) => (
                <tr key={log.id}>
                  <td>{log.id}</td>
                  <td>{log.student}</td>
                  <td>{log.mssv}</td>
                  <td>{log.defPages}</td>
                  <td>{log.defDate}</td>
                  <td>{log.printedPages}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No student logs available.</td>
              </tr>
            )}
          </tbody>
        </table>
      </section>

      {/* Printing Logs for Printers */}
      <section className="logs-section">
        <h2>Printer Printing Logs</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Máy In</th>
              <th>Mã Số Máy In</th>
              <th>Vị trí</th>
              <th>Loại File</th>
              <th>Printed Pages</th>
              <th>Thời hạn bảo trì</th>
              <th>Trạng thái</th>
            </tr>
          </thead>
          <tbody>
            {printerLogs.length > 0 ? (
              printerLogs.map((log) => (
                <tr key={log.id}>
                  <td>{log.id}</td>
                  <td>{log.printer}</td>
                  <td>{log.printerID}</td>
                  <td>{log.location}</td>
                  <td>{log.fileTypes}</td>
                  <td>{log.printedPages}</td>
                  <td>{log.maintenance}</td>
                  <td>{log.status}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No printer logs available.</td>
              </tr>
            )}
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
  );
};

export default PrintingLogs;
