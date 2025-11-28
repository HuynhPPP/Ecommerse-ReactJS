import MyFooter from '@components/Footer/Footer';
import Headers from '@components/Header/Header';
import Contents from './components/contents/Contents';
import Steps from './components/steps/Steps';
import styles from './styles.module.scss';
import MainLayout from '@components/Layout/Layout';

function Cart() {
  const { container } = styles;
  return (
    <>
      <Headers />
      <div className={container}>
        <Steps />
        <MainLayout>
          <Contents />
        </MainLayout>
      </div>
      <MyFooter />
    </>
  );
}

export default Cart;
