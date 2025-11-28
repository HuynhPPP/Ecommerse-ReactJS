import React from 'react';
import styles from '../../styles.module.scss';
import saleImage from '@/assets/images/Image_sale1.jpeg';

const CartTable = () => {
  const { cartTable } = styles;

  // Static sample data
  const staticCartItems = [
    {
      id: 1,
      name: 'Classic T-Shirt',
      images: [saleImage],
      size: 'M',
      price: 29.99,
      sku: 'TS-001',
      quantity: 2,
    },
    {
      id: 2,
      name: 'Denim Jeans',
      images: [saleImage],
      size: 'L',
      price: 59.99,
      sku: 'DJ-002',
      quantity: 1,
    },
    {
      id: 3,
      name: 'Sneakers',
      images: [saleImage],
      size: '42',
      price: 89.99,
      sku: 'SN-003',
      quantity: 1,
    },
  ];

  return (
    <div className={cartTable}>
      <table>
        <thead>
          <tr>
            <th>PRODUCT</th>
            <th />
            <th>PRICE</th>
            <th>SKU</th>
            <th>QUANTITY</th>
            <th>SUBTOTAL</th>
          </tr>
        </thead>
        <tbody>
          {staticCartItems.map((item) => (
            <tr key={item.id}>
              <td className={styles.product}>
                <img src={item.images[0]} alt={item.name} />
                <div>
                  <p>{item.name}</p>
                  <p>Size: {item.size}</p>
                </div>
              </td>
              <td>
                <div>&#128465;</div>
              </td>
              <td>${item.price.toFixed(2)}</td>
              <td>{item.sku}</td>
              <td>
                <select>
                  <option value='1'>1</option>
                  <option value='2' selected={item.quantity === 2}>
                    2
                  </option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5</option>
                </select>
              </td>
              <td>${(item.price * item.quantity).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CartTable;
