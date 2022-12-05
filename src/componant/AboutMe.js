export const AboutMe = () => {
  const path =
    'M96.085 91.118c15.81 12.845 21.741 11.865 51.43 9.884l279.888-16.806c5.936 0 1-5.922-.98-6.906L379.94 43.686c-8.907-6.915-20.773-14.834-43.516-12.853L65.408 50.6c-9.884.98-11.858 5.922-7.922 9.883zm16.804 65.228v294.491c0 15.827 7.909 21.748 25.71 20.769l307.597-17.799c17.81-.979 19.794-11.865 19.794-24.722V136.57c0-12.836-4.938-19.758-15.84-18.77l-321.442 18.77c-11.863.997-15.82 6.931-15.82 19.776zm303.659 15.797c1.972 8.903 0 17.798-8.92 18.799l-14.82 2.953v217.412c-12.868 6.916-24.734 10.87-34.622 10.87-15.831 0-19.796-4.945-31.654-19.76l-96.944-152.19v147.248l30.677 6.922s0 17.78-24.75 17.78l-68.23 3.958c-1.982-3.958 0-13.832 6.921-15.81l17.805-4.935V210.7l-24.721-1.981c-1.983-8.903 2.955-21.74 16.812-22.736l73.195-4.934 100.889 154.171V198.836l-25.723-2.952c-1.974-10.884 5.927-18.787 15.819-19.767zM42.653 23.919l281.9-20.76c34.618-2.969 43.525-.98 65.283 14.825l89.986 63.247c14.848 10.876 19.797 13.837 19.797 25.693v346.883c0 21.74-7.92 34.597-35.608 36.564L136.64 510.14c-20.785.991-30.677-1.971-41.562-15.815l-66.267-85.978C16.938 392.52 12 380.68 12 366.828V58.495c0-17.778 7.922-32.608 30.653-34.576z';
  return (
    <>
      <div className="about">
        <div className="about__img"></div>
        <div className="about__text center">
          <h1>
            풀스택 개발자
            <span className="about__name"> 백성준 </span>
            <span>입니다.</span>
          </h1>
          <h2 className="about__role">
            신입 풀스택 개발자의 포트폴리오 입니다.
          </h2>
          <p className="about__desc">
            출생 : 1997. 04. 10 <br />
            학력 : 대구대학교 인공지능 전공 졸업 <br />
            수료 : 부산산업진흥원 웹풀스택 개발자 취업연계 교육과정 수료
            <br />
            <br />
            Tel : 010-4026-2934
            <br />
            Email : qortjdwns120712@gmail.com
            <br />
          </p>

          <div className="about__contact center">
            <a href="https://example.com" target="_blank" rel="noreferrer">
              <span className="btn btn--outline">Resume</span>
            </a>
            <a
              href="https://github.com/100SeongJun"
              aria-label="github"
              className="link link--icon"
            >
              <i aria-hidden="true" className="fab fa-github"></i>
            </a>

            <a
              href="https://www.notion.so/1919e96ab2d7490797745d059ca73f9d"
              className="link link--icon"
            >
              <svg
                height="1.8rem"
                width="1.5rem"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 500 423"
                fill="currentColor"
              >
                <path d={path} />
              </svg>
            </a>
          </div>
        </div>
        <div />
        <div />
      </div>
    </>
  );
};
