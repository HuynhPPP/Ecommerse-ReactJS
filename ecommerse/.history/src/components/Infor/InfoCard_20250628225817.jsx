import styles from './styles.module.scss';
import truckIcon from '@icons/svgs/truckIcon.svg';

function InfoCard() {
    const { containerCard } = styles;
    return <div className={containerCard}>
        <img src={truckIcon} alt="" />
    </div>;
}

export default InfoCard;