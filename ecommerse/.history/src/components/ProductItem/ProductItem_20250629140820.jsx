import styles from './styles.module.scss';

function ProductItem() {
  const { boxImg, showImgWhenHover } = styles;
  return (
    <div>
      <div className={boxImg}>
        <img
          src='https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.1-min-285x340.jpg'
          alt=''
        />
        <img
          src='https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.2-min-285x340.jpg'
          alt=''
          className={showImgWhenHover}
        />
      </div>
    </div>
  );
}

export default ProductItem;
