import MainLayout from '@components/Layout/Layout';
import styles from './styles.module.scss';
import CountdownTimer from '@components/CountDownTimer/CountDownTimer';
import CountDownBanner from '@components/CountDownBanner/CountDownBanner';
import ProductItem from '@components/ProductItem/ProductItem';

function HeadingListProduct({ data }) {
  const { container, containerItem } = styles;

  console.log(data);

  return (
    <MainLayout>
      <div className={container}>
        <CountDownBanner />
        <div className={containerItem}>
          {data.map((item) => (
            <ProductItem
              key={item._id}
              src={item.images[0]}
              prevSrc={item.images[1]}
              name={item.name}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </MainLayout>
  );
}

export default HeadingListProduct;
