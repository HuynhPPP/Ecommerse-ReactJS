import HeaderSideBar from '@components/ContentSideBar/components/HeaderSideBar/HeaderSideBar';
import { CiHeart } from 'react-icons/ci';
import styles from './styles.module.scss';
import ItemProduct from '@components/ContentSideBar/components/ItemProduct/ItemProduct';
import Button from '@components/Button/Button';

function WishList() {
  const { container } = styles;

  return (
    <div className={container}>
      <div>
        <HeaderSideBar
          icon={
            <CiHeart
              style={{
                fontSize: '30px',
              }}
            />
          }
          title='WISHLIST'
        />
        <ItemProduct />
      </div>

      <div>
        <Button content={'VIEW WISHLIST'} />
        <Button content={'ADD ALL TO CART'} isPrimary={false}/>
      </div>
    </div>
  );
}

export default WishList;
