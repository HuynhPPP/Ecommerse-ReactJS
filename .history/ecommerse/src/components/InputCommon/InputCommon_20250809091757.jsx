import styles from './styles.module.scss';

function InputCommon() {
    const {labelInput, BoxInput} = styles
    return <div>
        <div className={labelInput}>Username or email</div>
        <div className={BoxInput}>
            <input type="text" name="" id="" />
        </div>
    </div>;
}

export default InputCommon;