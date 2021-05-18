import React, {useState} from 'react';

import {
    Button,
    TextField,
    Select,
    MenuItem,
    InputLabel,
    Container,
    FormControl
} from '@material-ui/core';

import './style.css';


const VehiclesAddForm = ({toSend}) => {

    function createData(index, vehicle) {
        return {index, vehicle};
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
        setErrors({validator: isValueValid(event.target.value)})
        setValue(event.target.value);
    };

    function isValueValid(value) {
        if (+ value <= 0) {
            return {buttonEnabled: false, isValid: false, text: 'Adicione um valor maior que 0'}
        }
        return {buttonEnabled: true, isValid: true, text: ""}
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
                onSubmit={(event) => submitForm(event)}
                data-testid="VehiclesAddForm"
                className="vehiclesAddForm"
                noValidate
                autoComplete="off">
                <div className="vehiclesAddForm--select">
                <TextField
                    id="brand"
                    data-testid="brand"
                    select
                    label="Marca"
                    value={brand}
                    onChange={handleMarcaSelectionChange}
                    >

                        <MenuItem value=""><em>Nenhum</em></MenuItem>
                        {brands.map((row) => { 
                            return <MenuItem value={row.index} key={row.index}>{row.vehicle}</MenuItem>;
                        })} 
                </TextField>
                   
                </div>
                <div className="vehiclesAddForm--inputs">
                    <TextField onChange={handleModeloChange}
                        value={model}
                        id="model"
                        data-testid="model"
                        label="Modelo"
                        required/>
                    <TextField onChange={handleYearChange}
                        value={year}
                        id="year"
                        data-testid="year"
                        label="Ano"
                        type="number"
                        required/>
                    <TextField onChange={handleValueChange}
                        value={value}
                        error={!errors.validator.isValid}
                        helperText={errors.validator.text}
                        id="price"
                        data-testid="price"
                        label="Valor"
                        type="number"
                        required/>
                </div>
            <Button variant="contained" color="primary" type="submit"
                disabled={
                    !brand ||
                    !model || 
                    !year || 
                    !value || 
                    !errors.validator.buttonEnabled
                    }>
                Cadastrar
            </Button>
            <Button variant="contained" color="secondary"
                onClick={goBack}>
                Cancelar
            </Button>
        </form>
    </Container>
    )

}

export default VehiclesAddForm
