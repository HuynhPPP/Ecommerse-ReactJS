import BoxIcon from './BoxIcon/BoxIcon';
import Logo from '@icons/images/Logo-retina.png';
import { dataBoxIcon, dataMenu } from './constants';
import Menu from './Menu/Menu';
import styles from './styles.module.scss';

function MyHeader() {
  const { containerBoxIcon, containerMenu, containerHeader, containerBox } =
    styles;
  return (
    <div className={containerHeader}>
      <div className={containerBox}>
        <div className={containerBoxIcon}>
          {dataBoxIcon.map((item) => {
            return <BoxIcon type={item.type} href={item.href} />;
          })}
        </div>
        <div className={containerMenu}>
          {dataMenu.slice(0, 3).map((item) => {
            return <Menu content={item.content} href={item.href} />;
          })}
        </div>
      </div>
      <div>
        <img
          src={Logo}
          alt='Logo'
          style={{
            width: '153px',
            height: '53px',
          }}
        />
      </div>
      <div className={containerBox}>
        <div className={containerMenu}>
          {dataMenu.slice(3, dataMenu.length).map((item) => {
            return <Menu content={item.content} href={item.href} />;
          })}
        </div>
        <div className={containerBoxIcon}>
          {dataBoxIcon.map((item) => {
            return <BoxIcon type={item.type} href={item.href} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default MyHeader;
