import { useEffect, useState } from "react";
import "./styles.css";
import { Body } from "./container/Body";
import { Header } from "./container/Header";
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
      <Header handleTheme={handleTheme} theme={theme}/>

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
