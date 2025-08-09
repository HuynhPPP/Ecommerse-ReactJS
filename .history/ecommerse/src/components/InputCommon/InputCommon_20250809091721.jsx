import styles from './styles.module.scss';

function InputCommon() {
    const {LabelInput, BoxInput} = styles
    return <div>
        <div className={LabelInput}>Username or email</div>
        <div className={BoxInput}>
            <input type="text" name="" id="" />
        </div>
    </div>;
}

export default InputCommon;