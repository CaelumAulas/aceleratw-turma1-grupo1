import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8080",
});

export const login = async (user, setData) => {
  const response = await api.post("/users/login", {
    login: `${user.user}`,
    password: `${user.password}`,
  });

  setData(response.status);
};

export const FindUser = async (user) => {
  const resposta = await api.get(
    `/usuario?user=${user.user}&password=${user.password}`
  );
  console.log(resposta);

  return resposta.data;
};

export const findAllUsers = async (url, setData) => {
  const response = await api.get(url);

  console.log(response.data);

  setData(response.data);
};

export const findAllVehicles = async (url, setData) => {
  const response = await api.get(url);

  console.log(response.data);

  setData(response.data);
};
