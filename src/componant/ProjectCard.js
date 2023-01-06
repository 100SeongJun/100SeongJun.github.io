import { useEffect, useState } from "react";
import Arrows from "./Arrows";
import Dots from "./Dots";
import SliderContent from "./SliderContent";

export const ProjectCard = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const len = data.card.length - 1;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className="project__contain">
      <h2>{data.Title}</h2>
      <SliderContent data={data} activeIndex={activeIndex} />
      <Arrows
        prevSlide={() =>
          setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
        }
        nextSlide={() =>
          setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
        }
      />
      <Dots
        activeIndex={activeIndex}
        onclick={(activeIndex) => setActiveIndex(activeIndex)}
        data={data}
      />
    </div>
  );
};
