import axios from "axios";

const TOKEN = localStorage.getItem("token");

class OrderService {
  placeOrder(order) {
    return axios.post(`http://localhost:8088/orders?token=${TOKEN}`, order);
  }
}

class getOrdersByUser(){
  return axios.get(``);
}

export default new OrderService();
