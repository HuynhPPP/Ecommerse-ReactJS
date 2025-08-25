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
      email: Yup.string().email('Invalid email').required('Email is required'),
      password: Yup.string()
        .min(6, 'Password must be at least at 6 characters')
        .required('Password is required'),
    }),
  });

  console.log(formik.errors);

  return (
    <div className={container}>
      <div className={title}>SIGN IN</div>

      <form>
        <InputCommon
          id='email'
          label='Email'
          type='text'
          isRequired
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.email}
          formik={formik}
        />
        {formik.errors.email && formik.touched.email && (
          <div className={styles.error}>{formik.errors.email}</div>
        )}

        <InputCommon
          id='password'
          label='Password'
          type='password'
          isRequired
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.password}
          formik={formik}
        />
        {formik.errors.password && formik.touched.password && (
          <div className={styles.error}>{formik.errors.password}</div>
        )}

        <div className={boxRememberMe}>
          <input type='checkbox' />
          <span>Remember me</span>
        </div>

        <Button content='LOGIN' />
      </form>

      <div className={lostPassword}>Lost your password ?</div>
    </div>
  );
}

export default Login;
