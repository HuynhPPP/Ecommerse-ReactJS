import styles from './styles.module.scss';

function SaleHomePage() {
    const { container } = styles;
    return <div className={container}>
        <div>
            <img src="https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_1.jpeg" alt="" />
        </div>
        <div>Content</div>
        <div>Image2</div>
    </div>;
}

export default SaleHomePage;