import { useState } from 'react';
import { useEffect } from 'react';
import * as api from '../api';

export const Projects = () => {
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    api.githubApi(setRepos);
  }, []);

  return (
    <section id="projects" className="section projects">
      <h2 className="section__title">Projects</h2>
      <div className="projects__grid">
        {repos.length !== 0 &&
          repos.map((data, index) => {
            console.log(data);
            return (
              <div key={index}>
                <div className="project">
                  <h3>{data.name}</h3>
                  <p className="project__description">
                    Ipsum accusamus ea excepturi aliquid eligendi amet.
                    Explicabo sapiente debitis labore sed ipsam Mollitia
                    repellat illum quod unde beatae Quis
                  </p>
                  <ul className="project__stack">
                    <li className="project__stack-item">SASS</li>
                    <li className="project__stack-item">TypeScript</li>
                    <li className="project__stack-item">React</li>
                  </ul>

                  <a
                    href={`${data.html_url}`}
                    aria-label="source code"
                    className="link link--icon"
                  >
                    <i aria-hidden="true" className="fab fa-github"></i>
                  </a>
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
};
