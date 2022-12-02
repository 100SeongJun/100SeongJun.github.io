export const Projects = () => {
  return (
    <section id="projects" className="section projects">
      <h2 className="section__title">Projects</h2>

      <div className="projects__grid">
        <div className="project">
          <h3>Project 1</h3>
          <p className="project__description">
            Ipsum accusamus ea excepturi aliquid eligendi
            amet. Explicabo sapiente debitis labore sed
            ipsam Mollitia repellat illum quod unde beatae
            Quis
          </p>
          <ul className="project__stack">
            <li className="project__stack-item">SASS</li>
            <li className="project__stack-item">
              TypeScript
            </li>
            <li className="project__stack-item">React</li>
          </ul>

          <a
            href="https://github.com"
            aria-label="source code"
            className="link link--icon"
          >
            <i
              aria-hidden="true"
              className="fab fa-github"
            ></i>
          </a>
          <a
            href="https://example.com"
            aria-label="live preview"
            className="link link--icon"
          >
            <i
              aria-hidden="true"
              className="fas fa-external-link-alt"
            ></i>
          </a>
        </div>

        <div className="project">
          <h3>Project 2</h3>
          <p className="project__description">
            Ipsum accusamus ea excepturi aliquid eligendi
            amet. Explicabo sapiente debitis labore sed
            ipsam Mollitia repellat illum quod unde beatae
            Quis
          </p>
          <ul className="project__stack">
            <li className="project__stack-item">SASS</li>
            <li className="project__stack-item">
              TypeScript
            </li>
            <li className="project__stack-item">React</li>
          </ul>

          <a
            href="https://github.com"
            aria-label="source code"
            className="link link--icon"
          >
            <i
              aria-hidden="true"
              className="fab fa-github"
            ></i>
          </a>
          <a
            href="https://example.com"
            aria-label="live preview"
            className="link link--icon"
          >
            <i
              aria-hidden="true"
              className="fas fa-external-link-alt"
            ></i>
          </a>
        </div>

        <div className="project">
          <h3>Project 3</h3>
          <p className="project__description">
            Ipsum accusamus ea excepturi aliquid eligendi
            amet. Explicabo sapiente debitis labore sed
            ipsam Mollitia repellat illum quod unde beatae
            Quis
          </p>
          <ul className="project__stack">
            <li className="project__stack-item">SASS</li>
            <li className="project__stack-item">
              TypeScript
            </li>
            <li className="project__stack-item">React</li>
          </ul>

          <a
            href="https://github.com"
            aria-label="source code"
            className="link link--icon"
          >
            <i
              aria-hidden="true"
              className="fab fa-github"
            ></i>
          </a>
          <a
            href="https://example.com"
            aria-label="live preview"
            className="link link--icon"
          >
            <i
              aria-hidden="true"
              className="fas fa-external-link-alt"
            ></i>
          </a>
        </div>
      </div>
    </section>
  );
};
