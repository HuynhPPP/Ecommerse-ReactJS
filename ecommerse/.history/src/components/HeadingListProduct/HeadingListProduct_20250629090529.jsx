import MainLayout from '@components/Layout/Layout';
import styles from './styles.module.scss';
import CountdownTimer from '@components/CountDownTimer/CountDownTimer';

function HeadingListProduct() {
  const { container, headline, containerMiddleBox, des, title } = styles;
    const targetDate = '2025-12-31T00:00:00'

  return <MainLayout>
    <CountdownTimer />
  </MainLayout>;
}

export default HeadingListProduct;
