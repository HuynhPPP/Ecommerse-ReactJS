import Button from '@components/Button/Button';
import styles from './styles.module.scss';
import { useEffect, useRef, useState } from 'react';

function SaleHomePage() {
  const { container, title, des, boxBtn, boxImg } = styles;
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

  useEffect(() => {
    console.log('Thuc thi ham handleTranslateX');
    handleTranslateX();
  }, [scrollPosition]); // 🔁 Trigger mỗi lần scrollPosition thay đổi

  return (
    <div className={container}>
      <div
        className={boxImg}
        style={{
          transform: `translateX(${translateXPosition}px)`,
          transition: 'transform 0.6s ease',
        }}
      >
        <img
          src='https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_1.jpeg'
          alt=''
        />
      </div>
      <div>
        <h2 className={title}>Sale of the year</h2>
        <p className={des}>
          Libero sed faucibus facilisis fermentum. Est nibh sed massa sodales.
        </p>
        <div className={boxBtn}>
          <Button content={'Read more'} isPrimary={false} />
        </div>
      </div>
      <div
        className={boxImg}
        style={{
          transform: `translateX(-${translateXPosition}px)`,
          transition: 'transform 0.6s ease',
        }}
      >
        <img
          src='https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_2.jpeg'
          alt=''
        />
      </div>
    </div>
  );
}

export default SaleHomePage;
