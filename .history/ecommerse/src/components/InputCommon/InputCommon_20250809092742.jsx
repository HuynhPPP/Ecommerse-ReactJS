import styles from './styles.module.scss';

function InputCommon(label, type, isRequired = false) {
  const { labelInput, boxInput, container } = styles;
  return (
    <div className={container}>
      <div className={labelInput}>
        {label} {isRequired && <span>*</span>}
      </div>
      <div className={boxInput}>
        <input type='text' name='' id='' />
      </div>
    </div>
  );
}

export default InputCommon;
