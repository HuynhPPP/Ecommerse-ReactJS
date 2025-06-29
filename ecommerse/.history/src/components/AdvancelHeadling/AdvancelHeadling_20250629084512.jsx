import MainLayout from '@components/Layout/Layout';
import styles from './styles.module.scss';

function AdvancelHeadling() {
  const { container, headline, containerMiddleBox, des, title } = styles;
  return (
    <MainLayout>
      <div className={container}>
        <div className={headline}></div>
        <div className={containerMiddleBox}>TEST</div>
        <div className={headline}></div>
      </div>
    </MainLayout>
  );
}

export default AdvancelHeadling;
