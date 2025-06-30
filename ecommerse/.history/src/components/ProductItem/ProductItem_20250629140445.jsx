import styles from './styles.module.scss';

function ProductItem() {
  const { boxImg } = styles;
  return (
    <div>
      <div className={boxImg}>
        <img src="" alt="" />
      </div>
    </div>
  );
}

export default ProductItem;
