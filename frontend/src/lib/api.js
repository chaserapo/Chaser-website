import axios from "axios";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export const submitBeta = (data) => axios.post(`${API}/beta-interest`, data);
export const submitContact = (data) => axios.post(`${API}/contact`, data);
