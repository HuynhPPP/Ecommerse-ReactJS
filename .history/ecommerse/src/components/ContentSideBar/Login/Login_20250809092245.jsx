import InputCommon from "@components/InputCommon/InputCommon";
import styles from './styles.module.scss';

function Login() {
    const { labelInput, boxInput, container } = styles;
    return <div>
        <div>SIGN IN</div>

        <InputCommon />
    </div>;
}

export default Login;