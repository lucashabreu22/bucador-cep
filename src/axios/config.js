import axios from "axios";

const cepFetch = axios.create({
  baseURL: "https://viacep.com.br/ws/01001000/json/",
});
