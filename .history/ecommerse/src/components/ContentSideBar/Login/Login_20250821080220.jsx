import InputCommon from '@components/InputCommon/InputCommon';
import styles from './styles.module.scss';
import Button from '@components/Button/Button';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function Login() {
  const { container, title, boxRememberMe, lostPassword } = styles;

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email').required('Email is required')
    })
  }) 

  return (
    <div className={container}>
      <div className={title}>SIGN IN</div>

      <InputCommon label='Email' type='text' isRequired />
      <InputCommon label='Password' type='password' isRequired />

      <div className={boxRememberMe}>
        <input type='checkbox' />
        <span>Remember me</span>
      </div>

      <Button content='LOGIN' />

      <div className={lostPassword}>Lost your password ?</div>
    </div>
  );
}

export default Login;
