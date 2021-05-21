import axios from "axios";

export const api = axios.create({
  baseURL: "https://api-carango-bom.herokuapp.com",
});

export const findAllBrands = async (url, setData) => {
  const response = await api.get(url);

  console.log(response.data);

  setData(response.data);
};