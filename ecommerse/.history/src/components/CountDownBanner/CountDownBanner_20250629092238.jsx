import CountdownTimer from '@components/CountDownTimer/CountDownTimer';
import styles from './styles.module.scss';

function CountDownBanner() {
  const { container, containerTimer, containerMiddleBox, des, title } = styles;
  return (
    <div className={container}>
      <div className={containerTimer}>
        <CountdownTimer />
      </div>
    </div>
  );
}

export default CountDownBanner;
