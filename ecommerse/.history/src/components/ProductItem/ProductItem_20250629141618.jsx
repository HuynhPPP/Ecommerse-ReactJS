import styles from './styles.module.scss';
import heartIcon from '@icons/svgs/heart.svg';
import reLoadIcon from '@icons/svgs/reloadIcon.svg';
import cartIcon from '@icons/svgs/cartIcon.svg';

function ProductItem() {
  const { boxImg, showImgWhenHover, ShowFunctionWhenHover } = styles;
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
        <div className={ShowFunctionWhenHover}>
            <div>
                <img src={heartIcon} alt="" />
            </div>
            <div>
                <img src={reLoadIcon} alt="" />
            </div>
            <div>
                <img src={cartIcon} alt="" />
            </div>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
