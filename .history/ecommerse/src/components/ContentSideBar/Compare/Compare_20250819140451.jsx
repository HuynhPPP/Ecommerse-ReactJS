import HeaderSideBar from '@components/ContentSideBar/components/HeaderSideBar/HeaderSideBar';
import { TfiReload } from 'react-icons/tfi';
import styles from './styles.module.scss';
import ItemProduct from '@components/ContentSideBar/components/ItemProduct/ItemProduct';
import Button from '@components/Button/Button';

function Compare() {
  const { container } = styles;

  return (
    <div className={container}>
      <HeaderSideBar
        icon={<TfiReload style={{ fontSize: '30px' }} />}
        title='COMPARE'
      />
      <ItemProduct />

      <div>
        <Button content={'VIEW COMPARE'} />
      </div>
    </div>
  );
}

export default Compare;
