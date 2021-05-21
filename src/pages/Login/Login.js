import React, { useState } from "react";
import { login } from "../../api/users/UsersApi";

import BaseLayout from "../../containers/BaseLayout/BaseLayout";
import LoginForm from "../../containers/LoginForm/LoginForm";

const Login = () => {
  const [status, setStatus] = useState({});
  const [logged, setLogged] = useState(false);

  function collectUser(user) {
    login(user, setStatus);
    if (status == 200) setLogged(true);
  }

  return (
    <BaseLayout pageName="Login" status={logged}>
      <LoginForm toSend={collectUser} />
    </BaseLayout>
  );
};

export default Login;
