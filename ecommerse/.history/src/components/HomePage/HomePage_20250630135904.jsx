import Banner from '@components/Banner/Banner';
import MyHeader from '@components/Header/Header';
import styles from './styles.module.scss';
import AdvancelHeadling from '@components/AdvancelHeadling/AdvancelHeadling';
import Infor from '@components/Infor/Infor';
import HeadingListProduct from '@components/HeadingListProduct/HeadingListProduct';
import { useEffect } from 'react';
import { getProducts } from '@/apis/productsService';

function HomePage() {
  const { container } = styles;
  useEffect(() => {
    getProducts();
  });
  return (
    <>
        <div>
          <MyHeader />
          <Banner />
          <Infor />
          <AdvancelHeadling />
          <HeadingListProduct />
          <div style={{
            height: '200px'
          }}>

          </div>
        </div>
    </>
  );
}

export default HomePage;
