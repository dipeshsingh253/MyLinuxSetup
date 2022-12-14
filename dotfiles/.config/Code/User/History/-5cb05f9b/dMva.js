import axios from "axios";

const TOKEN = localStorage.getItem("token");

class ProductService {
  saveProduct(product) {
    return axios.post(`http://localhost:8088/products?token=${TOKEN}`, product);
  }

  getAllProducts() {
    return axios.get(`http://localhost:8088/products?token=${TOKEN}`);
  }

  updateProduct(product) {
    return axios.post(`http://localhost:8088/products?token=${TOKEN}`, product);
  }


}

export default new ProductService();
