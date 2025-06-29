import Banner from '@components/Banner/Banner';
import MyHeader from '@components/Header/Header';
import styles from './styles.module.scss';
import AdvancelHeadling from '@components/AdvancelHeadling/AdvancelHeadling';

function HomePage() {
  const { container } = styles;
  return (
    <>
      <div>
        <div className={container}>
          <MyHeader />
          <Banner />
          <AdvancelHeadling />
        </div>
      </div>
    </>
  );
}

export default HomePage;
