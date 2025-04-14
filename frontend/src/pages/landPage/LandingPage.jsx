import React from "react";
import "./LandingPage.scss";
import PrintIcon from "@mui/icons-material/Print";
import PersonIcon from "@mui/icons-material/Person";

import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="header">
        <div className="logo-container">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/d/de/HCMUT_official_logo.png"
            alt="Logo Bách Khoa"
            className="logo"
          />
          <h1 className="site-title">BKSmart</h1>
        </div>
        <Link to="/loginSV" className="login-button">
          <PersonIcon /> Đăng Nhập
        </Link>
      </header>

      <section className="hero-section">
        <img
          src="https://images.unsplash.com/photo-1588829608082-df51eb07f6cf?q=80&w=1887&auto=format&fit=crop"
          alt="Hero Image"
          className="hero-image"
        />
        <div className="hero-text">
          <h1>"In ấn chất lượng, phục vụ tận tâm - Hỗ trợ sinh viên Bách Khoa!"</h1>
          <Link to="/loginSV" className="cta-button">
            Đăng Nhập Ngay
          </Link>
        </div>
      </section>

      <section className="services-section">
        <div className="service-card">
          <PrintIcon className="service-icon" />
          <h3>In ấn nhanh chóng</h3>
          <p>In ấn nhanh chóng với chất lượng cao.</p>
        </div>
        <div className="service-card">
          <PrintIcon className="service-icon" />
          <h3>Giá cả phù hợp</h3>
          <p>Dịch vụ giá cả phù hợp cho sinh viên.</p>
        </div>
        <div className="service-card">
          <PrintIcon className="service-icon" />
          <h3>Hỗ trợ tận tâm</h3>
          <p>Đội ngũ hỗ trợ tận tâm và chuyên nghiệp.</p>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-links">
          <Link to="/">Trang Chủ</Link>
          <Link to="/services">Dịch Vụ</Link>
          <Link to="/contact">Liên Hệ</Link>
        </div>
        <div className="footer-contact">
          <p>Email: contact@bkprint.vn</p>
          <p>Hotline: 0123-456-789</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
