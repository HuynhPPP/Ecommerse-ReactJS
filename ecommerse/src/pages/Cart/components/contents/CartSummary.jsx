import Button from '@components/Button/Button';
import styles from '../../styles.module.scss';
import cls from 'classnames';

// Import payment method images
import visaImg from '@/assets/images/Payment/visa.jpeg';
import masterCardImg from '@/assets/images/Payment/master-card.jpeg';
import paypalImg from '@/assets/images/Payment/paypal.jpeg';
import americanExpressImg from '@/assets/images/Payment/american-express.jpeg';
import maestroImg from '@/assets/images/Payment/maestro.jpeg';
import bitcoinImg from '@/assets/images/Payment/bitcoin.jpeg';

function CartSummary() {
  const {
    containerSummary,
    title,
    boxTotal,
    subTotal,
    price,
    totals,
    space,
    containerMethod,
    titleMethod,
    containerRight,
    ImgpaymentMethods,
    boxImgMethods,
    textSecure,
  } = styles;

  // Payment methods data
  const paymentMethodsList = [
    { id: 1, name: 'Visa', image: visaImg },
    { id: 2, name: 'MasterCard', image: masterCardImg },
    { id: 3, name: 'PayPal', image: paypalImg },
    { id: 4, name: 'American Express', image: americanExpressImg },
    { id: 5, name: 'Maestro', image: maestroImg },
    { id: 6, name: 'Bitcoin', image: bitcoinImg },
  ];

  return (
    <>
      <div className={containerRight}>
        <div className={containerSummary}>
          <div className={title}>CART TOTALS</div>

          <div className={cls(boxTotal, subTotal)}>
            <div>SUBTOTAL</div>
            <div className={price}>$2.093.40</div>
          </div>

          <div className={cls(boxTotal, totals)}>
            <div>TOTAL</div>
            <div>$2.093.40</div>
          </div>

          <Button content={'PROCEED TO CHECKOUT'} />
          <div className={space}></div>
          <Button content={'CONTINUE SHOPPING'} isPrimary={false} />
        </div>

        <div className={containerMethod}>
          <div className={titleMethod}>
            Guaranteed <span>Safe</span> checkout
          </div>
          <div className={boxImgMethods}>
            {paymentMethodsList.map((method) => (
              <img
                key={method.id}
                src={method.image}
                alt={method.name}
                title={method.name}
                className={ImgpaymentMethods}
              />
            ))}
          </div>
        </div>
        <div className={textSecure}>Your Payment is 100% Secure</div>
      </div>
    </>
  );
}

export default CartSummary;
