import React from 'react'

import {
  Button,
  TextField,
} from '@material-ui/core'

import './style.css'

const LoginForm = () => (
  <form className="loginForm" noValidate autoComplete="off">
    <div className="loginForm--inputs">
      <TextField id="standard-basic" label="Usuário" />
      <TextField id="standard-basic" label="Senha" />
    </div>
    <Button variant="contained">Entrar</Button>
  </form>
)

export default LoginForm
