import React from 'react'
import BaseLayout from '../../containers/BaseLayout/BaseLayout'

import {
    Button,
    TextField,
} from '@material-ui/core'

import './style.css'

const AddUserForm = () => (
    <form className="usersForm" noValidate autoComplete="off">
        <div className="usersForm--inputs">
            <TextField id="standard-basic" label="Usuário" />
            <TextField id="standard-basic" label="Senha" />
            <TextField id="standard-basic" label="Confirmar senha" />
        </div>
        <Button variant="contained">Salvar</Button>
    </form>
)

export default AddUserForm