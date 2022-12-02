import {
  Projects,
  AboutMe,
  Skills,
  Contant,
} from "../componant";

export const Body = () => {
  return (
    <div className="body">
      <AboutMe />
      <Projects />
      <Skills />
      <Contant />
    </div>
  );
};
