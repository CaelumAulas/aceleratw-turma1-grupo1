import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import UserForm from "../../../containers/UserForm/UserForm";

describe("Testando componente de cadastro de Usuário", () => {
  it("existe campo de inserir email", () => {
    render(<UserForm />);

    const email = screen.getByTestId("email");

    expect(email).toBeInTheDocument();
  });

  it("existe campo de inserir senha", () => {
    render(<UserForm />);

    const password = screen.getByTestId("password");

    expect(password).toBeInTheDocument();
  });

  it("existe campo de confirmar senha", () => {
    render(<UserForm />);

    const passwordConfirmation = screen.getByTestId("passwordConfirmation");

    expect(passwordConfirmation).toBeInTheDocument();
  });

  it("existe botao de realizar cadastro de usuário", () => {
    render(<UserForm />);

    const userFormButton = screen.getByTestId("userFormButton");

    expect(userFormButton).toBeInTheDocument();
  });

  it("o botão está invativo carregar a página", () => {
    render(<UserForm />);

    expect(screen.getByTestId("userFormButton").disabled).toBe(true);
  });

  it("o botão de login fica ativo ao inserir senha dentro da validacão", () => {
    render(<UserForm />);

    const inputPassword = screen.getByTestId("password");

    fireEvent.change(inputPassword, { target: { value: "123456789" } });

    expect(screen.getByTestId("userFormButton").disabled).toBe(true);
  });

  it("Ao clicar no Botão, chama o método de validação da senha", () => {
    const onSubmit = jest.fn();

    render(<UserForm toSend={onSubmit} />);

    const UserFormContainer = screen.getByTestId("UserForm");

    fireEvent.submit(UserFormContainer);

    expect(onSubmit).toHaveBeenCalled();
  });
});
