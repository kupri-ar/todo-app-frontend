import {clearAccessToken} from "./localStorage";

export const axiosErrorInterceptor = $axios => {

  $axios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      const status = error?.response?.status;

      if (status === 401) {
        window.location.href = `/login`;
        clearAccessToken();
        // dispatch(setCurrentUser(null))
        return Promise.reject(error);

      }
    }
  );
};
