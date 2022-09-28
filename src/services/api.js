import axios from 'axios';
import { API_HOST } from '../config';
import {getAccessToken} from "./localStorage";

export default  {
  login(username, password) {
    return axios.post(
      `${API_HOST}/api/login`,
      {
        username, password
      }
    );
  },
  logout() {
    return axios.get(
      `${API_HOST}/api/logout`,
      {
        headers: {Authorization: getAccessToken()}
      },
    );
  },
  getTodos(page = 1, order_by = null, order_desc = false, per_page = 3) {
    return axios.get(
      `${API_HOST}/api/todo/`,
      {
        params: {
          page,
          per_page,
          order_by,
          desc_order: order_desc || undefined,
        }
      }
    );
  },
  createTodo(body) {
    return axios.post(
      `${API_HOST}/api/todo/`,
      body
    );
  },
  updateTodo(body) {
    return axios.put(
      `${API_HOST}/api/todo/`,
      body,
      {
        headers: {Authorization: getAccessToken()},
      }
    );
  },
  getUser() {
    return axios.get(
      `${API_HOST}/api/user`,
      {
        headers: {Authorization: getAccessToken()},
      }
    );
  },
};