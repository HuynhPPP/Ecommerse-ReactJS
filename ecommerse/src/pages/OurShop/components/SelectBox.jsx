import styles from '../styles.module.scss';

function SelectBox({options, getValues, type}) {
  const {selectBox} = styles;
  return (
    <select className={selectBox} onChange={(e) => getValues(e.target.value, type)}>
      {options.map((option) => {
        return (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        );
      })}
    </select>
  );
}

export default SelectBox;
