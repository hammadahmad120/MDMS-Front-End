import { AuthAxios } from "./axiosConfig";

const dummyProjects = [
  {project_id: 143, project_type: 1, name: "45 Building - Master", specs_count: 315,cover_img_url: "https://admin.zerodocs.net/images/projects/1621066039.jpg",
  is_favorite: false,
  is_owner: true,
  owner_email: "test@test.com.com",
},
{project_id: 148, project_type: 1, name: "50% release", specs_count: 307, status: "in progress",cover_img_url: "https://admin.zerodocs.net/images/projects/1621066039.jpg",
is_favorite: false,
is_owner: true,
owner_email: "test@test.com.com",},
{project_id: 151, project_type: 1, name: "Jump Project 234", specs_count: 309, status: "complete",cover_img_url: "https://admin.zerodocs.net/images/projects/1621066039.jpg",
is_favorite: false,
is_owner: true,
owner_email: "test@test.com.com",},
{project_id: 162, project_type: 1, name: "45 Building - 75% release", specs_count: 310,cover_img_url: "https://admin.zerodocs.net/images/projects/1621066039.jpg",
is_favorite: false,
is_owner: true,
owner_email: "test@test.com.com",},
{project_id: 167, project_type: 1, name: "test 3", specs_count: 28, status: "in progress",cover_img_url: "https://admin.zerodocs.net/images/projects/1621066039.jpg",
is_favorite: false,
is_owner: true,
owner_email: "test@test.com.com",}

]

export function getProjects() {
  //return AuthAxios.get("/projects");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
     
        resolve({data:{ status:1, data:dummyProjects}});
      
    }, 2000);
  });
}
export function addNewProject(project) {
  const projectData = new FormData();
  projectData.append("name", project.project_name);
  projectData.append("project_type", +project.project_type);
  projectData.append("image", project.img_file);
  return AuthAxios.post("/add-project", projectData);
}


