import CartSummary from '@/pages/Cart/components/contents/CartSummary';
import styles from '../../styles.module.scss';
import CartTable from './CartTable';

function Contents() {
  const { containerContents, cartTableWrapper, cartSummaryWrapper } = styles;
  return (
    <div className={containerContents}>
      <div className={cartTableWrapper}>
        <CartTable />
      </div>
      <div className={cartSummaryWrapper}>
        <CartSummary />
      </div>
    </div>
  );
}

export default Contents;
