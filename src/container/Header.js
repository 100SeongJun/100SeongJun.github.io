import { Outlet } from "react-router-dom";
import "../styles.css";
export const Header = ({ changeTheme }) => {
  const navbar = ["projects", "skills", "contact"];

  const handleTheme = () => {
    let theme = window.localStorage.getItem("theme");
    if (theme === "light") {
      window.localStorage.setItem("theme", "dark");
    } else if (theme === "dark") {
      window.localStorage.setItem("theme", "light");
    }
    changeTheme();
  };
  return (
    <>
      <div className="header center">
        <h3>
          <a href="/" className="link">
            100SeongJun's Portfolio
          </a>
        </h3>
        <nav className="nav center">
          <ul className="nav__list center">
            {navbar.map((nav, idx) => {
              return (
                <li className="nav__list-item" key={idx}>
                  <a className="link link--nav" href={`/#${nav}`}>
                    {nav}
                  </a>
                </li>
              );
            })}
          </ul>

          <button onClick={handleTheme}>
            {window.localStorage.getItem("theme") === "dark" ? (
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
      <Outlet />
    </>
  );
};
