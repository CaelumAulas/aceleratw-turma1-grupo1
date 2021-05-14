import React from "react";

import BaseLayout from "../../containers/BaseLayout/BaseLayout";
import LoginForm from "../../containers/LoginForm/LoginForm";

const Login = () => (
  <BaseLayout pageName="Login">
    <LoginForm toSend={collectUser} />
  </BaseLayout>
);

function collectUser(user) {
  console.log(user);
  //chamar o método de enviar para API
}

export default Login;
