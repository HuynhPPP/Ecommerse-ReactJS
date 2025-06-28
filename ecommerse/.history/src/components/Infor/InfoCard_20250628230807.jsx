import styles from './styles.module.scss';
import truckIcon from '@icons/svgs/truckIcon.svg';

function InfoCard() {
    const { containerCard, containerContent, title, des } = styles;
    return <div className={containerCard}>
        <img width={40} height={41} src={truckIcon} alt="truckIcon" />

        <div className={containerContent}>
            <div className={title}>Fastest Shipping</div>
            <div className={des}>Order at $39 order</div>
        </div>
    </div>;
}

export default InfoCard;