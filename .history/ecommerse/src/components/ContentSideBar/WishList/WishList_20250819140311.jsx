import HeaderSideBar from '@components/ContentSideBar/components/HeaderSideBar/HeaderSideBar';
import { CiHeart } from 'react-icons/ci';
import styles from './styles.module.scss';

function WishList() {
  const { container } = styles;

  return (
    <div className={container}>
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
    </div>
  );
}

export default WishList;
