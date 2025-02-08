import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../styles/Footers.css";

function Footers() {
  return (
    <div className="footers">
      <div className="socialMedia">
        <InstagramIcon />
        <FacebookIcon />
        <XIcon />
        <LinkedInIcon />
      </div>
      <p>&copy; 2024 El Bandito Pizzeria. All Rights Reserved.</p>
    </div>
  );
}

export default Footers;
