import { useEffect } from "react";

setTimeout(() => {
  //Scroll TopBtn
  const btnHamburger = document.getElementsByClassName("fa-bars")[0];
  const navUl = document.querySelector(".nav__list");

  const displayList = () => {
    if (btnHamburger.classList.contains("fa-bars")) {
      btnHamburger.classList.remove("fa-bars");
      btnHamburger.classList.add("fa-times");
      navUl.classList.add("display-nav-list");
      navUl.classList.add("box-shadow");
    } else {
      btnHamburger.classList.remove("fa-times");
      btnHamburger.classList.add("fa-bars");
      navUl.classList.remove("display-nav-list");
      navUl.classList.remove("box-shadow");
    }
  };
  btnHamburger.addEventListener("click", displayList);

  const header = document.getElementsByClassName("header")[0];
  const headerScroll = (direction) => {
    if (direction === "up") {
      header.classList.remove("scroll-down");
    } else if (direction === "down") {
      header.classList.add("scroll-down");
      navUl.classList.remove("display-nav-list");
      btnHamburger.classList.remove("fa-times");
      btnHamburger.classList.add("fa-bars");
    }
  };
  var prevScrollTop = 0;

  const headerScrollFnc = () => {
    var nextScrollTop = window.scrollY || 0;
    // if (nextScrollTop > 100) {
    if (nextScrollTop > prevScrollTop) {
      headerScroll("down");
    } else if (nextScrollTop < prevScrollTop) {
      headerScroll("up");
    }
    prevScrollTop = nextScrollTop;
    // }
  };

  document.addEventListener("scroll", () => headerScrollFnc());
  window.onresize = function (event) {
    if (window.innerWidth > 600) {
      navUl.classList.remove("box-shadow");
    } else {
      navUl.classList.add("box-shadow");
    }
  };

  // Theme 변경
  useEffect(() => {
    window.localStorage.setItem("theme", "light");
  }, []);

  // Scroll Top Btn 동작
  useEffect(() => {
    const scrollUp = () => {
      const btnScrollTop = document.querySelector(".scroll-top");

      if (
        document.getElementById("top") > 500 ||
        document.documentElement.scrollTop > 500
      ) {
        btnScrollTop.style.display = "block";
      } else {
        btnScrollTop.style.display = "none";
      }
    };
    document.addEventListener("scrolltop", scrollUp);
    return () => {
      document.removeEventListener("scrolltop", scrollUp);
    };
  }, []);
}, 300);
