import React, { useState } from 'react';

import {
  Button,
  TextField,
  MenuItem,
  Container,
} from '@material-ui/core';

import './style.css';

const VehiclesAddForm = ({ toSend }) => {

  function createData(index, vehicle) {
    return { index, vehicle };
  }

  const brands = [
    createData(1, 'Corsa'),
    createData(2, 'Uno'),
    createData(3, 'Gol'),
    createData(4, 'Argo'),
    createData(5, 'Fiesta'),
  ];

  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [value, setValue] = useState("");
  const [errors, setErrors] = useState({
    validator: {
      buttonEnabled: false,
      isValid: true,
      text: ""
    }
  });

  const handleMarcaSelectionChange = (event) => {
    setBrand(event.target.value);
  };

  const handleModeloChange = (event) => {
    setModel(event.target.value);
  };

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  const handleValueChange = (event) => {
    setErrors({ validator: isValueValid(event.target.value) })
    setValue(event.target.value);
  };

  function isValueValid(value) {
    if (+ value <= 0) {
      return { buttonEnabled: false, isValid: false, text: 'Adicione um valor maior que 0' }
    }
    return { buttonEnabled: true, isValid: true, text: "" }
  }

  function submitForm(event) {
    event.preventDefault();
    const bag = {
      marca: brand,
      modelo: model,
      ano: year,
      valor: value
    }
    toSend(bag);
  }

  function goBack(event) {
    event.preventDefault();
    window.history.back();
  }

  return (
    <Container>
      <form variant="filled"
        autoComplete="off"
        className="vehiclesAddForm"
        data-testid="VehiclesAddForm"
        noValidate
        onSubmit={(event) => submitForm(event)}
      >
        <div className="vehiclesAddForm--select">
          <TextField
            data-testid="brand"
            fullWidth
            id="standard-basic"
            label="Marca"
            margin="normal"
            onChange={handleMarcaSelectionChange}
            select
            value={brand}
            variant="outlined"
          >
            <MenuItem>
              <em>Nenhum</em>
            </MenuItem>
            {brands.map((row) => {
              return <MenuItem value={row.index} key={row.index}>{row.vehicle}</MenuItem>;
            })}
          </TextField>
        </div>
        <div className="vehiclesAddForm--inputs">
          <TextField 
            data-testid="model"
            fullWidth
            id="standard-basic"
            label="Modelo"
            margin="normal"
            required
            value={model}
            variant="outlined"
            onChange={handleModeloChange}
          />
          <TextField 
            data-testid="year"
            fullWidth
            id="standard-basic"
            label="Ano"
            margin="normal"
            onChange={handleYearChange}
            required
            type="number"
            value={year}
            variant="outlined"
            />
          <TextField 
            data-testid="price"
            error={!errors.validator.isValid}
            fullWidth
            helperText={errors.validator.text}
            id="standard-basic"
            label="Valor"
            margin="normal"
            required
            type="number"
            value={value}
            variant="outlined"
            onChange={handleValueChange}
          />
        </div>
        <Button 
          color="primary"
          disabled={
            !brand ||
            !model ||
            !year ||
            !value ||
            !errors.validator.buttonEnabled
          }
          variant="contained"
          type="submit"
        >
          Cadastrar
        </Button>
        <Button 
          variant="contained" 
          color="secondary"
          onClick={goBack}
        >
          Cancelar
        </Button>
      </form>
    </Container>
  )
}

export default VehiclesAddForm
