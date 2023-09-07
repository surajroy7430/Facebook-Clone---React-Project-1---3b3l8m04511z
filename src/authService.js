import axios from 'axios';

const API_URL = 'https://academics.newtonschool.co/api/v1/user';

// Function to log in a user
export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Function to sign up a user
export const signup = async (name, email, password) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, {
      name,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Function to update password
export const updatePassword = async (
  name,
  email,
  currentPassword,
  newPassword
) => {
  try {
    const response = await axios.patch(`${API_URL}/updateMyPassword`, {
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
