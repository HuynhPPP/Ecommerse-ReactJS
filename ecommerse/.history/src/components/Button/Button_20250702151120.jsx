import styles from './styles.module.scss';
import classNames from 'classnames';

function Button({ content }) {
  const { btn, primaryBtn, secondaryBtn } = styles;
  return <button className={classNames}>{content}</button>;
}

export default Button;
