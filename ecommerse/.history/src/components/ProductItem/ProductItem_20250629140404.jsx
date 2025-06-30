import styles from './styles.module.scss';

function ProductItem() {
  const { boxImg } = styles;
  return (
    <div>
      <div className={boxImg}></div>
    </div>
  );
}

export default ProductItem;
