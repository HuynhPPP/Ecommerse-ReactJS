import styles from './styles.module.scss';

function ProductItem() {
  const { boxImg } = styles;
  return (
    <div>
      <div className={boxImg}>
        <img src="https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.1-min-285x340.jpg" alt="" />
      </div>
    </div>
  );
}

export default ProductItem;
