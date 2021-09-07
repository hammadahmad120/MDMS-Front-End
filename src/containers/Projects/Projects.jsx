import React, { Component } from "react";
import "./Projects.scss";
import ProjectsSidebar from "../../components/projects/ProjectsSidebar/ProjectsSidebar";
import ProjectsHeader from "../../components/projects/ProjectsHeader/ProjectsHeader";
import NewProjectTile from "../../components/projects/NewProjectTile/NewProjectTile";
import ProjectTile from "../../components/projects/ProjectTile/ProjectTile";
import Spinner from "../../components/shared/Spinner/Spinner";

import {
  getProjects,
} from "../../services/projectsService";

class Projects extends Component {
  state = {
    projects: [],
    haveProjects: true,
    isLoading: true,
  };

  componentDidMount() {
    getProjects()
      .then((res) => {
        if (res.data && res.data.status === 1 && res.data.data.length) {
          this.setState({ projects: res.data.data, isLoading: false });
        } else {
          this.setState({ haveProjects: false, isLoading: false });
        }
      })
      .catch((err) => {
        this.setState({ isLoading: false });
      });
  }


  render() {
    
    const {
      projects,
      haveProjects,
      isLoading,
    } = this.state;
    return (
      <div className="project-home-component">
        <div className="project-home-pane">
          <ProjectsSidebar user={this.props.user} isOpen />
          <div className="project-content-pane">
            <ProjectsHeader />
            {isLoading ? (
              <Spinner isCenter={true} />
            ) : haveProjects ? (
              <div className="row">
                {projects.map((project) => (
                  <div
                    className={`col-lg-4`}
                    key={`project_${project.project_id}`}
                  >
                    <ProjectTile
                      project={project}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <NewProjectTile newProjectClick={()=>{}} />
            )}
          </div>
        </div>

      </div>
    );
  }
}

export default Projects;
