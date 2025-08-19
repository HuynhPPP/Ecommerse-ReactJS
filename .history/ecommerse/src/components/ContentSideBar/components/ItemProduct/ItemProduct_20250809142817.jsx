function ItemProduct() {
    const {container, boxContent} = styles;

  return (
    <div className={container}>
      <img
        src='https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-2.1-min-285x340.jpg'
        alt=''
      />

      <div className={boxContent}>
        <div>Title of product</div>
        <div>$119.99</div>
      </div>
    </div>
  );
}

export default ItemProduct;
