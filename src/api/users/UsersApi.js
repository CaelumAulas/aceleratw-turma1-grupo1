import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:5000",
});

export const FindUser = async (user) => {
  const resposta = await api.get(
    `/usuario?user=${user.user}&password=${user.password}`
  );
  console.log(resposta);

  return resposta.data;
};

export const findAllUsers = async (url, setData) => {
  const response = await api.get(url);

  setData(response.data);
};
