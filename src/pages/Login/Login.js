import React from "react";
import { buscaUsuario } from "../../api/users/UsersApi";

import BaseLayout from "../../containers/BaseLayout/BaseLayout";
import LoginForm from "../../containers/LoginForm/LoginForm";

const Login = () => {
  return (
    <BaseLayout pageName="Login">
      <LoginForm toSend={collectUser} />
    </BaseLayout>
  );
};

export function collectUser(user) {
  const resposta = buscaUsuario(user);

  console.log(`aqui ${resposta}`);
}

export default Login;
