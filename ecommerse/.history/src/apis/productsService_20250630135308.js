const { default: axiosClient } = require("src/apis/axiosClient")

const getProducts = async () => {
    const res = await axiosClient.get('/product')
}