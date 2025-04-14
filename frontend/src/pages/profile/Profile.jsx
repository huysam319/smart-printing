import React from "react";
import "./Profile.scss";
import AccountCircleIcon from "@mui/icons-material/AccountCircle"; // Nhập biểu tượng
import InfoIcon from "@mui/icons-material/Info"; // Nhập biểu tượng chữ i
import {useState, useEffect} from "react"
const Profile = () => {
  const [student,setStudent] = useState({
    studentId: "",
    name: "",
    faculity: "",
    major: "",
    email: "",
    pageBalance: 0,
  })
  useEffect(() =>{
    fetch("http://localhost:5050/api/students/",{
      method:'GET',
        headers:{
          'Content-Type':'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
    })
    .then(res => res.json())
    .then(json =>{
      const studentInfo = json.student
      setStudent({
        studentId: studentInfo.studentId,
        name: studentInfo.name,
        faculity: studentInfo.faculity,
        major: studentInfo.major,
        email: studentInfo.email,
        pageBalance: studentInfo.pageBalance,
      })
    })
    .catch(err =>{
      console.log(err)
    })
  },[])
  return (
    <div className="my-account">
      <h1>Tài Khoản Của Tôi</h1>

      <div className="table-container">
        <h2>
          <AccountCircleIcon style={{ marginRight: "8px", fontSize: "30px" }} />{" "}
          {/* Thêm biểu tượng */}
          <i className="fas fa-user-graduate"></i> Thông Tin Sinh Viên
        </h2>
        <table>
          <tbody>
            <tr>
              <td>
                <div> <strong>Mã Số sinh viên :</strong> {student.studentId}</div>
                <div><strong>Họ và Tên sinh viên :</strong> {student.name}</div>
                <div><strong>Khoa :</strong> {student.faculity}</div>
                <div><strong>Chuyên ngành :</strong> {student.major}</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* <div className="table-container">
        <h2>
          <InfoIcon style={{ marginRight: "8px", fontSize: "30px" }} />{" "}
          Thông Tin Sử Dụng{" "}
        </h2>
        <table>
          <tbody>
            <tr>
              <td>
                <div><strong>Trang in :</strong> {student.pageBalance}</div>
                <div><strong>Thời Gian sử dụng :</strong> 512</div>
                <div><strong>Trang mặc định: </strong> 12</div>
                <div><strong>Ngày: </strong>12/10/2024</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div> */}
    </div>
  );
};

export default Profile;
