import axios from "axios";

const base = axios.create({
  baseURL: "https://restcountries.eu/rest/v2/",
});

export default base;
