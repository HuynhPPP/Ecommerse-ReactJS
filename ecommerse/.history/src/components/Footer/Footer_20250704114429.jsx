import styles from './styles.module.scss';
import Logo from '@icons/images/marseille-logo-footer.png';

function MyFooter() {
  const { container } = styles;
  return (
    <div className={container}>
      <img src={Logo} alt='' width={160} height={55} />
    </div>
  );
}

export default MyFooter;
