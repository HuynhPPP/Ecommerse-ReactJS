import styles from './styles.module.scss';

function InputCommon({label, type, isRequired = false}) {
  const { labelInput, boxInput, container } = styles;

    const isPassword = type === 'password';

  return (
    <div className={container}>
      <div className={labelInput}>
        {label} {isRequired && <span>*</span>}
      </div>
      <div className={boxInput}>
        <input type={type} />
      </div>
    </div>
  );
}

export default InputCommon;
