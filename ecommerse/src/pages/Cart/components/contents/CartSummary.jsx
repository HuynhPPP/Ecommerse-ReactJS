import Button from '@components/Button/Button';
import styles from '../../styles.module.scss';
import cls from 'classnames';
import { useContext } from 'react';
import { SideBarContext } from '@/contexts/SideBarProvider';
import LoadingCart from '@/pages/Cart/components/LoadingCart';
import PaymentMethod from '@components/PaymentMethod/PaymentMethod';

function CartSummary() {
  const {
    containerSummary,
    title,
    boxTotal,
    subTotal,
    price,
    totals,
    space,
    containerRight,
  } = styles;

  const { listProductCart, isLoadingProductCart } = useContext(SideBarContext);

  const total = listProductCart.reduce((acc, item) => {
    return acc + item.total;
  }, 0);

  return (
    <>
      <div className={containerRight}>
        <div className={containerSummary}>
          <div className={title}>CART TOTALS</div>

          <div className={cls(boxTotal, subTotal)}>
            <div>SUBTOTAL</div>
            <div className={price}>${total.toFixed(2)}</div>
          </div>

          <div className={cls(boxTotal, totals)}>
            <div>TOTAL</div>
            <div>${total.toFixed(2)}</div>
          </div>

          <Button content={'PROCEED TO CHECKOUT'} />
          <div className={space}></div>
          <Button content={'CONTINUE SHOPPING'} isPrimary={false} />
          {isLoadingProductCart && <LoadingCart />}
        </div>

        <PaymentMethod />
      </div>
    </>
  );
}

export default CartSummary;
