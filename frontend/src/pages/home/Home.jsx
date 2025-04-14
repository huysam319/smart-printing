import "./Home.scss";
import HomeContent from "./HomeContent";
import { useEffect, useState } from "react";
const Home = () => {
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
    <div className="home">
      <div className="homeHeader">
        <h1>Welcome to BKSmart</h1>
        <div className="homeUser">
          <div className="homeUserInfo">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/d/de/HCMUT_official_logo.png"
              alt=""
            />
            <span>{student.name}</span>
          </div>
          <span>{student.faculity}</span>
        </div>
      </div>
      <HomeContent/>
    </div>
  );
};

export default Home;
