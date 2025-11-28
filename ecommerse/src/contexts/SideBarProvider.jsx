import { createContext, useEffect, useState } from 'react';
import { getCart } from '@/apis/cartService';
import Cookies from 'js-cookie';

export const SideBarContext = createContext();

export const SideBarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState('');
  const [listProductCart, setListProductCart] = useState([]);
  const [isLoadingProductCart, setIsLoadingProductCart] = useState(false);
  const userId = Cookies.get('userId');

  const handleGetListProductsCart = (userId, type) => {
    if (userId && type === 'cart') {
      setIsLoadingProductCart(true);
      getCart(userId)
        .then((res) => {
          setListProductCart(res.data.data);
          setIsLoadingProductCart(false);
        })
        .catch((err) => {
          setListProductCart([]);
          setIsLoadingProductCart(false);
        });
    }
  };

  const value = {
    userId,
    isOpen,
    setIsOpen,
    type,
    setType,
    listProductCart,
    isLoadingProductCart,
    handleGetListProductsCart,
    setIsLoadingProductCart,
  };

  useEffect(() => {
    handleGetListProductsCart(userId, 'cart');
  }, []);

  return (
    <SideBarContext.Provider value={value}>{children}</SideBarContext.Provider>
  );
};
