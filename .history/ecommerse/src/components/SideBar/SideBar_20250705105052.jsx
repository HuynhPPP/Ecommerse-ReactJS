import { useContext } from 'react';
import styles from './styles.module.scss';
import { SideBarContext } from '@/contexts/SideBarProvider';
import classNames from 'classnames';
import { TfiClose } from 'react-icons/tfi';

function SideBar() {
  const { container, overplay, sidebar, slideSideBar, boxIcon } = styles;
  const { isOpen, setIsOpen } = useContext(SideBarContext);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={container}>
      <div
        className={classNames({
          [overplay]: isOpen,
        })}
        onClick={handleToggle}
      ></div>
      <div
        className={classNames(sidebar, {
          [slideSideBar]: isOpen,
        })}
      >
        {isOpen && (
          <div className={boxIcon} onClick={handleToggle}>
            <TfiClose />
          </div>
        )}
        SideBar
      </div>
    </div>
  );
}

export default SideBar;
