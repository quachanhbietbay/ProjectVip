import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8000", // địa chỉ backend
  withCredentials: true,
});

export default instance;
