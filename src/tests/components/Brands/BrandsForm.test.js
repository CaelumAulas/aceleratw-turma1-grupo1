import React from 'react';

import { fireEvent, getByText, render, screen } from '@testing-library/react';
import BrandsForm, { sendForm, validate } from '../../../containers/BrandsForm/BrandsForm';

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

    it('testar o evento do botao de adicionar', () => {
        const onSubmit = jest.fn();

        render(<BrandsForm sendForm={onSubmit} />);

        const form = screen.getByTestId('BrandForm');
        fireEvent.submit(form);

        expect(onSubmit).toHaveBeenCalled();
    });
})
