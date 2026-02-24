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
          <span><img src="./static-images/toasterShoe.jpg"></img></span>
        </div>
        <div className="scroll-item item-2">
          <span><img src="./static-images/HeroditusSandals.png"></img></span>
        </div>
        <div className="scroll-item item-3">
          <span><img src="./static-images/temporalStabiliser.jpg"></img></span>
        </div>
        <div className="scroll-item item-3">
          <span><img src="./static-images/almanac.jpg"></img></span>
        </div>
        <div className="scroll-item item-3">
          <span><img src="./static-images/antikytheraMechanism.png"></img></span>
        </div>
        <div className="scroll-item item-3">
          <span><img src="./static-images/watch.jpg"></img></span>
        </div>
      </div>

      <button className="scroll-btn right" onClick={() => scroll("right")}>
        ▶
      </button>
    </div>
  );
}

