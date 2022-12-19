import axios from "axios";

const TOKEN = localStorage.getItem("token");

class OrderService {
  placeOrder(order) {
    return axios.post(`http://localhost:8088/orders?token=${TOKEN}`, order);
  }

  getOrderByUser(id){
    //for an ordinary customer 
    return axios.get(`http://localhost:8088/orders/${id}?token=${TOKEN}`)
  }

}

export default new OrderService();
