import { useState } from "react";
import "./styles.css";
import { Body, ScrollTop, Footer, Header } from "./container";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet";
import { DetailProject } from "./container/DetailProject";
function App() {
  const [theme, setTheme] = useState(false);
  const changeTheme = () => {
    setTheme(!theme);
  };
  return (
    <BrowserRouter>
      <Helmet>
        <script src="./script.js" />
      </Helmet>
      <div className={`contain ${window.localStorage.getItem("theme")}`}>
        <Routes>
          <Route path="/" element={<Header changeTheme={changeTheme} />}>
            <Route path="/" element={<Body />} />
            <Route path="/project" element={<DetailProject />} />
          </Route>
        </Routes>
        <Footer />
        <ScrollTop />
      </div>
    </BrowserRouter>
  );
}

export default App;
