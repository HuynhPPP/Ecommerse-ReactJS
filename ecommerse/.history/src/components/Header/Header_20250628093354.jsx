import BoxIcon from './BoxIcon/BoxIcon';
import { dataBoxIcon } from './constants';
import styles from './styles.module.scss';

function MyHeader() {
  return (
    <div>
      <div>
        <div className={styles.containerBoxIcon}>
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
