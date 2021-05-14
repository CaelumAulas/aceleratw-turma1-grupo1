import React from 'react';

import { fireEvent, getByText, render, screen } from '@testing-library/react';
import BrandsForm, { sendForm } from '../../../containers/BrandsForm/BrandsForm';

describe('Testando o formulário de inserção de marca', () => {
    // it('testar o metodo sendForm', () => {
    //     render(<BrandsForm sendBrand="ddd" />);
        
    //     // const sendForm = sendForm(brand);

    //     expect(sendForm).toBe(false);
    // });

    it('testar se existe label marca', () => {
        render(<BrandsForm/>);
        expect(screen.getByText('Marca')).toBeInTheDocument();
    });
    
    it('testar o botao de adicionar', () => {
        render(<BrandsForm/>);
        expect(screen.getByText('Cadastrar')).toBeInTheDocument();
    });

    it('testar o botao de cancelar', () => {
        render(<BrandsForm/>);
        expect(screen.getByText('Cancelar')).toBeInTheDocument();
    });

    // it('testar o evento do botao de adicionar', () => {
    //     const sendBrand = jest.fn();

    //     render(<BrandsForm sendBrand={sendBrand} />);

    //     // const input = screen.getByText('Marca');

    //     // fireEvent.change(input, {target: {value: "Chevrolet"}});
    //     fireEvent.click(screen.getByText('Cadastrar'));

    //     expect(sendBrand).toHaveBeenCalled();
    // });

    // it('testar o evento do botao de adicionar', () => {

    //     const funcaoBtn = jest.fn();

    //     render(<BrandsForm sendBrand={funcaoBtn} />);

    //     fireEvent.click(screen.getByText("Cadastrar"));

    //     expect(funcaoBtn).toHaveBeenCalled();
    // })
})
