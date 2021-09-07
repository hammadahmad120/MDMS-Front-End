import React from "react";
import "./auth-header.scss";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Check2Icon, logo } from "../../../assets/icons";

const AuthHeader = ({
  heading,
  subHeading,
  toUrl,
  urlText,
  alertMsg = null,
}) => {
  return (
    <div className="auth-header-component">
      <img
        alt="logo"
        className="brand-name"
        src={logo}
        onClick={(e) => {
          e.stopPropagation();
        }}
        role="button"
        width="226"
        height="56"
      />
      {alertMsg && ( //when user comes to login page and we want to show some message
        <div className="mb-4" style={{ margin: "-16px" }}>
          <>
            <Check2Icon
              style={{ width: "16px", height: "16px", marginLeft: "16px" }}
            />{" "}
            <small className="text-greenColor font-mont font-bold ml-1">
              {alertMsg}
            </small>
          </>
        </div>
      )}
      <h4 className="text-GreyColor heading-4 font-mont">{heading}</h4>
      <small className="text-lightBlueColor2">
        {subHeading} {toUrl && <Link to="/login">{urlText}</Link>}
      </small>
    </div>
  );
};

AuthHeader.propTypes = {
  heading: PropTypes.string.isRequired,
  subHeading: PropTypes.string.isRequired,
};
export default AuthHeader;
