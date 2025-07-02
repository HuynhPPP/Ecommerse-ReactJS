import Button from '@components/Button/Button';
import styles from './styles.module.scss';
import { useEffect, useRef, useState } from 'react';

function SaleHomePage() {
  const { container, title, des, boxBtn, boxImg } = styles;
  const [scrollDriction, setScrollDrection] = useState(null);
  const previousScrollPosition = useRef(0);
  const [translateXPosition, setTranslateXPosition] = useState(80);
  const [scrollPosition, setScrollPosition] = useState(0);

  const scrollTracking = () => {
    const currentScrollPosition = window.pageYOffset;

    if (currentScrollPosition > previousScrollPosition.current) {
      setScrollDrection('down');
    } else if (currentScrollPosition < previousScrollPosition.current) {
      setScrollDrection('up');
    }

    previousScrollPosition.current =
      currentScrollPosition <= 0 ? 0 : currentScrollPosition;

    setScrollDrection(currentScrollPosition);
  };

  const handleTranslateX = () => {
    if (scrollDriction === 'down' && setScrollPosition >= 1500) {
      setTranslateXPosition(
        translateXPosition <= 0 ? 0 : translateXPosition - 1
      );
    } else if (scrollDriction === 'up'){
        setTranslateXPosition(
        translateXPosition <= 80 ? 80 : translateXPosition - 1
      );
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollTracking);
    return () => window.removeEventListener('scroll', scrollTracking);
  }, []);

  console.log(scrollPosition);

  return (
    <div className={container}>
      <div className={boxImg}>
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
      <div className={boxImg}>
        <img
          src='https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_2.jpeg'
          alt=''
        />
      </div>
    </div>
  );
}

export default SaleHomePage;
