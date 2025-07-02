import { useEffect, useRef, useState } from 'react';

const useTranslateXImage = () => {
  const [scrollDirection, setScrollDirection] = useState(null);
  const previousScrollPosition = useRef(0);
  const [translateXPosition, setTranslateXPosition] = useState(80);
  const [scrollPosition, setScrollPosition] = useState(0);

  const scrollTracking = () => {
    const currentScrollPosition = window.pageYOffset;

    if (currentScrollPosition > previousScrollPosition.current) {
      setScrollDirection('down');
    } else if (currentScrollPosition < previousScrollPosition.current) {
      setScrollDirection('up');
    }

    previousScrollPosition.current =
      currentScrollPosition <= 0 ? 0 : currentScrollPosition;

    setScrollPosition(currentScrollPosition);
  };

  const handleTranslateX = () => {
    if (scrollDirection === 'down' && scrollPosition >= 1500) {
      setTranslateXPosition((prev) => (prev <= 0 ? 0 : prev - 0.2));
    } else if (scrollDirection === 'up') {
      setTranslateXPosition((prev) => (prev >= 80 ? 80 : prev + 0.2));
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollTracking);
    return () => window.removeEventListener('scroll', scrollTracking);
  }, []);

  return {
    translateXPosition,
    handleTranslateX,
    scrollPosition
  }
};
