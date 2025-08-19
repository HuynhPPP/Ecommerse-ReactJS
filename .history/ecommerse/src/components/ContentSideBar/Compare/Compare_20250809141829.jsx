import HeaderSideBar from '@components/ContentSideBar/components/HeaderSideBar';
import { TfiReload } from 'react-icons/tfi';
import styles from './styles.module.scss';

function Compare() {
    const {container} = styles;

  return (
    <div>
      <HeaderSideBar icon={<TfiReload />} title='Compare' />
    </div>
  );
}

export default Compare;
