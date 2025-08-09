import InputCommon from '@components/InputCommon/InputCommon';
import styles from './styles.module.scss';

function Login() {
  const { container, title } = styles;
  return (
    <div className={container}>
      <div className={title}>SIGN IN</div>

      <InputCommon />
    </div>
  );
}

export default Login;
