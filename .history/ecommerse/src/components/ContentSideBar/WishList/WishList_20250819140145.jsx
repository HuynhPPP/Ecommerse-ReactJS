import HeaderSideBar from '@components/ContentSideBar/components/HeaderSideBar/HeaderSideBar';
import { CiHeart } from 'react-icons/ci';

function WishList() {
  return (
    <div>
      <HeaderSideBar icon={<CiHeart style={{
        fontSize: '30px'
      }} />} />
    </div>
  );
}

export default WishList;
