import axios from "axios";

const Url = "https://kenziehub.herokuapp.com";
const token = JSON.parse(localStorage.getItem("@token"));

export const api = axios.create({
  baseURL: Url,
  timeout: 3500,
});

export const instance = axios.create({
  baseURL: Url,
  timeout: 1000,
  headers: { Authorization: "Bearer " + token },
});
