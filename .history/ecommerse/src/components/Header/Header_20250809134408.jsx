import BoxIcon from './BoxIcon/BoxIcon';
import Logo from '@icons/images/Logo-retina.png';
import heartIcon from '@icons/svgs/heart.svg';
import { CiHeart } from 'react-icons/ci';
import reLoadIcon from '@icons/svgs/reloadIcon.svg';
import { TfiReload } from 'react-icons/tfi';
import cartIcon from '@icons/svgs/cartIcon.svg';
import { PiShoppingCartThin } from 'react-icons/pi';
import { dataBoxIcon, dataMenu } from './constants';
import Menu from './Menu/Menu';
import styles from './styles.module.scss';
import useScrollHandling from '@/hooks/useScrollHandling';
import { useContext, useEffect, useState } from 'react';
import classNames from 'classnames';
import { SideBarContext } from '@/contexts/SideBarProvider';

function MyHeader() {
  const {
    containerBoxIcon,
    containerMenu,
    containerHeader,
    containerBox,
    container,
    fixedHeader,
    topHeader,
  } = styles;
  const { scrollPosition } = useScrollHandling();
  const [fixedPosition, setFixedPosition] = useState(false);

  const { isOpen, setIsOpen } = useContext(SideBarContext);

  useEffect(() => {
    setFixedPosition(scrollPosition > 80);
  }, [scrollPosition]);

  return (
    <div
      className={classNames(container, topHeader, {
        [fixedHeader]: fixedPosition,
      })}
    >
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
              return (
                <Menu
                  content={item.content}
                  href={item.href}
                  setIsOpen={setIsOpen}
                />
              );
            })}
          </div>
          <div className={containerBoxIcon}>
            <TfiReload
              style={{
                fontSize: '20px',
              }}
            />
            <CiHeart
              style={{
                fontSize: '20px',
              }}
            />
            <PiShoppingCartThin
              style={{
                fontSize: '20px',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyHeader;
