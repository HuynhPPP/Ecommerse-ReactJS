import { createContext, useState } from 'react';
import { getCart } from '@/apis/cartService';

export const SideBarContext = createContext();

export const SideBarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState('');
  const [listProductCart, setListProductCart] = useState([]);

  const handleGetListProductsCart = (userId, type) => {
    if (userId && type === 'cart') {
      getCart(userId)
        .then((res) => {
          setListProductCart(res.data.data);
        })
        .catch((err) => {
          setListProductCart([]);
        });
    }
  };

  const value = {
    isOpen,
    setIsOpen,
    type,
    setType,
    listProductCart,
    handleGetListProductsCart,
  };

  return (
    <SideBarContext.Provider value={value}>{children}</SideBarContext.Provider>
  );
};
