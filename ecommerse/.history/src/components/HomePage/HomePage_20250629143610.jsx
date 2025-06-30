import Banner from '@components/Banner/Banner';
import MyHeader from '@components/Header/Header';
import styles from './styles.module.scss';
import AdvancelHeadling from '@components/AdvancelHeadling/AdvancelHeadling';
import Infor from '@components/Infor/Infor';
import HeadingListProduct from '@components/HeadingListProduct/HeadingListProduct';

function HomePage() {
  const { container } = styles;
  return (
    <>
        <div className={container}>
          <MyHeader />
          <Banner />
          <Infor />
          <AdvancelHeadling />
          <HeadingListProduct />
          <div style={{
            height
          }}>

          </div>
        </div>
    </>
  );
}

export default HomePage;
