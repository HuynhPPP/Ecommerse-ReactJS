import styles from '../styles.module.scss';

function InformationProduct() {
  const { itemInformation, containerInfoProduct, title, content } = styles;

  const dataInfo = [
    { id: 1, title: 'Size', content: 'S, M, L' },
    { id: 2, title: 'Material', content: '100% Cotton' },
    { id: 3, title: 'Care', content: 'Machine wash cold' },
  ];

  return (
    <div className={containerInfoProduct}>
      {dataInfo.map((item, index) => (
        <div key={index} className={itemInformation}>
          <div className={title}>{item.title}</div>
          <div className={content}>{item.content}</div>
        </div>
      ))}
    </div>
  );
}

export default InformationProduct;
