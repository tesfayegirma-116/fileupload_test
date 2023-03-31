import React, { useState, useEffect } from "react";
import { Space, Layout, Typography } from "antd";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const { Header } = Layout;
  const [background, setBackground] = useState("transparent");

  return (
    <>
      <Header
        style={{
            position: "fixed",
            zIndex: 1,
            width: "100%",
            backdropFilter: "blur(10px)",
            backgroundColor: background,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <span
            style={{
              fontSize: "30px",
              fontWeight: "bold",
              fontFamily: "poppins",
            }}
          >
            Tesfaye Girma
          </span>
        </div>
        <div style={{ 
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
        }}>
        <span style={{ fontSize: "12px", fontFamily: "poppins" }}>
          email: tesfayegirma360@gmail.com
          <Typography style={{ fontSize: "12px", fontFamily: "poppins" }}>
            phone: +251 90 410 2123
          </Typography>
        </span>
        </div>
      </Header>
    </>
  );
};

export default Navbar;
