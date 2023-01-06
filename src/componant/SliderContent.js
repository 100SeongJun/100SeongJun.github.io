import React from "react";

function SliderContent({ data, activeIndex }) {
  return (
    <section>
      <h3>{data.Subject}</h3>
      {data?.card.map((dmy, index) => {
        return (
          <div
            key={index}
            className={index === activeIndex ? "slides active" : "slides"}
          >
            <h3>{dmy}</h3>
          </div>
        );
      })}
    </section>
  );
}

export default SliderContent;
