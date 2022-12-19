import axios from "axios";

const TOKEN = localStorage.getItem("token");


class OrderService {
  placeOrder(order) {
    return axios.post(``, order);
  }
}

export default new OrderService();
