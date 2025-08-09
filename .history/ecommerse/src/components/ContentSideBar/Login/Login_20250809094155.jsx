import InputCommon from '@components/InputCommon/InputCommon';
import styles from './styles.module.scss';

function Login() {
  const { container, title } = styles;
  return (
    <div className={container}>
      <div className={title}>SIGN IN</div>

      <InputCommon label='Email' type='text' isRequired />
      <InputCommon label='Password' type='password' isRequired />

      <div className={}>
        <input type="checkbox" />
        <span>Remember me</span>
      </div>
    </div>
  );
}

export default Login;
