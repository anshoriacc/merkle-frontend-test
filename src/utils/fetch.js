import axios from "axios";

const urlAPI = "https://fakestoreapi.com";

function axiosRequest(method, url, data, params) {
  return axios({
    method: method,
    url: urlAPI + url,
    data: data,
    params: params,
  });
}

export function getData(url, params, data) {
  return axiosRequest("GET", url, data, params);
}

export function patchData(url, params, data) {
  return axiosRequest("PATCH", url, data, params);
}

export function postData(url, data, params) {
  return axiosRequest("POST", url, data, params);
}

export function deleteData(url, data, params) {
  return axiosRequest("DELETE", url, data, params);
}
