import axios from "axios";

const USER_BASE_URL = 

class UserService{

    saveUser(user){
        return axios.post("url",user);
    }

}

export default new UserService();