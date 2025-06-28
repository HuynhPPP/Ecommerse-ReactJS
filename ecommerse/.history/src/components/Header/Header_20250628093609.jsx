import BoxIcon from './BoxIcon/BoxIcon';
import { dataBoxIcon, dataMenu } from './constants';
import styles from './styles.module.scss';

function MyHeader() {
  const { containerBoxIcon, containerMenu } = styles;
  return (
    <div>
      <div>
        <div className={containerBoxIcon}>
          {dataBoxIcon.map((item) => {
            return <BoxIcon type={item.type} href={item.href} />;
          })}
        </div>
        <div className={containerMenu}>
          {
            dataMenu.map(item => {
              return <div></div>;
            })
          }
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
}

export default MyHeader;
