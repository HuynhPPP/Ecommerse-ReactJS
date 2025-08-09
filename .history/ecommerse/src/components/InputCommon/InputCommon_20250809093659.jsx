import { useState } from 'react';
import styles from './styles.module.scss';
import { FiEye } from 'react-icons/fi';
import { FiEyeOff } from "react-icons/fi";

function InputCommon({ label, type, isRequired = false }) {
  const { labelInput, boxInput, boxIcon, container } = styles;
  const isPassword = type === 'password';
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={container}>
      <div className={labelInput}>
        {label} {isRequired && <span>*</span>}
      </div>
      <div className={boxInput}>
        <input type={type} />
        {isPassword && (
          <div className={boxIcon}>
            {showPassword ? : <FiEye />}
          </div>
        )}
      </div>
    </div>
  );
}

export default InputCommon;
