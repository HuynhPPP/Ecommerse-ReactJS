import styles from './styles.module.scss';

function Banner() {
  const { container } = styles;
  return (
    <div className={container}>
      <div>
        <h1>XStore Marseille04 Demo</h1>
        <div>Make yours celebrations even more special this years with beautiful.
</div>
      </div>
    </div>
  );
}

export default Banner;
