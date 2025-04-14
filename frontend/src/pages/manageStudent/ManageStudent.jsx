import React from "react";
import "./ManageStudent.scss";
import { useNavigate } from "react-router-dom";

const ManageStudent = () => {
  const navigate = useNavigate();

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

  return (
    <div className="configuration-page">
      <header className="configuration-header">
        <h1>Configuration Page</h1>
        <div className="actions">
          <button
            className="return-to-dashboard-btn"
            onClick={() => navigate("/dashboard")}
          >
            Return to Dashboard
          </button>
          <button
            className="configure-default-pages-btn"
            onClick={() => alert("Configure default pages logic here")}
          >
            Configure Default Pages
          </button>
          <button
            className="configure-default-date-btn"
            onClick={() => alert("Configure default date logic here")}
          >
            Configure Default Date
          </button>
        </div>
      </header>

      <table>
        <thead>
          <tr>
            <th>Student</th>
            <th>MSSV</th>
            <th>Default Pages</th>
            <th>Default Date</th>
            <th>Printed Pages</th>
          </tr>
        </thead>
        <tbody>
          {fetchedStudentLogs.map((log) => (
            <tr key={log.id}>
              <td>{log.student}</td>
              <td>{log.mssv}</td>
              <td>{log.defPages}</td>
              <td>{log.defDate}</td>
              <td>{log.printedPages}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageStudent;
