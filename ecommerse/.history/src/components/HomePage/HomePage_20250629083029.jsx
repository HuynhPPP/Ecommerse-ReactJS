import Banner from '@components/Banner/Banner';
import MyHeader from '@components/Header/Header';
import styles from './styles.module.scss';
import AdvancelHeadling from '@components/AdvancelHeadling/AdvancelHeadling';
import Infor from '@components/Infor/Infor';
import MainLayout from '@components/Layout/Layout';

function HomePage() {
  const { container } = styles;
  return (
    <MainLayout>
      <div className={container}>
        <MyHeader />
        <Banner />
        <Infor />
        <AdvancelHeadling />
      </div>
    </MainLayout>
  );
}

export default HomePage;
