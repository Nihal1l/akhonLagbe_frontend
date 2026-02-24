import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://akhonLagbe.vercel.app/api/v1",
});

export default apiClient;
