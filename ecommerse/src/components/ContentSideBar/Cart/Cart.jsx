import HeaderSideBar from '@components/ContentSideBar/components/HeaderSideBar/HeaderSideBar';
import { PiShoppingCart } from 'react-icons/pi';
import styles from './styles.module.scss';
import ItemProduct from '@components/ContentSideBar/components/ItemProduct/ItemProduct';
import Button from '@components/Button/Button';
import { useContext } from 'react';
import { SideBarContext } from '@/contexts/SideBarProvider';
import LoadingTextCommon from '@components/LoadingTextCommon/LoadingTextCommon';

function Cart() {
  const { container, total, boxBtn, containerListProductCart, overlayLoading } =
    styles;
  const { listProductCart, isLoadingProductCart } = useContext(SideBarContext);

  return (
    <div className={container}>
      <div>
        <HeaderSideBar
          icon={<PiShoppingCart style={{ fontSize: '30px' }} />}
          title='CART'
        />

        {isLoadingProductCart ? (
          <LoadingTextCommon />
        ) : (
          listProductCart.map((item, index) => {
            return (
              <ItemProduct
                key={index}
                item={item}
                src={item.images[0]}
                nameProduct={item.name}
                sizeProduct={item.size}
                priceProduct={item.price}
                sku={item.sku}
                quantity={item.quantity}
                productId={item.productId}
                userId={item.userId}
              />
            );
          })
        )}
      </div>

      <div>
        <div className={total}>
          <p>SUBTOTAL:</p>
          <p>$119.99</p>
        </div>

        <div className={boxBtn}>
          <Button content={'VIEW CART'} />
          <Button content={'CHECKOUT'} isPrimary={false} />
        </div>
      </div>
    </div>
  );
}

export default Cart;
