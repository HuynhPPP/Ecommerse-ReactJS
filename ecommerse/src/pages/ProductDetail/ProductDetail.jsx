import MyHeader from '@components/Header/Header';
import styles from './styles.module.scss';
import MainLayout from '@components/Layout/Layout';
import { useNavigate } from 'react-router-dom';
import MyFooter from '@components/Footer/Footer';
import imageSale1 from '@assets/images/Image_sale1.jpeg';
import { BsHeart } from 'react-icons/bs';
import { TfiReload } from 'react-icons/tfi';
import { PiShoppingCart } from 'react-icons/pi';
import Button from '@components/Button/Button';
import PaymentMethod from '@components/PaymentMethod/PaymentMethod';

function ProductDetail() {
  const {
    container,
    functionBox,
    specialText,
    btnBack,
    btnBuyNow,
    contentSection,
    imageBox,
    infoBox,
    price,
    descreption,
    boxSize,
    size,
    titleSize,
    functionInfo,
    boxAddCart,
    boxCount,
    orSection,
    addFunction,
    infoProduct,
  } = styles;

  const navigate = useNavigate();

  const handleBackPrePage = () => {
    navigate(-1);
  };

  return (
    <div>
      <MyHeader />
      <div className={container}>
        <MainLayout>
          <div className={functionBox}>
            <div>
              Home &gt; <span className={specialText}>Men</span>
            </div>
            <div className={btnBack} onClick={() => handleBackPrePage()}>
              &lt; Return to previous page
            </div>
          </div>

          <div className={contentSection}>
            <div className={imageBox}>
              <img src={imageSale1} alt='xxx' />
              <img src={imageSale1} alt='xxx' />
              <img src={imageSale1} alt='xxx' />
              <img src={imageSale1} alt='xxx' />
            </div>
            <div className={infoBox}>
              <h1>title product</h1>
              <p className={price}>1,879.99$</p>
              <p classnName={descreption}>
                Amet, elit tellus, nisi odio velit ut. Euismod sit arcu, quisque
                arcu purus orci leo.
              </p>

              <p className={titleSize}>Size</p>
              <div className={boxSize}>
                <div className={size}>S</div>
                <div className={size}>M</div>
                <div className={size}>L</div>
                <div className={size}>XL</div>
              </div>

              <div className={functionInfo}>
                <div className={boxCount}>
                  <div>-</div>
                  <div>1</div>
                  <div>+</div>
                </div>
                <div className={boxAddCart}>
                  <Button
                    content={
                      <>
                        <PiShoppingCart /> ADD TO CART
                      </>
                    }
                  />
                </div>
              </div>

              <div className={orSection}>
                <div></div>
                <span>OR</span>
                <div></div>
              </div>

              <div className={btnBuyNow}>
                <Button
                  content={
                    <>
                      <PiShoppingCart /> BUY NOW
                    </>
                  }
                />
              </div>

              <div className={addFunction}>
                <div>
                  <BsHeart />
                </div>
                <div>
                  <TfiReload />
                </div>
              </div>

              <div>
                <PaymentMethod />
              </div>

              <div className={infoProduct}>
                <div>
                  Brand: <span>Adidas</span>
                </div>
                <div>
                  SKU: <span>123456789</span>
                </div>
                <div>
                  Category: <span>Men</span>
                </div>
              </div>
            </div>
          </div>
        </MainLayout>
      </div>
      {/* <MyFooter /> */}
    </div>
  );
}

export default ProductDetail;
