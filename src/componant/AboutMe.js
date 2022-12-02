export const AboutMe = () => {
  return (
    <div className="about center">
      <h1>
        Hi, I am
        <span className="about__name">Raj Shekhar.</span>
      </h1>
      <h2 className="about__role">
        A Front end Developer.
      </h2>
      <p className="about__desc">
        Consectetur neque sed quam molestiae consectetur
        nesciunt sit alias Vitae libero perferendis
        reprehenderit optio veritatis Accusantium at
        voluptatum cumque temporibus et Explicabo iste porro
        quis numquam distinctio Repellendus adipisci nam
        perferendis amet eaque hic Voluptates
      </p>

      <div className="about__contact center">
        <a href="https://example.com">
          <span className="btn btn--outline">Resume</span>
        </a>

        <a
          href="https://github.com/rajshekhar26"
          aria-label="github"
          className="link link--icon"
        >
          <i
            aria-hidden="true"
            className="fab fa-github"
          ></i>
        </a>

        <a
          href="https://linkedin.com/in/rajshekhar26"
          aria-label="linkedin"
          className="link link--icon"
        >
          <i
            aria-hidden="true"
            className="fab fa-linkedin"
          ></i>
        </a>
      </div>
    </div>
  );
};
