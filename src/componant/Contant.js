export const Contant = () => {
  const mail = {
    email: "qortjdwns120712@gmail.com",
    subject: "제목을 입력해 주세요 :)",
    body: "안녕하세요 포트폴리오 제작자 백성준입니다. 내용을 입력해 주세요.",
  };
  return (
    <section className="section contact center" id="contact">
      <h2 className="section__title">Contact</h2>
      <a
        href={`mailto:${mail.email}?subject=${mail.subject}&body=${mail.body}`}
      >
        <span className="btn btn--outline">Email me</span>
      </a>
    </section>
  );
};
