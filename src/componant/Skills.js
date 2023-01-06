export const Skills = () => {
  const skills = [
    "Java",
    "JavaScript",
    "React",
    "MySQL",
    "HTML",
    "AWS",
    "Travis",
    "Linux",
  ];
  return (
    <section className="section skills" id="skills">
      <h2 className="section__title">Skills</h2>
      <ul className="skills__list">
        {skills.map((skill, index) => {
          return (
            <li className="skills__list-item btn btn--plain" key={index}>
              {skill}
            </li>
          );
        })}
      </ul>
    </section>
  );
};
