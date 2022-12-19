import axios from "axios";

class OrderService {
  placeOrder(order) {
    return axios.post(``, order);
  }
}

export default new OrderService();
