import CountdownTimer from '@components/CountDownTimer/CountDownTimer';
import styles from './styles.module.scss';
import Button from '@components/Button/Button';

function CountDownBanner() {
  const { container, containerTimer, title } = styles;
  const targetDate = '2025-12-31T00:00:00';

  return (
    <div className={container}>
      <div className={containerTimer}>
        <CountdownTimer targetDate={targetDate} />
      </div>
      <p className={title}>The classics make a comeback</p>
      <div>
        <Button />
      </div>
    </div>
  );
}

export default CountDownBanner;
