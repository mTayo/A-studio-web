import React, { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";


export const CarouselItem = ({ children, width }:any) => {
  return (
    <div className="carousel-item" >
      {children}
    </div>
  );
};

const Carousel = ({ children }:any) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const updateIndex = (newIndex:number) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1);
      }
    }, 3000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1)
  });

  return (
    <div
      {...handlers}
      className="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="inner"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: "100%" });
        })}
      </div>
      {/* <div className="indicators">
       
        {React.Children.map(children, (child, index) => {
          return (
            <span
              className={`${index === activeIndex ? "active" : "non-active"}`}
              onClick={() => {
                updateIndex(index);
              }}
            />
             
          );
        })}
        
      </div> */}
    </div>
  );
};

export default Carousel;
