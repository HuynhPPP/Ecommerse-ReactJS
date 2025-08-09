import InputCommon from '@components/InputCommon/InputCommon';
import styles from './styles.module.scss';

function Login() {
  const { container, title, boxRememberMe } = styles;
  return (
    <div className={container}>
      <div className={title}>SIGN IN</div>

      <InputCommon label='Email' type='text' isRequired />
      <InputCommon label='Password' type='password' isRequired />

      <div className={boxRememberMe}>
        <input type="checkbox" />
        <span>Remember me</span>
      </div>
    </div>
  );
}

export default Login;
