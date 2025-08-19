import HeaderSideBar from '@components/ContentSideBar/components/HeaderSideBar/HeaderSideBar';
import { TfiReload } from 'react-icons/tfi';
import styles from './styles.module.scss';

function Compare() {
  const { container } = styles;

  return (
    <div className={container}>
      <HeaderSideBar
        icon={<TfiReload style={{ fontSize: '30px' }} />}
        title='COMPARE'
      />
    </div>
  );
}

export default Compare;
