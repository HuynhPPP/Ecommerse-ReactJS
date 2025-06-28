import { dataInfo } from '@components/Infor/constants';
import InfoCard from '@components/Infor/InfoCard';
import MainLayout from '@components/Layout/Layout';
import styles from './styles.module.scss';

function Infor() {
  const { container } = styles;
  return (
    <div>
      <MainLayout>
        <div  className={container}> 
          {dataInfo.map((item) => {
            return <InfoCard />;
          })}
        </div>
      </MainLayout>
    </div>
  );
}

export default Infor;
