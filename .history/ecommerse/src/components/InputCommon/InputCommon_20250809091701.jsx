import styles from './styles.module.scss';

function InputCommon() {
    const {LabelInput} = styles
    return <div>
        <div className={LabelInput}>Username or email</div>
        <div>
            <input type="text" name="" id="" />
        </div>
    </div>;
}

export default InputCommon;