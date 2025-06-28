import styles from './styles.module.scss';
import truckIcon from '@icons/svgs/truckIcon.svg';

function InfoCard(title, descreption, src) {
    const { containerCard, containerContent, title, des } = styles;
    return <div className={containerCard}>
        <img width={40} height={41} src={truckIcon} alt="truckIcon" />

        <div className={containerContent}>
            <div className={title}>{title}</div>
            <div className={des}>{descreption}</div>
        </div>
    </div>;
}

export default InfoCard;