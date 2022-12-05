setTimeout(() => {
  //Scroll TopBtn
  const btnHamburger = document.getElementsByClassName('fa-bars')[0];

  const displayList = () => {
    const navUl = document.querySelector('.nav__list');
    if (btnHamburger.classList.contains('fa-bars')) {
      btnHamburger.classList.remove('fa-bars');
      btnHamburger.classList.add('fa-times');
      navUl.classList.add('display-nav-list');
    } else {
      btnHamburger.classList.remove('fa-times');
      btnHamburger.classList.add('fa-bars');
      navUl.classList.remove('display-nav-list');
    }
  };
  btnHamburger.addEventListener('click', displayList);

  // ScrollHeader
  const header = document.getElementsByClassName('header')[0];
  const headerScroll = (direction) => {
    if (direction === 'up') {
      header.classList.remove('scrollDown');
    } else if (direction === 'down') {
      header.classList.add('scrollDown');
    }
  };
  var prevScrollTop = 0;

  const headerScrollFnc = () => {
    var nextScrollTop = window.scrollY || 0;
    if (nextScrollTop > prevScrollTop) {
      headerScroll('down');
    } else if (nextScrollTop < prevScrollTop) {
      headerScroll('up');
    }
    prevScrollTop = nextScrollTop;
  };

  document.addEventListener('scroll', () => headerScrollFnc());
}, 100);
