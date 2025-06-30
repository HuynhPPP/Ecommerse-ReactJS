import axiosClient from "./axiosClient";

const getProducts = async () => {
    const res = await axiosClient.get('/product?limit=14');
    return res.data;

    console.log(res);
};

export { getProducts };