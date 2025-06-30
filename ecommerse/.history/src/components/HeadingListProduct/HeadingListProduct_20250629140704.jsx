import MainLayout from '@components/Layout/Layout';
import styles from './styles.module.scss';
import CountdownTimer from '@components/CountDownTimer/CountDownTimer';
import CountDownBanner from '@components/CountDownBanner/CountDownBanner';
import ProductItem from '@components/ProductItem/ProductItem';

function HeadingListProduct() {
  const { container, containerItem } = styles;

  return (
    <MainLayout>
      <div className={container}>
        <CountDownBanner />
        <div className={containerItem}>
          <ProductItem />
          <div>2</div>
        </div>
      </div>
    </MainLayout>
  );
}

export default HeadingListProduct;
