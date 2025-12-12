import styles from './styles.module.scss';

function InputCustom({
  label,
  isShowLabel = true,
  placeholder,
  type,
  isRequired = false,
  dataOption,
  register,
}) {
  const { container, labelcls } = styles;

  const renderInput = () => {
    switch (type) {
      case 'text':
        return (
          <input
            type={type}
            placeholder={placeholder}
            required={isRequired}
            {...register}
          />
        );
      case 'email':
        return (
          <input type={type} placeholder={placeholder} required={isRequired} />
        );
      case 'password':
        return (
          <input
            type={type}
            placeholder={placeholder}
            required={isRequired}
            {...register}
          />
        );
      case 'select':
        return (
          <select required={isRequired} {...register}>
            <option value='' selected disabled hidden>
              {label}
            </option>
            {dataOption.map((item, index) => (
              <option key={index} value={item.value} {...register}>
                {item.label}
              </option>
            ))}
          </select>
        );
      default:
        return (
          <input type='text' placeholder={placeholder} required={isRequired} />
        );
    }
  };

  return (
    <div className={container}>
      {isShowLabel && (
        <label className={labelcls}>
          {label} {isRequired && <span>*</span>}
        </label>
      )}
      {renderInput()}
    </div>
  );
}

export default InputCustom;
