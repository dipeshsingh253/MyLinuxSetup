import axios from "axios";

class ProductService {
  saveProduct(product) {
    return axios.post("", product);
  }
}

export default new ProductService();
