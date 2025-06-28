import styles from './styles.module.scss';

function Banner() {
  const { container, content, title, descreption } = styles;
  return (
    <div className={container}>
      <div className={content}>
        <h1 className={title}>XStore Marseille04 Demo</h1>
        <div className={descreption}>
          Make yours celebrations even more special this years with beautiful.
        </div>
        <button>Go to shop</button>
      </div>
    </div>
  );
}

export default Banner;
