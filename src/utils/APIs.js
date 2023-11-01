import axios from "axios";
import { getAuthHeaderConfig, getHeaderWithProjectIDAndBody, getHeaderWithProjectId } from "./configs";

const BASE_URL = 'https://academics.newtonschool.co/api/v1';
const configById = getHeaderWithProjectId();
const configByIdAndBody = getHeaderWithProjectIDAndBody();

//posts
export const FetchPosts = async(limit) => {
  try {
      const res = await axios.get(`${BASE_URL}/facebook/post?limit=${limit}`, 
        configById
      )
      
      return res.data.data;
  }
  catch (error) {
      throw error.response.data.message;
  }
};

// Function to log in a user
export const loginAuth = async(userInfo) => {
  userInfo.appType = 'facebook';
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
  userInfo.appType = 'facebook';
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

// Function to like a post
export const PostLikeApi = async(postId, token) => {
  try {
      const res = await axios.post(
        `${BASE_URL}/facebook/like/${postId}`, 
        getAuthHeaderConfig(token)
      )
      
      return res.data.data;
  }
  catch (error) {
      throw error.response.data.message;
  }
};

// Function to create a page
export const createPageApi = async(pageData, token) => {
  try {
      const res = await axios.post(
        `${BASE_URL}/facebook/channel`,
        pageData, 
        getAuthHeaderConfig(token)
      )
      
      return res.data.data;
  }
  catch (error) {
      throw error.response.data.message;
  }
};
export const createPostsApi = async(postData, token) => {
  try {
      const res = await axios.post(
        `${BASE_URL}/facebook/post`,
        postData,
        getAuthHeaderConfig(token)
      )
      
      return res.data.data;
  }
  catch (error) {
      throw error.response.data.message;
  }
};

export const deletePostsApi = async(postId, token) => {
  try {
      const res = await axios.delete(
        `${BASE_URL}/facebook/post/${postId}`,
        getAuthHeaderConfig(token)
      )
      
      return res.data.data;
  }
  catch (error) {
      throw error.response.data.message;
  }
};

export const fetchComments = async(postId, authToken) => {
  try {
      const res = await axios.get(`${BASE_URL}/facebook/post/${postId}/comments`, 
        getAuthHeaderConfig(authToken)
      )
      
      return res.data.data;
  }
  catch (error) {
      throw error.response.data.message;
  }
};

export const searchApi = async (searchTerm, field) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/facebook/post?search={"${field}":"${searchTerm}"}`, 
      configById
    );
    return response.data.data;

  } catch (error) {
    throw error.response.data.message;
  }
};
///




