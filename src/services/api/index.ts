import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://breakingbadapi.com/api",
});

export default apiClient;
