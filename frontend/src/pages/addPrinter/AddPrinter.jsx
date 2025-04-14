import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddPrinter.scss";

const AddPrinter = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    model:"",
    brand:"",
    description:"",
    campus:"",
    building:"",
    room:0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "enable" ? value === "true" : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5050/api/printers",{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body:JSON.stringify(formData)
    })
    .then(()=>navigate("/printer-management"))
    .catch(err=>{
      console.log(err)
    })
  };

  const handleCancel = () => {
    navigate("/printer-management"); 
  };

  return (
    <div className="add-printer-page">
      <header className="add-printer-header">
        <h1>Add New Printer</h1>
        <button onClick={handleCancel} className="cancel-btn">
          Cancel
        </button>
      </header>

      <form onSubmit={handleSubmit} className="add-printer-form">
        <div className="form-group">
          <label htmlFor="brand">Printer Brand</label>
          <input
            type="text"
            id="brand"
            name="brand"
            onChange={handleChange}
            required
            placeholder="Nhập hãng của máy in..."
          />
        </div>

        <div className="form-group">
          <label htmlFor="model">Printer Model</label>
          <input
            type="text"
            id="model"
            name="model"
            onChange={handleChange}
            required
            placeholder="Nhập model của máy in..."
          />
        </div>

        <div className="form-group">
          <label htmlFor="location">Mô tả máy in</label>
          <input
            type="text"
            id="location"
            name="description"
            onChange={handleChange}
            required
            placeholder="Nhập mô tả cho máy in..."
          />
        </div>

        <div className="form-group">
          <label htmlFor="location">Tên campus</label>
          <input
            type="text"
            id="location"
            name="campus"
            onChange={handleChange}
            required
            placeholder="Nhập tên toà đặt máy in..."
          />
        </div>

        <div className="form-group">
          <label htmlFor="location">Tên toà</label>
          <input
            type="text"
            id="location"
            name="building"
            onChange={handleChange}
            required
            placeholder="Nhập tên toà đặt máy in..."
          />
        </div>

        <div className="form-group">
          <label htmlFor="location">Số phòng</label>
          <input
            type="number"
            id="location"
            name="room"
            onChange={handleChange}
            required
            placeholder="Nhập số phòng đặt máy in..."
          />
        </div>


        <button type="submit" className="submit-btn">
          Add Printer
        </button>
      </form>
    </div>
  );
};

export default AddPrinter;
