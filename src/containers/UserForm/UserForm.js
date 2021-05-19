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
        text: "A senha deve ter pelo menos 8 dígitos",
        validate: false,
      }
    }
    return { buttonEnabled: true, isValid: true, text: "" }
  }

  function passwordConfirmationValidation(passwordConfirmation, userPassword) {
    if (passwordConfirmation !== userPassword) {
      return {
        buttonEnabled: false,
        text: "As senhas devem ser iguais.",
        validate: false,
      }
    }
    return { buttonEnabled: true, isValid: true, text: "" }
  }

  return (
    <Container maxWidth="sm">
      <form
        autoComplete="off"
        className="userForm"
        data-testid="UserForm"
        noValidate
        onSubmit={(event) => {
          event.preventDefault()
          toSend({ user, userPassword, passwordConfirmation })
        }}
      >
        <div className="userForm--inputs">
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
              setUser(event.target.value)
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
            value={userPassword}
            variant="outlined"
            onBlur={() => {
              setErrors({ validator: passwordValidation(userPassword) })
            }}
            onChange={(event) => {
              setPassword(event.target.value)
            }}
          />
          <TextField
            error={!errors.validator.isValid}
            fullWidth
            helperText={errors.validator.text}
            id="standard-basic"
            inputProps={{ "data-testid": "passwordConfirmation" }}
            label="Confirmar senha"
            margin="normal"
            required
            type="password"
            value={passwordConfirmation}
            variant="outlined"
            onBlur={() => {
              setErrors({ validator: passwordConfirmationValidation(userPassword, passwordConfirmation) })
            }}
            onChange={(event) => {
              setPasswordConfirmation(event.target.value)
            }}
            />
        </div>
        <Button
          color="primary"
          data-testid="userFormButton"
          disabled={!errors.validator.buttonEnabled}
          type="submit"
          variant="contained"
        >
          Logar
        </Button>
      </form>
    </Container>
  )
}

export default UserForm
