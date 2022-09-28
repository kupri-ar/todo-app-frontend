import axios from 'axios';
import { API_HOST } from '../config';

export default  {
  login(username, password) {
    return axios.post(
      `${API_HOST}/admin/login`,
      {
        username, password
      }
    );
  },
};