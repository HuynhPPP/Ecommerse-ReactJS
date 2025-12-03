import styles from './styles.module.scss';
import cls from 'classnames';
import Button from '@components/Button/Button';
import { useContext, useEffect, useState } from 'react';
import { OurShopContext } from '@/contexts/OurShopProvider';
import Cookies from 'js-cookie';
import { SideBarContext } from '@/contexts/SideBarProvider';
import { ToastContext } from '@/contexts/ToastProvider';
import { addProductToCart } from '@/apis/cartService';
import LoadingTextCommon from '@components/LoadingTextCommon/LoadingTextCommon';
import { LiaShoppingBagSolid } from 'react-icons/lia';
import { TfiReload } from 'react-icons/tfi';
import { PiShoppingCartLight } from 'react-icons/pi';
import { IoEyeOutline } from 'react-icons/io5';

function ProductItem({
  src,
  prevSrc,
  name,
  price,
  details,
  isHomePage = true,
}) {
  // const { isShowGrid } = useContext(OurShopContext);
  const [sizeChoose, setSizeChoose] = useState('');
  const ourShopStore = useContext(OurShopContext);
  const [isShowGrid, setIsShowGrid] = useState(ourShopStore?.isShowGrid);
  const userId = Cookies.get('userId');
  const {
    setIsOpen,
    setType,
    listProductCart,
    handleGetListProductsCart,
    setProductDetail,
  } = useContext(SideBarContext);
  const { toast } = useContext(ToastContext);
  const [isLoading, setIsLoading] = useState(false);

  const {
    boxImg,
    showImgWhenHover,
    ShowFunctionWhenHover,
    boxIcon,
    title,
    priceClass,
    boxSize,
    size,
    textCenter,
    boxBtn,
    content,
    containerItem,
    leftBtn,
    largImg,
    isActiveSize,
    btnClear,
  } = styles;

  const handleChooseSize = (size) => {
    setSizeChoose(size);
  };

  const handleClearSize = () => {
    setSizeChoose('');
  };

  const handleAddToCart = () => {
    console.log(userId);
    if (!userId) {
      setIsOpen(true);
      setType('login');
      toast.warning('Please login to add to cart');
      return;
    }

    if (!sizeChoose) {
      toast.warning('Please choose size');
      return;
    }

    const data = {
      userId,
      productId: details._id,
      size: sizeChoose,
      quantity: 1,
    };
    setIsLoading(true);
    addProductToCart(data)
      .then((res) => {
        setIsOpen(true);
        setType('cart');
        toast.success('Add Product to cart successfully');
        setIsLoading(false);
        handleGetListProductsCart(userId, 'cart');
      })
      .catch((err) => {
        console.log(err);
        toast.error('Add Product to cart failed');
        setIsLoading(false);
      });
  };

  const handleShowProductSideBar = () => {
    setIsOpen(true);
    setType('detail');
    setProductDetail(details);
  };

  useEffect(() => {
    if (isHomePage) {
      setIsShowGrid(true);
    } else {
      setIsShowGrid(ourShopStore?.isShowGrid);
    }
  }, [isHomePage, ourShopStore?.isShowGrid]);

  return (
    <div className={isShowGrid ? '' : containerItem}>
      <div
        className={cls(boxImg, {
          [largImg]: !isShowGrid,
        })}
      >
        <img src={src} alt='' />
        <img src={prevSrc} alt='' className={showImgWhenHover} />
        <div className={ShowFunctionWhenHover}>
          <div className={boxIcon}>
            <LiaShoppingBagSolid
              style={{
                fontSize: '25px',
              }}
            />
          </div>
          <div className={boxIcon}>
            <TfiReload
              style={{
                fontSize: '20px',
              }}
            />
          </div>
          <div className={boxIcon}>
            <PiShoppingCartLight
              style={{
                fontSize: '20px',
              }}
            />
          </div>
          <div className={boxIcon} onClick={handleShowProductSideBar}>
            <IoEyeOutline
              style={{
                fontSize: '20px',
              }}
            />
          </div>
        </div>
      </div>

      <div className={isShowGrid ? '' : content}>
        {!isHomePage && (
          <div className={boxSize}>
            {details.size.map((item, index) => {
              return (
                <div
                  key={index}
                  className={cls(size, {
                    [isActiveSize]: sizeChoose === item.name,
                  })}
                  onClick={() => handleChooseSize(item.name)}
                >
                  {item.name}
                </div>
              );
            })}
          </div>
        )}

        {sizeChoose && (
          <div className={btnClear} onClick={() => handleClearSize()}>
            clear
          </div>
        )}

        <div
          className={cls(title, {
            [textCenter]: !isHomePage,
          })}
        >
          {name}
        </div>

        {!isHomePage && (
          <div
            className={textCenter}
            style={{
              color: '#888',
            }}
          >
            Brand 01
          </div>
        )}

        <div
          className={cls(priceClass, {
            [textCenter]: !isHomePage,
          })}
          style={{
            color: isHomePage ? '#333' : '#888',
          }}
        >
          ${price}
        </div>

        {!isHomePage && (
          <div
            className={cls(boxBtn, {
              [leftBtn]: !isShowGrid,
            })}
          >
            <Button
              content={isLoading ? <LoadingTextCommon /> : 'ADD TO CART'}
              onClick={handleAddToCart}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductItem;
