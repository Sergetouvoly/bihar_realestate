import axios from "axios"
// const tokenString = localStorage.getItem('token');
// const userToken = JSON.parse(tokenString);
 
      
const axiosInstance =  axios.create({
        baseURL: 'http://localhost:5000/',
        // headers: userToken?{'Authorization': 'Bearer ' +userToken}:{}
    });



export default axiosInstance