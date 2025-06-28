import styles from '../styles.module.scss';
import fbIcon from '@icons/svgs/fbIcon.svg';

function BoxIcon({ type, href }) {
  const { boxIcon } = styles;
  const handleRenderIcon = (type) => {
    switch (type) {
      case 'fb':
        return fbIcon
        break;
    
      default:
        break;
    }
  }

  return <div className={boxIcon}>
    <img src={fbIcon} alt={type} />
  </div>;
}

export default BoxIcon;
