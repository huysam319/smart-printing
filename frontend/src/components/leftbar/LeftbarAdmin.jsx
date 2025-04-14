import React from "react";
import { useNavigate } from "react-router-dom";
import "./Leftbar.scss";

import HomeIcon from "@mui/icons-material/Home";
import PrintIcon from "@mui/icons-material/Print";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import LogoutIcon from "@mui/icons-material/Logout";

const LeftbarAdmin = ({ isHidden }) => {
  const navigate = useNavigate();
  const handleLogout = () =>{
    localStorage.removeItem('isAuth')
    localStorage.removeItem('token')
    window.location.reload();
  }
  return (
    <div className={`leftBar ${isHidden ? "hidden" : "visible"}`}>
      <div className="leftBarContainer">
        <div className="leftBarMenu">
          <button className="leftBarItem" onClick={() => navigate("/dashboard")}>
            <HomeIcon />
            <span>Bảng điều khiển</span>
          </button>
          <button className="leftBarItem" onClick={() => navigate("/printer-management")}>
            <PrintIcon />
            <span>Máy in</span>
          </button>
          <button className="leftBarItem" onClick={() => navigate("/print-require")}>
            <ManageSearchIcon />
            <span>Yêu cầu in</span>
          </button>
          {/* <button className="leftBarItem" onClick={() => navigate("/profile")}>
            <AccountCircleIcon />
            <span>Trang cá nhân</span>
          </button> */}
          <button className="leftBarItem" onClick={handleLogout}>
            <LogoutIcon />
            <span>Đăng xuất</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeftbarAdmin;
