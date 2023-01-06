import { Link } from "react-router-dom";
import ProjectData from "../jsonData/ProjectData";

export const Projects = () => {
  return (
    <section id="projects" className="section projects">
      <h2 className="section__title">Projects</h2>
      <div className="projects__grid">
        {ProjectData.map((data, index) => {
          return (
            <div key={index} className="project">
              <h2 className="project__title">{data.Title}</h2>
              <h3 className="project__subject">{data.Subject}</h3>
              <p className="project__description">{data.Contents}</p>
              <ul className="project__stack">
                {data.Skills.map((skill, idx) => {
                  return (
                    <li className="project__stack-item" key={idx}>
                      {skill}
                    </li>
                  );
                })}
              </ul>
              <div
                className="project_img"
                style={{
                  backgroundImage: `url(${data.Image})`,
                }}
              />
              <div className="margin-top space--around">
                <a
                  href={`${data.URI}`}
                  aria-label="source code"
                  className="link link--icon"
                >
                  <i aria-hidden="true" className="fab fa-github"></i>
                </a>
                <Link to={`/project#${index}`}>
                  <span className="link link--icon">
                    <iconify-icon icon="material-symbols:chevron-right-rounded" />
                  </span>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      <Link to={"/project"}>
        <button className="btn btn--outline project_more_btn">{`<더보기>`}</button>
      </Link>
    </section>
  );
};
