import { useContext } from 'react';
import styles from './styles.module.scss';
import { SideBarContext } from '@/contexts/SideBarProvider';
import classNames from 'classnames';
import { TfiClose } from 'react-icons/tfi';
import Login from '@components/ContentSideBar/Login/Login';

function SideBar() {
  const { container, overplay, sidebar, slideSideBar, boxIcon } = styles;
  const { isOpen, setIsOpen, type } = useContext(SideBarContext);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleRenderContent = () => {
    switch (type) {
      case 'login':
        return <Login />;
        case 'login':
        return <Login />;case 'login':
        return <Login />;case 'login':
        return <Login />;
    
      default:
        break;
    }
  }

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
        <Login />
      </div>
    </div>
  );
}

export default SideBar;
