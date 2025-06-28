import BoxIcon from './BoxIcon/BoxIcon';
import { dataBoxIcon } from './constants';

function MyHeader() {
  return (
    <div>
      <div>
        <div>
          {dataBoxIcon.map((item) => {
            return <BoxIcon type={item.type} href={item.href} />;
          })}
        </div>
        <div></div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
}

export default MyHeader;
