import axios from 'axios';
import { API_HOST } from '../config';
import {getAccessToken} from "./localStorage";

export default  {
  login(username, password) {
    return axios.post(
      `${API_HOST}/admin/login`,
      {
        username, password
      }
    );
  },
  logout() {
    return axios.get(
      `${API_HOST}/admin/logout`,
      {
        headers: {Authorization: `Bearer ${getAccessToken()}`}
      },
    );
  },
  getTodos(page = 1, order_by = null, order_desc = false, per_page = 3) {
    return axios.get(
      `${API_HOST}/todo/`,
      {
        params: {
          page,
          per_page,
          order_by,
          order_desc,
        }
      }
    );
  },
  createTodo(body) {
    return axios.post(
      `${API_HOST}/todo/`,
      {
        body: body
      }
    );
  },
  updateTodo(body) {
    return axios.put(
      `${API_HOST}/todo/`,
      {
        headers: {Authorization: `Bearer ${getAccessToken()}`},
        body: body
      }
    );
  },
};