import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react'

import VehiclesAddForm, {handleMarcaSelectionChange} from '../../containers/VehiclesAddForm/VehiclesAddForm'


describe('Testando componentes de Adicionar Veículos', () => {
    it('existe campo para adicionar a marca ', () => {
        render (<VehiclesAddForm/>);
        const brand = screen.getByTestId("brand");
        expect(brand).toBeInTheDocument();
    });
    it('existe campo para adicionar o modelo ', () => {
        render (<VehiclesAddForm/>);
        const model = screen.getByTestId("model");
        expect(model).toBeInTheDocument();
    });
    it('existe campo para adicionar o ano ', () => {
        render (<VehiclesAddForm/>);
        const year = screen.getByTestId("year");
        expect(year).toBeInTheDocument();
    });
    it('existe campo para adicionar o valor ', () => {
        render (<VehiclesAddForm/>);
        const price = screen.getByTestId("price");
        expect(price).toBeInTheDocument();
    });
    it('valor menor que 0 retorna erro ', () => {
        render (<VehiclesAddForm/>);

        const price = screen.getByTestId( "price");
        price.value = 30;
      
        const message = isValueValid(price.value);

        expect(message.text).toBe("");
    });
})
