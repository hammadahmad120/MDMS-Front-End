import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import classNames from "classnames/bind";
import "./ProjectsSidebar.scss";
import { logo, NotificationIcon } from "../../../assets/icons";
import { ProjectsIcon, ZerodocsSpecIcon, ArrowIcon } from "../projects-svgs";
import Spinner from "../../shared/Spinner/Spinner";
import { userLogout } from "../../../services/authServices";

const ProjectsSidebar = ({ user, isOpen = false }) => {
  const [toggle, setToggle] = useState(false);
  const [isLogoutInProgress, setIsLogoutInProgress] = useState(false);

  const onLogoutClick = (e) => {
    e.preventDefault();
    setIsLogoutInProgress(true);
    userLogout("/login");
  };

  return (
    <div className="projects-sidenavbar sidenavbar">
      <button
        onClick={() => setToggle(!toggle)}
        className={classNames({
          "toggle-nav": true,
          open: toggle,
        })}
        type="button"
      >
        <div id="nav-icon2">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
      <div
        className={classNames({
          "side-nav-pane bg-whiteBlue": true,
          openNav: toggle,
        })}
      >
        <div className="top-side-nav">
          <Link to="/projects">
            <img alt="Logo" src={logo} role="button" />
          </Link>

          <ul className="nav flex-column vertical-nav">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/projects"
                activeStyle={{ color: "#00adee" }}
              >
                <ProjectsIcon />
                Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/projects"
                activeStyle={{ color: "#00adee" }}
              >
                <ZerodocsSpecIcon />
                XYZ
              </NavLink>
            </li>
            <li className="nav-item">
              <div
                className="nav-link notfication-badge anchor-button"
                role="button"
                onClick={(e) => {
                  e.stopPropagation();
                  
                }}
              >
                <NotificationIcon />
                Notifications
              </div>
            </li>
          </ul>
        </div>
        <div className="bottom-side-nav">
          <div className="user-profile">
            <div className="media align-items-center">
              <span className="user-profile-icon">{`${user.first_name[0]}${user.last_name[0]}`}</span>
              <div className="media-body d-flex justify-content-between">
                <p className="user-name my-0 font-mont">{`${user.first_name} ${user.last_name}`}</p>
                <a
                  data-toggle="collapse"
                  href="#collapseExample"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  <ArrowIcon />
                </a>
              </div>
            </div>

            <div
              className={`collapse ${isOpen ? "show" : ""}`}
              id="collapseExample"
            >
              <div className="collapse-content">
                <ul>
                  <li>
                    <NavLink
                      to="/projects"
                      className="text-smaller"
                      activeStyle={{ color: "#00adee" }}
                    >
                      abc
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/projects"
                      className="text-smaller"
                      activeStyle={{ color: "#00adee" }}
                    >
                      xyz
                    </NavLink>
                  </li>
                  <li>
                    {isLogoutInProgress ? (
                      <Spinner isSmall={true} />
                    ) : (
                      <div
                        role="button"
                        className="text-smaller anchor-button"
                        onClick={onLogoutClick}
                      >
                        Logout
                      </div>
                    )}
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
        
      </div>
      
    </div>
  );
};

export default ProjectsSidebar;
