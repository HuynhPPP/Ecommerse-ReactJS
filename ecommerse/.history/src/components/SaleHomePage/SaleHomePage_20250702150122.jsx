import styles from './styles.module.scss';

function SaleHomePage() {
    const { container } = styles;
    return <div className={container}>
        <div>Image1</div>
        <div>Content</div>
        <div>Image2</div>
    </div>;
}

export default SaleHomePage;