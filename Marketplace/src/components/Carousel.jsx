import React, { useRef } from "react";
import "./Carousel.css";

export default function Carousel() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === "left") {
      current.scrollBy({ left: -300, behavior: "smooth" });
    } else {
      current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="carousel-wrapper">
      <button className="scroll-btn left" onClick={() => scroll("left")}>
        ◀
      </button>

      <div className="scroll-container" ref={scrollRef}>
        <div className="scroll-item item-1">
          <span>Item 1</span>
        </div>
        <div className="scroll-item item-2">
          <span>Item 2</span>
        </div>
        <div className="scroll-item item-3">
          <span>Item 3</span>
        </div>
      </div>

      <button className="scroll-btn right" onClick={() => scroll("right")}>
        ▶
      </button>
    </div>
  );
}

