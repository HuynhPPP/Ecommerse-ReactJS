import { TfiReload } from 'react-icons/tfi';
import styles from './styles.module.scss';

function HeaderSideBar({icon, title}) {
  const { container } = styles;

  return (
    <div className={container}>
      <TfiReload />
      <div>COMPARE</div>
    </div>
  );
}

export default HeaderSideBar;
