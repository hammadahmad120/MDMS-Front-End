import React from "react";
import PropTypes from "prop-types";
import "./projects-header.scss";
import { ReactComponent as PlusIcon } from "../../../assets/icons/plus.svg";
import CommonDropdown from "../../shared/CommonDropdown/CommonDropdown";

const ProjectsHeader = (props) => {
  
  return (
    <div className="projects-header">
      <div className="title-pane d-flex justify-content-between flex-wrap">
        <h5 className="font-mont">
          Projects{" "}
        </h5>

        <div className="selection-state d-flex">
          <CommonDropdown
            options={[
              { value: "all", text: "All Projects" },
              { value: "my_projects", text: "My Projects" },
              { value: "shared_projects", text: "Shared Projects" },
            ]}
            onOptionChange={()=>{}}
          />
          <CommonDropdown
            options={[
              { value: "all", text: "Show All Statuses" },
              { value: "favorites", text: "Favorites" },
              { value: "in progress", text: "In Progress" },
              { value: "complete", text: "Completed" },
              { value: "archive", text: "Archieved" },
            ]}
            onOptionChange={()=>{}}
          />

          <button
           
            className="btn btn-primary"
            onClick={()=>{}}
          >
            <PlusIcon />
            New Project
          </button>
        </div>
      </div>
    </div>
  );
};
ProjectsHeader.propTypes = {
  projectsFilterChange: PropTypes.func.isRequired,
  statusFilterChange: PropTypes.func.isRequired,
  newProjectClick: PropTypes.func.isRequired,
};
export default ProjectsHeader;
