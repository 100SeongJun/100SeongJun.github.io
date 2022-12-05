import { useEffect, useState } from 'react';
import './styles.css';
import { Body, ScrollTop, Footer, Header } from './container';
function App() {
  const [theme, setTheme] = useState(false);
  const handleTheme = () => {
    setTheme(!theme);
  };

  useEffect(() => {
    const scrollhead = () => {
      const headroom = document.getElementById('');
    };
  }, []);

  useEffect(() => {
    const scrollUp = () => {
      const btnScrollTop = document.querySelector('.scroll-top');
      if (
        document.getElementById('top') > 500 ||
        document.documentElement.scrollTop > 500
      ) {
        btnScrollTop.style.display = 'block';
      } else {
        btnScrollTop.style.display = 'none';
      }
    };
    document.addEventListener('scroll', scrollUp);
    return () => {
      document.removeEventListener('scroll', scrollUp);
    };
  }, []);

  return (
    <div className={theme ? 'contain dark' : 'contain light'} id="top">
      <Header handleTheme={handleTheme} theme={theme} />
      <Body />
      <Footer />
      <ScrollTop />
    </div>
  );
}

export default App;
