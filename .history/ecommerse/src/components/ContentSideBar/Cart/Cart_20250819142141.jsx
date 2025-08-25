import HeaderSideBar from '@components/ContentSideBar/components/HeaderSideBar/HeaderSideBar';
import { PiShoppingCart } from "react-icons/pi";
import styles from './styles.module.scss';

function Cart() {
    const { container, boxContent } = styles;

    return <div>
        <HeaderSideBar icon={<PiShoppingCart />}/>
    </div>;
}

export default Cart;