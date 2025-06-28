import BoxIcon from './BoxIcon/BoxIcon';
import { dataBoxIcon, dataMenu } from './constants';
import Menu from './Menu/Menu';
import styles from './styles.module.scss';

function MyHeader() {
  const { containerBoxIcon, containerMenu, containerHeader, containerBox } = styles;
  return (
    <div className={containerHeader}>
      <div className={containerBox}>
        <div className={containerBoxIcon}>
          {dataBoxIcon.map((item) => {
            return <BoxIcon type={item.type} href={item.href} />;
          })}
        </div>
        <div className={containerMenu}>
          {
            dataMenu.slice(0,3).map(item => {
              return <Menu content={item.content} href={item.href}/>;
            })
          }
        </div>
      </div>
      <div>LOGO</div>
      <div>KhOI BEN PHAI</div>
    </div>
  );
}

export default MyHeader;
