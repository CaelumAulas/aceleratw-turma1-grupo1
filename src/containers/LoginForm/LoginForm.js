import React, { useState } from "react";
import { Button, TextField, Container } from "@material-ui/core";

import "./style.css";

const LoginForm = ({ toSend }) => {
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const [errors, setErrors] = useState({
    validator: { buttonEnabled: false, isValid: true, text: "" },
  });

  function passwordValidation(password) {
    if (password.length < 8) {
      return {
        buttonEnabled: false,
        validate: false,
        text: "A senha deve ter pelo menos 8 dígitos",
      };
    }
    return { buttonEnabled: true, isValid: true, text: "" };
  }

  return (
    <Container maxWidth="sm">
      <form
        data-testid="LoginForm"
        onSubmit={(event) => {
          event.preventDefault();
          toSend({ user, password });
        }}
        className="loginForm"
        noValidate
        autoComplete="off"
      >
        <div className="loginForm--inputs">
          <TextField
            onChange={(event) => {
              setUser(event.target.value);
            }}
            value={user}
            type="email"
            required
            variant="outlined"
            id="standard-basic"
            label="Usuário"
            margin="normal"
            inputProps={{ "data-testid": "user" }}
            fullWidth
          />
          <TextField
            required
            type="password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            value={password}
            onBlur={(event) => {
              setErrors({ validator: passwordValidation(password) });
            }}
            error={!errors.validator.isValid}
            helperText={errors.validator.text}
            variant="outlined"
            margin="normal"
            id="standard-basic"
            label="Senha"
            fullWidth
            inputProps={{ "data-testid": "password" }}
          />
        </div>
        <Button
          disabled={!errors.validator.buttonEnabled}
          type="submit"
          variant="contained"
          color="primary"
          data-testid="LoginButton"
        >
          Logar
        </Button>
      </form>
    </Container>
  );
};

export default LoginForm;
