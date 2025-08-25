import HeaderSideBar from '@components/ContentSideBar/components/HeaderSideBar/HeaderSideBar';
import { PiShoppingCart } from 'react-icons/pi';
import styles from './styles.module.scss';
import ItemProduct from '@components/ContentSideBar/components/ItemProduct/ItemProduct';

function Cart() {
  const { container, boxContent } = styles;

  return (
    <div className={container}>
      <div>
        <HeaderSideBar
          icon={<PiShoppingCart style={{ fontSize: '30px' }} />}
          title='CART'
        />

        <ItemProduct />
      </div>

      <div>
        <div>
            <p>SUBTOTAL:</p>
            <p>$119.99</p>
        </div>
      </div>
    </div>
  );
}

export default Cart;
