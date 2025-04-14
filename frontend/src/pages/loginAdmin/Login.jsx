import React from "react";
import "./Login.scss";
import {useState } from "react"
import { Link , useNavigate} from "react-router-dom";
const LoginAdmin = () => {
  const navigate = useNavigate()
  const [err, setErr] = useState("")
  const [field, setField] = useState({
    email:"",
    passwd:""
  })
  const setFiledValue = ({target:{name , value}}) =>{
    setField(prev => ({
      ...prev,
      [name]:value
    }))
  }
  const handleLogin = e =>{
    e.preventDefault()
    fetch("http://localhost:5050/api/login/admin",{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(field)
    })
    .then(res => {
     if(res.status === 401){
        setErr("Email hoặc Mật khẩu không đúng vui lòng thử lại")
     }else{
        return res.json()
     }
    })
    .then(result => {
      localStorage.setItem('token',result.token)
      localStorage.setItem('isAuth','yes')
      localStorage.setItem('role','admin')
      navigate('/dashboard')
    })
    .catch(err=>{
      console.log(err)
    })
  }
  return (
    <div className="loginAdmin">
      <div className="card">
        <div className="leftCard">
          <h1>BKSmart</h1>
          <h2>
            Trang web in ấn đáng tin cậy của sinh viên Trường Đại Học Bách Khoa
            TPHCM
          </h2>
          <span>Nếu bạn là sinh viên</span>
          <Link to="/loginSV">
            <button>Student</button>
          </Link>
        </div>
        <div className="rightCard">
          <h1>Login</h1>
          <form onSubmit={handleLogin}>
            <input type="email" name="email" value={field.email} onChange={setFiledValue} placeholder="Email" />
            <input type="password" name="passwd" value={field.password} onChange={setFiledValue} placeholder="Password" />
            <small style={{color:'red'}}>{err}</small>
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginAdmin;
