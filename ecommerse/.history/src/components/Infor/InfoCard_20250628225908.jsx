import styles from './styles.module.scss';
import truckIcon from '@icons/svgs/truckIcon.svg';

function InfoCard() {
    const { containerCard } = styles;
    return <div className={containerCard}>
        <img width={40} height={41} src={truckIcon} alt="truckIcon" />

        <div>
            <span>Fastest Shipping</span>
            <span>Order at $39 order</span>
        </div>
    </div>;
}

export default InfoCard;