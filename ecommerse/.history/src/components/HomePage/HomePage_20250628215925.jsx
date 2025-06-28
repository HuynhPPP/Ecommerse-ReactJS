import Banner from '@components/Banner/Banner';
import MyHeader from '@components/Header/Header';
import styles from './styles.module.scss';

function HomePage() {
  return (
    <>
      <div>
        <MyHeader />
        <Banner />
      </div>
    </>
  );
}

export default HomePage;
