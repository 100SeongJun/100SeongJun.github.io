// import { useState } from "react"

export const Header = ({ handleTheme, theme }) => {
  return (
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
            <a className="link link--nav" href="#projects">
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
            <i className="fas fa-sun" />
          ) : (
            <i className="fas fa-moon"></i>
          )}
        </button>

        <button
          type="button"
          aria-label="toggle navigation"
          className="btn btn--icon nav__hamburger"
        >
          <i aria-hidden="true" className="fas fa-bars" />
        </button>
      </nav>
    </div>
  );
};
