import React from "react";
import "./Navbar.scss";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ toggleLeftbar }) => {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <div className="leftNavbar">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/d/de/HCMUT_official_logo.png"
          alt=""
        />
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>BKSmart</span>
        </Link>
        <button
          onClick={toggleLeftbar}
          style={{ background: "none", border: "none", cursor: "pointer" }}
        >
          <MenuIcon style={{ fontSize: "50px" }} />
        </button>
      </div>

      <div className="rightNavbar">
        {/* <AccountCircleIcon
          className="iconNavbar"
          style={{ fontSize: "50px" }}
          onClick={() => navigate("/profile")}
        /> */}
        <div className="userNavbar" onClick={() => navigate("/profile")}>
          <img
            src="https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?cs=srgb&dl=pexels-soldiervip-1391498.jpg&fm=jpg&_gl=1*1yr2gyq*_ga*MTY2MTU1MjMzMi4xNzMyMjA1NjQw*_ga_8JE65Q40S6*MTczMjIwOTk2Mi4yLjEuMTczMjIxMDAwNi4wLjAuMA.."
            alt=""
          />
          <span>Username</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
