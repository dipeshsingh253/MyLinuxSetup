

class UserService{

    saveUser(user){
        return axios.post("url",user);
    }

}

export default new UserService();