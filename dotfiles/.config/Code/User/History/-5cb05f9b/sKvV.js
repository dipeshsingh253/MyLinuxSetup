import axios from "axios";

const TOKEN = localStorage.getItem("token");

class ProductService {
  saveProduct(product) {
    return axios.post("", product);
  }
}

export default new ProductService();
