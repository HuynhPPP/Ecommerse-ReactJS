import styles from '../styles.module.scss';
import fbIcon from '@icons/svgs/fbIcon.svg';
import ytbIcon from '@icons/svgs/ytbIcon.svg';
import insIcon from '@icons/svgs/insIcon.svg';
import heart from '@icons/svgs/heart.svg';
import reload from '@icons/svgs/reload.svg';
import cart from '@icons/svgs/cart.svg';

function BoxIcon({ type, href }) {
  const { boxIcon } = styles;
  const handleRenderIcon = (type) => {
    switch (type) {
      case 'fb':
        return fbIcon;
      case 'ytb':
        return ytbIcon;
      case 'ins':
        return insIcon;
        case 'fb':
        return fbIcon;
      case 'ytb':
        return ytbIcon;
      case 'ins':
        return insIcon;
    }
  };

  return (
    <div className={boxIcon}>
      <img src={handleRenderIcon(type)} alt={type} />
    </div>
  );
}

export default BoxIcon;
