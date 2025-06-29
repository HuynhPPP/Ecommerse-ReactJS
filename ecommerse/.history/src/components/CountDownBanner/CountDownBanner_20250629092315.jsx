import CountdownTimer from '@components/CountDownTimer/CountDownTimer';
import styles from './styles.module.scss';

function CountDownBanner() {
  const { container, containerTimer, containerMiddleBox, des, title } = styles;
const targetDate = '2025-12-31T00:00:00';

  return (
    <div className={container}>
      <div className={containerTimer}>
        <CountdownTimer targetDate={targetDate}/>
      </div>
    </div>
  );
}

export default CountDownBanner;
