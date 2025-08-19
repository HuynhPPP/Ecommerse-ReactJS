import { useContext } from 'react';
import styles from '../styles.module.scss';
import { SideBarContext } from 'src/contexts/SideBarProvider';

function Menu({ content, href, setIsOpen }) {
  const { menu } = styles;
  const { setIsOpen, setType } = useContext(SideBarContext);

  const handleClickShowLogin = () => {
    if (content === 'Sign in') {
      setIsOpen(true);
      setType('login');
    }
  };

  return (
    <div className={menu} onClick={() => setIsOpen(true)}>
      {content}
    </div>
  );
}

export default Menu;
