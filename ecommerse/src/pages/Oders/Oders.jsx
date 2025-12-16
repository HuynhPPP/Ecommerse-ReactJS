import { useEffect } from 'react';
import { getDetailOrder } from '@/apis/oderService';
import { useLocation } from 'react-router-dom';

function Oders() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const id = params.get('id');

  const handleGetDetailOrder = async () => {
    try {
      const response = await getDetailOrder(id);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleGetDetailOrder();
  }, []);

  return <>oders</>;
}

export default Oders;
