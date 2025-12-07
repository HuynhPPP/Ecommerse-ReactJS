import MyHeader from '@components/Header/Header';
import styles from './styles.module.scss';
import MainLayout from '@components/Layout/Layout';
import { useNavigate, useParams } from 'react-router-dom';
import MyFooter from '@components/Footer/Footer';
import imageSale1 from '@assets/images/Image_sale1.jpeg';
import imageSale2 from '@assets/images/ImageProduct2.jpg';
import { BsHeart } from 'react-icons/bs';
import { TfiReload } from 'react-icons/tfi';
import { PiShoppingCart } from 'react-icons/pi';
import Button from '@components/Button/Button';
import PaymentMethod from '@components/PaymentMethod/PaymentMethod';
import AccordionMenu from '@components/AccordionMenu';
import { useEffect, useState } from 'react';
import InformationProduct from '@/pages/ProductDetail/components/Information';
import Review from '@/pages/ProductDetail/components/Review';
import SliderCommon from '@components/SliderCommon/SliderCommon';
import ReactImageMagnifier from 'simple-image-magnifier/react';
import cls from 'classnames';
import { getDetailProduct, getRelatedProduct } from '@/apis/productsService';
import LoadingTextCommon from '@components/LoadingTextCommon/LoadingTextCommon';
import ProductDetailSkeleton from '@components/skeletons/ProductDetailSkeleton/ProductDetailSkeleton';

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
    containerRelated,
    activeSize,
    btnClear,
    disabledBtn,
    loadingContainer,
  } = styles;

  const navigate = useNavigate();

  const handleBackPrePage = () => {
    navigate(-1);
  };

  const [menuSelected, setMenuSelected] = useState(1);
  const [sizeSelected, setSizeSelected] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [data, setData] = useState();
  const [dataRelated, setDataRelated] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const param = useParams();

  const dataAccordionMenu = [
    {
      id: 1,
      titleMenu: 'ADDITIONAL INFORMATION',
      contentAccordion: <InformationProduct />,
    },
    {
      id: 2,
      titleMenu: 'REVIEW (0)',
      contentAccordion: <Review />,
    },
  ];

  const handleSetMenuSelected = (id) => {
    setMenuSelected(id);
  };

  const handleSelectSize = (size) => {
    setSizeSelected(size);
  };

  const handleClearSize = () => {
    setSizeSelected('');
  };

  const handleSetQuantity = (type) => {
    if (type === 'increase') {
      setQuantity(quantity + 1);
    } else {
      setQuantity(quantity > 1 ? quantity - 1 : 1);
    }
  };

  const fetchDataDetailProduct = async (id) => {
    setIsLoading(true);
    try {
      const dataDetail = await getDetailProduct(id);
      setData(dataDetail);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchDataRelatedProduct = async (id) => {
    setIsLoading(true);
    try {
      const dataRelated = await getRelatedProduct(id);
      setDataRelated(dataRelated);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (param.id) {
      fetchDataDetailProduct(param.id);
      fetchDataRelatedProduct(param.id);
    }
  }, [param]);

  return (
    <div>
      <MyHeader />
      <>
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

            {isLoading ? (
              <ProductDetailSkeleton />
            ) : (
              <div className={contentSection}>
                <div className={imageBox}>
                  {data?.images.map((src, index) => {
                    return (
                      <ReactImageMagnifier
                        key={index}
                        srcPreview={src}
                        srcOriginal={src}
                        width={295}
                        height={350}
                      />
                    );
                  })}
                </div>
                <div className={infoBox}>
                  <h1>{data?.name}</h1>
                  <p className={price}>{data?.price}</p>
                  <p classnName={descreption}>{data?.description}</p>

                  <p className={titleSize}>Size {sizeSelected}</p>
                  <div className={boxSize}>
                    {data?.size.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className={cls(size, {
                            [activeSize]: sizeSelected === item.name,
                          })}
                          onClick={() => handleSelectSize(item.name)}
                        >
                          {item.name}
                        </div>
                      );
                    })}
                    {sizeSelected && (
                      <p className={btnClear} onClick={handleClearSize}>
                        clear
                      </p>
                    )}
                  </div>

                  <div className={functionInfo}>
                    <div className={boxCount}>
                      <div onClick={() => handleSetQuantity('decrease')}>-</div>
                      <div>{quantity}</div>
                      <div onClick={() => handleSetQuantity('increase')}>+</div>
                    </div>
                    <div className={boxAddCart}>
                      <Button
                        content={
                          <>
                            <PiShoppingCart /> ADD TO CART
                          </>
                        }
                        customClassName={!sizeSelected ? disabledBtn : ''}
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
                      customClassName={!sizeSelected ? disabledBtn : ''}
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

                  {dataAccordionMenu.map((item, index) => (
                    <AccordionMenu
                      key={index}
                      titleMenu={item.titleMenu}
                      contentAccordion={item.contentAccordion}
                      onClick={() => handleSetMenuSelected(item.id)}
                      isSelected={menuSelected === item.id}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* RELATED PRODUCTS */}
            <div className={containerRelated}>
              <h2>Related products</h2>

              <SliderCommon data={dataRelated} isProductItem slidesToShow={4} />
            </div>
          </MainLayout>
        </div>
      </>
      {/* <MyFooter /> */}
      <MyFooter />
    </div>
  );
}

export default ProductDetail;
