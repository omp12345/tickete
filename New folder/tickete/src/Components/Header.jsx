import React from "react";
import hero from "../assets/Logo.png";
import link from "../assets/Link.png";
import frame from "../assets/Frame.png";

function Header() {
  return (
    <>
      <div className="header-main">
        <div className="header-box">
          <div className="header-item">
            <div className="header-img">
              <div className="hero-img-container">
               
                <img src={hero} alt="" />
              </div>
              <div>
                <img src={link} alt="" />
              </div>
              <div>
                <img src={frame} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="header-txt">
          <div className="header-word">Holding your tickets for 30:00</div>
        </div>
      </div>
    </>
  );
}

export default Header;
