import axios from "axios";

const api = axios.create({
  baseURL: "https://ssnbuilders.ujwalkoirala.com.np/api",
});

export default api;
