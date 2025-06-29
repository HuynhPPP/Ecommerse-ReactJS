import MainLayout from '@components/Layout/Layout';
import styles from './styles.module.scss';

function AdvancelHeadling() {
  const { container, headline } = styles;
  return (
    <MainLayout>
      <div className={container}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </MainLayout>
  );
}

export default AdvancelHeadling;
