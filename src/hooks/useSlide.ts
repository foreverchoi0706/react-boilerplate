import { useEffect, useRef, useState } from "react";

const useSlide = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const maxLength = useRef<number>(0);

  const refContainer = useRef<HTMLUListElement>(null);

  const slideNext = () => {
    if (currentIndex === 0) return;
    setCurrentIndex((prevState) => prevState - 1);
  };

  const slidePrev = () => {
    if (currentIndex === maxLength.current) return;
    setCurrentIndex((prevState) => prevState + 1);
  };

  useEffect(() => {
    if (!refContainer.current) return;
    const slides = refContainer.current.querySelectorAll("li");
    console.log(slides.length);
    maxLength.current = slides.length;
  }, []);

  useEffect(() => {
    console.log(currentIndex);
  }, [currentIndex]);

  return {
    refContainer,
    slideNext,
    slidePrev,
  };
};

export default useSlide;
