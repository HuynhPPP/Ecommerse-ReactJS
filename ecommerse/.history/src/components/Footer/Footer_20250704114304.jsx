import styles from './styles.module.scss';
import Logo from '@icons/images/Logo-retina.png';

function MyFooter() {
  const { container } = styles;
  return (
    <div className={container}>
      <img src={Logo} alt='' />
    </div>
  );
}

export default MyFooter;
