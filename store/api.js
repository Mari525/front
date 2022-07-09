import axios from "axios";

export const ApiRoutes = {
  // GET_FORM: `/`,
  ADD_ORDER: `/`,
};

export const ApiInformation = {
  BASE_URL: `http://127.0.0.1:8000/api/order/`,
  TIMEOUT: 50000,
  WITH_CREDENTIALS: false
};


export const createApi = () => {
  const api = axios.create({
    baseURL: ApiInformation.BASE_URL,
    timeout: ApiInformation.TIMEOUT,
    withCredentials: ApiInformation.withCredentials
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    const {response} = err;

    throw err;
  }

  api.interceptors.response.use(onSuccess, onFail);

  return api;
}