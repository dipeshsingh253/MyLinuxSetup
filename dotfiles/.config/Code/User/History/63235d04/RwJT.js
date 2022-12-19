import axios from "axios";

const TOKEN = localStorage.getItem("token");

class OrderService {
  placeOrder(order) {
    return axios.post(`http://localhost:8088/orders?token=${TOKEN}`, order);
  }

  getOrderByUser(id){
    return axios.get(``)
  }

}

export default new OrderService();
