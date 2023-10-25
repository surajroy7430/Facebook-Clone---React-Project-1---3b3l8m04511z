import axios from "axios";
import { getAuthHeaderConfig, getHeaderWithProjectIDAndBody, getHeaderWithProjectId } from "./configs";

const BASE_URL = 'https://academics.newtonschool.co/api/v1';
const configById = getHeaderWithProjectId();
const configByIdAndBody = getHeaderWithProjectIDAndBody();

// Function to log in a user
export const loginAuth = async(userInfo) => {
  userInfo.appType = 'social';
  try {
      const res = await axios.post(`${BASE_URL}/user/login`, 
        userInfo, 
        configByIdAndBody
      )
      
      return res.data;
  }
  catch (error) {
      throw error.response.data.message;
  }
};

// Function to sign up a user
export const signupAuth = async (userInfo, navigate) => {
  userInfo.appType = 'social';
  try {
      const res = await axios.post(`${BASE_URL}/user/signup`, 
        userInfo, 
        configByIdAndBody
      );
      const {name, email} = res.data.data.user
      console.log({Name: name, Email: email});

      if(res.data.token) {
          localStorage.setItem('authToken', res.data.token);
          localStorage.setItem('userInfo', JSON.stringify(res.data.data.user));

          navigate('/login');
      }
  } catch (error) {
      throw error.response.data.message;
  }
};

// Function to update password
export const updatePasswordAuth = async (
  name,
  email,
  currentPassword,
  newPassword
) => {
  try {
    const response = await axios.patch(`${BASE_URL}/user/updateMyPassword`, 
    {
      name,
      email,
      passwordCurrent: currentPassword,
      password: newPassword,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
