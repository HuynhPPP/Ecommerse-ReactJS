import { dataInfo } from '@components/Infor/constants';
import InfoCard from '@components/Infor/InfoCard';
import MainLayout from '@components/Layout/Layout';

function Infor() {
  return (
    <div>
      <MainLayout>
        <div>
            {dataInfo.map((item) => {
                return <InfoCard />
            })}
        </div>
      </MainLayout>
    </div>
  );
}

export default Infor;
