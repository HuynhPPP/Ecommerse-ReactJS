import MainLayout from '@components/Layout/Layout';
import styles from './styles.module.scss';
import CountdownTimer from '@components/CountDownTimer/CountDownTimer';
import CountDownBanner from '@components/CountDownBanner/CountDownBanner';

function HeadingListProduct() {
  const { container, containerItem, containerMiddleBox, des, title } = styles;

  return (
    <MainLayout>
      <div className={container}>
        <CountDownBanner />
        <div className={containerItem}>
          <div>1</div>
          <div>2</div>
        </div>
      </div>
    </MainLayout>
  );
}

export default HeadingListProduct;
