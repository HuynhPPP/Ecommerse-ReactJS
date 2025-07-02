import Button from '@components/Button/Button';
import styles from './styles.module.scss';

function SaleHomePage() {
  const { container, title } = styles;
  return (
    <div className={container}>
      <div>
        <img
          src='https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_1.jpeg'
          alt=''
        />
      </div>
      <div>
        <h2 className={title}>Sale of the year</h2>
        <p>
          Libero sed faucibus facilisis fermentum. Est nibh sed massa sodales.
        </p>
        <div>
          <Button content={'Read more'} isPrimary={false} />
        </div>
      </div>
      <div>
        <img
          src='https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_2.jpeg'
          alt=''
        />
      </div>
    </div>
  );
}

export default SaleHomePage;
