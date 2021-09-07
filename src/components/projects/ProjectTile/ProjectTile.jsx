import React from "react";
import "./project-tile.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazyload";

import { Dots } from "../../../assets/icons";
import { FavoriteYellowIcon } from "../projects-svgs";

const ProjectTile = ({
  project,
}) => {

  
  const ProjectDropDown = ({ styles }) => {
    return (
      <div className="dropdown dots-dropdown">
        <div
          role="button"
          className="dots-btn anchor-button"
          style={styles}
          onClick={(e) => {
            e.stopPropagation();
          }}
          
        >
          <img src={Dots} alt="dots" />
        </div>
        
      </div>
    );
  };

  return (
    <div
      className="project-tile-component card"
    >
         <ProjectDropDown styles={{}} />
          <Link to="/projects">
            <LazyLoad height={235} once>
              <img
                className="card-img-top"
                src={project.cover_img_url}
                alt="project cover"
              />
            </LazyLoad>
          </Link>
          <div className="card-body">
            <div className="project-card-bottom">
              <div className="row align-items-center">
                    <div className="col-sm-9">
                      <div className="project-title-box d-flex">
                        <p
                          className="my-0 project-title"
                          data-place="top"
                          data-tip={project.name}
                        >
                          {project.name}
                        </p>
                        {project.status !== "archive" && (
                          <div
                            role="button"
                            className="fav-icon anchor-button"
                            data-place="top"
                            data-tip={
                              project.is_favorite
                                ? "Remove from favorite"
                                : "Add as favorite"
                            }
                            onClick={(e) => {
                              e.stopPropagation();
                            }}
                          >
                            <FavoriteYellowIcon /> 
                          </div>
                        )}
                      </div>
                      <span className="text-greyColor2 project-subtitle">
                        {`${project.specs_count} Specs`}
                      </span>
                    </div>
                    <div className="col-sm-3 d-flex justify-content-end align-items-center">
                     
                        <span
                          className={classNames({
                            btn: true,
                            "btn-sm": true,
                            "btn-inprogress": project.status === "in progress",
                            "btn-complete": project.status === "complete",
                            "btn-archive": project.status === "archive",
                          })}
                        >
                          {project.status}
                        </span>
                    </div>
              </div>
            </div>
          </div>
    </div>
  );
};

export default ProjectTile;
