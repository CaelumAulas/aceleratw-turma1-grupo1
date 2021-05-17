import React from 'react';

import { fireEvent, render, screen } from '@testing-library/react';
import BrandsForm, { validate } from '../../../containers/BrandsForm/BrandsForm';

describe('Testando formulário de inserção de marca...', () => {
    it('se existe label', () => {
        render(<BrandsForm/>);
        expect(screen.getByText('Marca')).toBeInTheDocument();
    });
    
    it('se existe botao de adicionar', () => {
        render(<BrandsForm/>);
        expect(screen.getByText('Cadastrar')).toBeInTheDocument();
    });

    it('se existe botao de cancelar', () => {
        render(<BrandsForm/>);
        expect(screen.getByText('Cancelar')).toBeInTheDocument();
    });

    it('se a label marca seta o seu state', () => {
        render(<BrandsForm />);
        const input = screen.getByTestId('brandInput');
        fireEvent.change(input, { target: { value: 'Chevrolet' }});
        expect(input.value).toBe('Chevrolet');
    });

    it('testar o evento do botao de adicionar', () => {
        const onSubmit = jest.fn();

        render(<BrandsForm sendBrand={onSubmit} />);

        const input = screen.getByTestId('brandInput');
        fireEvent.change(input, { target: { value: 'Chevrolet' }});

        const form = screen.getByTestId('BrandForm');
        fireEvent.submit(form);

        expect(onSubmit).toHaveBeenCalled();
    });
})
