import { dataMenu } from '@components/Footer/constant';
import styles from './styles.module.scss';
import Logo from '@icons/images/marseille-logo-footer.png';
import Logo from '@icons/images/payment-method-img.png';

function MyFooter() {
  const { container, boxNav } = styles;
  return (
    <div className={container}>
      <div>
        <img src={Logo} alt='' width={160} height={55} />
      </div>

      <div className={boxNav}>
        {dataMenu.map((item) => (
          <div>{item.content}</div>
        ))}
      </div>
    </div>
  );
}

export default MyFooter;
