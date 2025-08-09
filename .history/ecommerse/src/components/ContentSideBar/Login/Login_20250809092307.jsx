import InputCommon from '@components/InputCommon/InputCommon';
import styles from './styles.module.scss';

function Login() {
  const { container } = styles;
  return (
    <div className={container}>
      <div>SIGN IN</div>

      <InputCommon />
    </div>
  );
}

export default Login;
