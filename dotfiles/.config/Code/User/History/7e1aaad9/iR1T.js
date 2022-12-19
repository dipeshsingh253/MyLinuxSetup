import axios from "axios";

// const USER_BASE_URL =

class UserService {
  saveUser(user) {
    return axios.post("http://localhost:8088/register", user);
  }

  loginUser(userDto) {
    return axios.post("http://localhost:8088/login", userDto);
  }

  logOutUser(){
    return axios.delete(`http://localhost:8088/logout?authenticationToken=${Toke}`)
  }
}

export default new UserService();
