import API from '../api/user';
var SHA256 = require("crypto-js/sha256");

class UserSignupService {
  async check_username(data){
    const exist = await API.exist_username(data);
    return exist;
  }
  check_password_form(password) {
    let reg = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");
    return reg.test(password);
  }

  check_password_confirm(password, confirm_password) {
    return password === confirm_password;
  }

  check_email(email){
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    return reg.test(email)
  }

  async check_email_used(data){
    const exist = await API.exist_email(data);
    return exist;
  }
  


  async signup(data) {
    // console.log("signup")

    if (this.check_password_form(data.password) && this.check_password_confirm(data.password, data.password_confirm) && this.check_email(data.email)){
      // const password = SHA256(data.password).toString()
      let success = await API.signup({
        username: data.username,
        password: data.password,
        email: data.email
      })

      if (success) {
        return true;
      }
    }
    return false;
  }
};

class UserLoginService {
  async login(data) {
    // console.log("login")
    // const password = SHA256(data.password).toString()
    let success = await API.login({
      username: data.username,
      password: data.password
    })
    // console.log("!!!!!!")
    // console.log(success);
    if(success != 0){
      return success;
    }else{
      return 0;
    }
  } 
}

module.exports = { 
  UserSignupService, 
  UserLoginService
}