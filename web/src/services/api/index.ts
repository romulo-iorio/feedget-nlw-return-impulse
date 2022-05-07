import axios from "axios";
const { VITE_API_URL: API_URL } = import.meta.env;

export const api = axios.create({ baseURL: API_URL });
