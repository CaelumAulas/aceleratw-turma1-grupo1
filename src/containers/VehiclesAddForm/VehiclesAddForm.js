import React from 'react';

import {
  Button,
  TextField,
  Select,
  MenuItem,
  InputLabel
} from '@material-ui/core';

import './style.css';

function createData(index, vehicle) {
    return { index, vehicle };
}

const rows = [
    createData(1, 'Corsa'),
    createData(2, 'Uno'),
    createData(3, 'Gol'),
    createData(4, 'Argo'),
    createData(5, 'Fiesta'),
];

const VehiclesAddForm = () => (
  <form className="vehiclesAddForm" noValidate autoComplete="off">
    <div className="vehiclesAddForm--inputs">
        <InputLabel id="standard-basic">Marca</InputLabel>
        <Select id="standard-basic" label="Marca">
            {rows.map((row) => {
                return <MenuItem value={row.index}>{row.vehicle}</MenuItem>;
            })}
        </Select>
        <TextField id="standard-basic" label="Modelo" />
        <TextField id="standard-basic" label="Ano" />
        <TextField id="standard-basic" label="Valor" />
    </div>
    <Button variant="contained">Cadastrar</Button>
    <Button variant="contained">Cancelar</Button>
  </form>
)

export default VehiclesAddForm
