import MainLayout from '@components/Layout/Layout';
import styles from './styles.module.scss';
import CountdownTimer from '@components/CountDownTimer/CountDownTimer';
import CountDownBanner from '@components/CountDownBanner/CountDownBanner';

function HeadingListProduct() {
  const { container, containerItem, containerMiddleBox, des, title } = styles;
  const targetDate = '2025-12-31T00:00:00';

  return (
    <MainLayout>
      {/* <CountdownTimer targetDate={targetDate}/> */}
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
