import "./detailProject.css";
import ProjectData from "../jsonData/ProjectData";
import { ProjectCard } from "../componant/ProjectCard";
export const DetailProject = () => {
  return (
    <>
      <h1 className="title ">Project</h1>
      <div className="detail__project">
        {ProjectData.map((data, idx) => {
          return (
            <div key={idx} id={idx} className="project__section">
              <ProjectCard data={data} />
            </div>
          );
        })}
      </div>
    </>
  );
};
