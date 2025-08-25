import { useState } from 'react';
import styles from './styles.module.scss';
import { FiEye } from 'react-icons/fi';
import { FiEyeOff } from 'react-icons/fi';

function InputCommon({ label, type, isRequired = false, ...props }) {
  const { labelInput, boxInput, boxIcon, container, errMsg } = styles;
  const isPassword = type === 'password';
  const [showPassword, setShowPassword] = useState(false);
  const { formik, id } = props;
  const isShowTextPassword =
    type === 'password' && showPassword ? 'text' : type;

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const isErr = formik.touched[id] && formik.errors[id];

  console.log(props);

  return (
    <div className={container}>
      <div className={labelInput}>
        {label} {isRequired && <span>*</span>}
      </div>
      <div className={boxInput}>
        <input
          type={isShowTextPassword}
          {...props}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {isPassword && (
          <div className={boxIcon} onClick={handleShowPassword}>
            {showPassword ? <FiEyeOff /> : <FiEye />}
          </div>
        )}
        <div className={errMsg}>err</div>
      </div>
    </div>
  );
}

export default InputCommon;
