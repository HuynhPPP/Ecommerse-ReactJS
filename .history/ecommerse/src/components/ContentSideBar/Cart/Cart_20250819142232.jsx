import HeaderSideBar from '@components/ContentSideBar/components/HeaderSideBar/HeaderSideBar';
import { PiShoppingCart } from 'react-icons/pi';
import styles from './styles.module.scss';

function Cart() {
  const { container, boxContent } = styles;

  return (
    <div>
      <HeaderSideBar
        icon={<PiShoppingCart style={{ fontSize: '30px' }} />}
        title='CART'
      />
    </div>
  );
}

export default Cart;
