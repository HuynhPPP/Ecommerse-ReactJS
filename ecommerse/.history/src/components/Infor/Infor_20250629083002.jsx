import { dataInfo } from '@components/Infor/constants';
import InfoCard from '@components/Infor/InfoCard';
import MainLayout from '@components/Layout/Layout';
import styles from './styles.module.scss';

function Infor() {
  const { container } = styles;
  return (
      <div className={container}>
        {dataInfo.map((item) => {
          return (
            <InfoCard
              content={item.title}
              src={item.src}
              descreption={item.descreption}
            />
          );
        })}
      </div>
  );
}

export default Infor;
