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
    return axios.put(`http://localhost:8088/products?token=${TOKEN}`, product);
  }

  getProductById(id){
    return axios.get(`http://localhost:8088/products/1?token=`);
  }


}

export default new ProductService();
