import Banner from '@components/Banner/Banner';
import MyHeader from '@components/Header/Header';
import styles from './styles.module.scss';
import AdvancelHeadling from '@components/AdvancelHeadling/AdvancelHeadling';
import Infor from '@components/Infor/Infor';
import HeadingListProduct from '@components/HeadingListProduct/HeadingListProduct';
import { useEffect, useState } from 'react';
import { getProducts } from '@/apis/productsService';
import PopularProduct from '@components/PopularProduct/PopularProduct';

function HomePage() {

  const [listProducts, setListProducts] = useState([]);

  useEffect(() => {
    getProducts().then((res) => {
      setListProducts(res.contents);
    });
  }, []);

  console.log(listProducts, 'listProducts')

  return (
    <>
      <div>
        <MyHeader />
        <Banner />
        <Infor />
        <AdvancelHeadling />
        <HeadingListProduct />
        <PopularProduct />
        <div
          style={{
            height: '200px',
          }}
        ></div>
      </div>
    </>
  );
}

export default HomePage;
