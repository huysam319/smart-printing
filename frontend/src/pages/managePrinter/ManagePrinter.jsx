import React from "react";
import "./ManagePrinter.scss";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ManagePrinter = () => {
  const [printers, setPrinters] = useState([]);
  const [status, setStatus] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:5050/api/printers/all", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((json) => {
        const printerList = json.printers;
        setPrinters(printerList);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [status]);

  const handleStatusChange = (id) => {
    const printer = printers.find((p) => p.printerId == id);
    const enable = !printer.enable;
    fetch(`http://localhost:5050/api/printers/${id}}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ enable: enable }),
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
      })
      .then(() => {
        setStatus(!status);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handlePrinterInfo = (id) => {
    navigate(`/admin-printerInfo/${id}`);
  };

  const handleAddPrinter = () => {
    navigate("/addPrinter");
  };

  const handleReturnToDashboard = () => {
    navigate("/dashboard"); // Redirect to the dashboard page
  };

  const handleConfigureFileTypes = () => {
    navigate("/configure-file-types"); // Redirect to the Configure File Types page
  };

  return (
    <div className="printer-management-page">
      <header className="printer-management-header">
        <h1>Printer Management</h1>
        <div className="actions">
          <button
            onClick={handleReturnToDashboard}
            className="return-to-dashboard-btn"
          >
            Return to Dashboard
          </button>

          {/* <button
            onClick={handleConfigureFileTypes}
            className="configure-file-types-btn"
          >
            Configure File Types
          </button> */}

          <button onClick={handleAddPrinter} className="add-printer-btn">
            Add Printer
          </button>
        </div>
      </header>

      {/* Printer Table */}
      <section className="printer-list">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Printer Brand</th>
              <th>Printer Model</th>
              <th>Location</th>
              {/* <th>File Types</th> */}
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {printers.length > 0 ? (
              printers.map((printer, index) => (
                <tr key={index}>
                  <td>{printer.printerId}</td>
                  <td>{printer.brand}</td>
                  <td>{printer.model}</td>
                  <td>
                    {printer.buildingName}-{printer.roomNumber}
                  </td>
                  {/* <td>PDF</td> */}
                  <td>{printer.enable ? "Enable" : "Disable"}</td>
                  <td>
                    <button
                      onClick={() => handleStatusChange(printer.printerId)}
                      className="status-btn"
                    >
                      {printer.enable ? "Disable" : "Enable"}
                    </button>
                    <button
                      onClick={() => handlePrinterInfo(printer.printerId)}
                      className="info-btn"
                    >
                      Info
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="9">No printers available.</td>
              </tr>
            )}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default ManagePrinter;
