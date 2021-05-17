import React, { useState } from "react"
import { Button, TextField, Container } from "@material-ui/core"

import "./style.css"

const UserForm = ({ toSend }) => {
  const [passwordConfirmation, setPasswordConfirmation] = useState("")
  const [errors, setErrors] = useState({
    validator: { buttonEnabled: false, isValid: true, text: "" },
  })
  const [userPassword, setPassword] = useState("")
  const [user, setUser] = useState("")

  function passwordValidation(userPassword) {
    if (userPassword.length < 8) {
      return {
        buttonEnabled: false,
        validate: false,
        text: "A senha deve ter pelo menos 8 dígitos",
      }
    }
    return { buttonEnabled: true, isValid: true, text: "" }
  }

  function passwordConfirmationValidation(passwordConfirmation, userPassword) {
    if (passwordConfirmation !== userPassword) {
      return {
        buttonEnabled: false,
        validate: false,
        text: "As senhas devem ser iguais.",
      }
    }
    return { buttonEnabled: true, isValid: true, text: "" }
  }

  return (
    <Container maxWidth="sm">
      <form
        data-testid="UserForm"
        onSubmit={(event) => {
          event.preventDefault()
          toSend({ user, userPassword, passwordConfirmation })
        }}
        className="userForm"
        noValidate
        autoComplete="off"
      >
        <div className="userForm--inputs">
          <TextField
            onChange={(event) => {
              setUser(event.target.value)
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
              setPassword(event.target.value)
            }}
            value={userPassword}
            onBlur={() => {
              setErrors({ validator: passwordValidation(userPassword) })
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
          <TextField
            required
            type="password"
            onChange={(event) => {
              setPasswordConfirmation(event.target.value)
            }}
            value={passwordConfirmation}
            onBlur={() => {
              setErrors({ validator: passwordConfirmationValidation(userPassword, passwordConfirmation) })
            }}
            error={!errors.validator.isValid}
            helperText={errors.validator.text}
            variant="outlined"
            margin="normal"
            id="standard-basic"
            label="Confirmar senha"
            fullWidth
            inputProps={{ "data-testid": "passwordConfirmation" }}
          />
        </div>
        <Button
          disabled={!errors.validator.buttonEnabled}
          type="submit"
          variant="contained"
          color="primary"
          data-testid="userFormButton"
        >
          Logar
        </Button>
      </form>
    </Container>
  )
}

export default UserForm
