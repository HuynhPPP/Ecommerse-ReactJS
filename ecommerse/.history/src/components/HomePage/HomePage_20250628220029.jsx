import Banner from '@components/Banner/Banner';
import MyHeader from '@components/Header/Header';
import styles from './styles.module.scss';

function HomePage() {
  const { containerHeader } = styles;
  return (
    <>
      <div>
        <div>
          <MyHeader />
          <Banner />
        </div>
      </div>
    </>
  );
}

export default HomePage;
