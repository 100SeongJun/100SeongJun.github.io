import { useEffect, useState } from "react";
import "./styles.css";
import { Body } from "./container/Body";
function App() {
  const [theme, setTheme] = useState(false);
  const handleTheme = () => {
    setTheme(!theme);
  };

  useEffect(() => {
    const scrollhead = () => {
      const headroom = document.getElementById("");
    };
  });
  useEffect(() => {
    const scrollUp = () => {
      const btnScrollTop =
        document.querySelector(".scroll-top");
      if (
        document.getElementById("top") > 500 ||
        document.documentElement.scrollTop > 500
      ) {
        btnScrollTop.style.display = "block";
      } else {
        btnScrollTop.style.display = "none";
      }
    };
    document.addEventListener("scroll", scrollUp);
    return () => {
      document.removeEventListener("scroll", scrollUp);
    };
  }, []);
  return (
    <div
      className={theme ? "contain dark" : "contain light"}
      id="top"
    >
      <div className="header center">
        <h3>
          <a
            href="https://rajshekhar26.github.io/cleanfolio-minimal"
            className="link"
          >
            100SeongJun's Portfolio
          </a>
        </h3>

        <nav className="nav center">
          <ul className="nav__list center">
            <li className="nav__list-item">
              <a
                className="link link--nav"
                href="#projects"
              >
                Projects
              </a>
            </li>
            <li className="nav__list-item">
              <a className="link link--nav" href="#skills">
                Skills
              </a>
            </li>
            <li className="nav__list-item">
              <a className="link link--nav" href="#contact">
                Contact
              </a>
            </li>
          </ul>

          <button onClick={handleTheme}>
            {theme ? (
              <i className="fa-solid fa-sun-bright" />
            ) : (
              <i className="fa-solid fa-moon"></i>
            )}
          </button>

          <button
            type="button"
            aria-label="toggle navigation"
            className="btn btn--icon nav__hamburger"
          >
            <i
              aria-hidden="true"
              className="fas fa-bars"
            ></i>
          </button>
        </nav>
      </div>

      <Body />

      <footer className="footer">
        <a
          href="https://github.com/rajshekhar26/cleanfolio-minimal"
          className="link footer__link"
        >
          Created By Raj Shekhar
        </a>
      </footer>

      <div className="scroll-container">
        <div className="scroll-top">
          <a aria-label="Scroll up" href="#top">
            <i
              aria-hidden="true"
              className="fas fa-arrow-up"
            ></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
