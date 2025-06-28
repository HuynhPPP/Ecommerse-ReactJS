import styles from './styles.module.scss';
import truckIcon from '@icons/svgs/truckIcon.svg';

function InfoCard() {
    const { containerCard } = styles;
    return <div className={containerCard}>
        <img width={40} height={41} src={truckIcon} alt="truckIcon" />

        <div>
            <div>Fastest Shipping</div>
            <div>Order at $39 order</div>
        </div>
    </div>;
}

export default InfoCard;