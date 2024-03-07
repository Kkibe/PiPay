import { Alert } from "react-native";

const validateUsername = (username) => {
    // Username should contain only alphanumeric characters and underscore
    const usernameRegex = /^\w+$/;
    return usernameRegex.test(username);
  };
  
  const validateEmail = (email) => {
    // Basic email validation using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  const validatePassword = (password) => {
    // Password should contain at least 8 characters, including at least one uppercase, one lowercase, one digit, and one special character
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
    return passwordRegex.test(password);
  };


let appCode;

const validateCode = (code) => {

}

const loginUser = (email, password) => {
    console.log('Email:', email);
    console.log('Password:', password);
}

const registerUser = (username, email, password) => {
    if (!validateUsername(username)) {
        Alert.alert('Invalid username');
        return;
      }
  
      if (!validateEmail(email)) {
        Alert.alert('Invalid email');
        return;
      }
  
      if (!validatePassword(password)) {
        Alert.alert('Invalid password');
        return;
      }
}

const getUser = (id) => {

}

const resetPassword = ({email, password, code,}) => {

  if(email !== ''){
    validateEmail(email)
    //send code via email address
    appCode = Math.floor((Math.random * 1000000))
  }

  if(code !== ''){
    validateCode(code)
  }

  if(password !==""){
    validatePassword(password)
    //update password
  }

}

const deleteUser = (id) => {

}



export default auth = {
    loginUser, registerUser, getUser, resetPassword, deleteUser
}