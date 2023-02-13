import React from "react";
import "./Footer.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-top__icons">
          <FacebookIcon />
          <TwitterIcon />
          <InstagramIcon />
          <YouTubeIcon />
          <GoogleIcon />
        </div>
      </div>
      <div className="footer-bottom">
        <span className="footer-bottom__text">© 2020 Copyright: Languly</span>
      </div>
    </footer>
  );
}

export default Footer;
