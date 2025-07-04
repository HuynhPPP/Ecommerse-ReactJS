import { dataMenu } from '@components/Footer/constant';
import styles from './styles.module.scss';
import Logo from '@icons/images/marseille-logo-footer.png';

function MyFooter() {
  const { container, boxNav } = styles;
  return (
    <div className={container}>
      <img src={Logo} alt='' width={160} height={55} />
      <div className={boxNav}>
        {dataMenu.map((item) => (
            <div>{item.content}</div>
        ))}
      </div>
    </div>
  );
}

export default MyFooter;
