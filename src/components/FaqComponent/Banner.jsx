import React from "react";
import "./Banner.css"
function Banner() {
  return (
    <>
    <div className="banner img">
      <img  className="desktop" alt="bannerdesk" src={`.././../../${process.env.PUBLIC_URL}/images/wonderlane-w1s5H_3Zn48-unsplash 1 (1).png`}></img>
                <img className="Mobile" alt="bannerMob" src={`.././../../${process.env.PUBLIC_URL}/images/MobileBanner.png`}  />
       
      
      <div className="bannerText">
      <p className="bannerTag">Dozee Faq</p>
        <h2 className="bannerHeading font-60">Frequently Asked Questions</h2>
        <p className="bannersubText font-20">Everything you need knowabout us,our services and the impact we made we create</p>
        </div>
      </div>
    </>
  );
}
export default Banner;
