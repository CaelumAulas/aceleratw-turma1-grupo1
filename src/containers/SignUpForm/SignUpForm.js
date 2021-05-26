import React, { useState } from "react";
import { Button, TextField, Container } from "@material-ui/core";

import "./style.css";

const SignUpForm = ({ toSend }) => {
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const [errors, setErrors] = useState({
    validator: { buttonEnabled: false, isValid: true, text: "" },
  });

  function passwordValidation(password) {
    if (password.length < 8) {
      return {
        buttonEnabled: false,
        text: "A senha deve ter pelo menos 8 dígitos",
        validate: false,
      };
    }
    return { buttonEnabled: true, isValid: true, text: "" };
  }

  return (
    <Container maxWidth="sm">
      <form
        autoComplete="off"
        className="signUpForm"
        data-testid="SignUpForm"
        noValidate
        onSubmit={(event) => {
          event.preventDefault();
          toSend({ user, password });
        }}
      >
        <div className="signUpForm--inputs">
          <TextField
            fullWidth
            id="standard-basic"
            inputProps={{ "data-testid": "user" }}
            label="Usuário"
            margin="normal"
            required
            type="email"
            value={user}
            variant="outlined"
            onChange={(event) => {
              setUser(event.target.value);
            }}
          />
          <TextField
            error={!errors.validator.isValid}
            fullWidth
            helperText={errors.validator.text}
            id="standard-basic"
            inputProps={{ "data-testid": "password" }}
            label="Senha"
            margin="normal"
            required
            type="password"
            value={password}
            variant="outlined"
            onBlur={() => {
              setErrors({ validator: passwordValidation(password) });
            }}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </div>
        <Button
          color="primary"
          data-testid="SignUpForm"
          disabled={!errors.validator.buttonEnabled}
          type="submit"
          variant="contained"
        >
          Cadastrar
        </Button>
      </form>
    </Container>
  );
};

export default SignUpForm;
