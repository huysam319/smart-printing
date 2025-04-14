import Navbar from "../../components/navbar/Navbar";
import LeftbarAdmin from "../../components/leftbar/LeftbarAdmin";
import { useState } from "react";
const AdminLayout = ({ children }) => {
  const [isLeftbarVisible, setIsLeftbarVisible] = useState(true);

  const toggleLeftbar = () => {
    setIsLeftbarVisible((prev) => !prev);
  };

  return (
    <div>
      <Navbar toggleLeftbar={toggleLeftbar} />
      <div style={{ display: "flex" }}>
        <LeftbarAdmin isHidden={!isLeftbarVisible} />
        <div
          style={{
            flex: isLeftbarVisible ? 8 : 1,
            width: isLeftbarVisible ? "auto" : "100%",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
export default AdminLayout;
