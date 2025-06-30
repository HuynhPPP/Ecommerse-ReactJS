import MainLayout from '@components/Layout/Layout';
import styles from './styles.module.scss';

function PopularProduct() {
  const { container, containerItem } = styles;
  return (
    <MainLayout>
      <div className={container}>
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>
    </MainLayout>
  );
}

export default PopularProduct;
