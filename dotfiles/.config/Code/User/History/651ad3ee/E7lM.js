import axios from "axios";

const TOKEN = localStorage.getItem("token");

class CartService {
  //http://localhost:8088/additemtocart?authenticationToken=WFEoYLhtLfae
  addItemToCart(cartDto) {
    return axios.post(
      `http://localhost:8088/additemtocart?authenticationToken=${TOKEN}`,
      cartDto
    );
  }

  getCartByUser(id){
    return axios.get(`http://localhost:8088/carts/user/${id}?authenticationToken=${TOKEN}`)
  }
}

export default new CartService();
