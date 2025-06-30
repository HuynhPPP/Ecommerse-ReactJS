import styles from './styles.module.scss';
import heartIcon from '@icons/svgs/heart.svg';
import reLoadIcon from '@icons/svgs/reloadIcon.svg';
import cartIcon from '@icons/svgs/cartIcon.svg';
import eyeIcon from '@icons/svgs/eyesIcon.svg';

function ProductItem({ src, prevSrc, name, price }) {
  const {
    boxImg,
    showImgWhenHover,
    ShowFunctionWhenHover,
    boxIcon,
    title,
    priceClass,
  } = styles;
  return (
    <div>
      <div className={boxImg}>
        <img
          src={src}
          alt=''
        />
        <img
          src={prevSrc}
          alt=''
          className={showImgWhenHover}
        />
        <div className={ShowFunctionWhenHover}>
          <div className={boxIcon}>
            <img src={heartIcon} alt='' />
          </div>
          <div className={boxIcon}>
            <img src={reLoadIcon} alt='' />
          </div>
          <div className={boxIcon}>
            <img src={cartIcon} alt='' />
          </div>
          <div className={boxIcon}>
            <img src={eyeIcon} alt='' />
          </div>
        </div>
      </div>
      <div className={title}>{name}</div>
      <div className={priceClass}>${price}</div>
    </div>
  );
}

export default ProductItem;
