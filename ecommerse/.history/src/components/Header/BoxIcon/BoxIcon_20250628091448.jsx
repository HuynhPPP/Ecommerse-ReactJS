import styles from '../styles.module.scss';

function BoxIcon({ type, href }) {
  const { boxIcon } = styles;

  return <div className={boxIcon}></div>;
}

export default BoxIcon;
