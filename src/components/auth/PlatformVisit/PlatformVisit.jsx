import React from "react";
import "./platform-visit.scss";
import tour from "../../../assets/images/take-a-tour.gif";

const PlatformVisit = ({ heading, subHeading, type }) => {
  return (
    <div className="platform-visit-comp">
      <div className="d-flex flex-column flex-wrap platform-container">
        <h5 className="font-mont platform-heading">{heading}</h5>
        <span className="text-greyColor2 platform-subheading">
          {subHeading}
        </span>

        <div
          className="mt-4"
          style={type === "signup" ? { margin: "-10%" } : {}}
        >
          
            <img src={tour} alt="Loading..." className="site-tour-img" />
          
        </div>
      </div>
      {/* {type === "signup" && (
        <img src={TakeTour} alt="Loading..." height="480px" />
      )} */}
    </div>
  );
};

export default PlatformVisit;
