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

    const rows = [
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
        setValue(event.target.value);
    };

    function isValueValid(value){
        if(+value <= 0){
            return {
                buttonEnabled: false,
                isValid: false,
                text: 'Adicione um valor maior que 0',
            }
        } else {
            return { buttonEnabled:true, isValid: true, text: "" }
        }
    }

    function goBack(event){
        event.preventDefault();
        window.history.back();
    }


    return (
        <Container maxWidth="">
            <form variant="filled"
                onSubmit={
                    (event) => {
                        event.preventDefault();
                        toSend({marca: brand, modelo: model, ano: year, valor: value});
                    }
                }
                className="vehiclesAddForm"
                noValidate
                autoComplete="off">
                <div className="vehiclesAddForm--select">
                    <InputLabel id="standard-basic">Marca</InputLabel>
                    <Select onChange={handleMarcaSelectionChange}
                        id="standard-basic"
                        value={brand}
                        label="Marca"
                        required
                        >
                        <MenuItem value="">
                            <em>Nenhum</em>
                        </MenuItem>
                        {
                        rows.map((row) => {
                            return <MenuItem value={
                                row.index
                            }>
                                {
                                row.vehicle
                            } </MenuItem>;
                        })
                    } </Select>
                </div>
                <div className="vehiclesAddForm--inputs">
                    <TextField onChange={handleModeloChange}
                        value={model}
                        id="standard-basic"
                        label="Modelo"
                        required
                        />
                    <TextField onChange={handleYearChange}
                        value={year}
                        id="standard-basic"
                        label="Ano"
                        type="number"
                        required
                        />
                    <TextField onChange={handleValueChange}
                        value={value}
                        onBlur={(event) => {
                            setErrors({validator: isValueValid(value)})
                        }}
                        error={!errors.validator.isValid}
                        helperText={errors.validator.text}
                        id="standard-basic"
                        label="Valor"
                        type="number"
                        required
                        />
                </div>
                <Button variant="contained" color="primary"
                disabled={!brand 
                    || !model 
                    || !year
                    || !value
                    || !errors.validator.buttonEnabled
                }
                >
                    Cadastrar
                </Button>
                <Button variant="contained" type="submit" color="secondary"
                onClick={goBack}
                >
                    Cancelar
                </Button>
            </form>
        </Container>
    )

}

export default VehiclesAddForm
