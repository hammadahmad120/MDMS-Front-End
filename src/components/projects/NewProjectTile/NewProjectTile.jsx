import React from "react";
import PropTypes from "prop-types";
import "./new-project-tile.scss";

const NewProjectTile = ({ newProjectClick }) => {
  return (
    <div className="new-project-tile">
      <div className="col-lg-4">
        <div className="card new-project-card align-items-center justify-content-center">
          <div className="card-body text-center">
            <h4 className="card-title font-mont">Add Project</h4>
            <p className="card-subtitle primary-text font-mont">
              Create your first project
            </p>
            <button className="btn btn-primary" onClick={newProjectClick}>
              New Project
            </button>
          </div>
        </div>
      </div>
      <div className="col-lg-4"></div>
      <div className="col-lg-4"></div>
    </div>
  );
};

NewProjectTile.propTypes = {
  newProjectClick: PropTypes.func.isRequired,
};
export default NewProjectTile;
