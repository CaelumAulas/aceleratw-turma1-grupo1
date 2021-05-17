import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import LoginForm from "../../../containers/LoginForm/LoginForm";

describe("Testando componente de Login no formulario", () => {
  it("existe campo de inserir email", () => {
    render(<LoginForm />);

    const user = screen.getByTestId("user");

    expect(user).toBeInTheDocument();
  });
  it("existe campo de inserir senha", () => {
    render(<LoginForm />);

    const password = screen.getByTestId("password");

    expect(password).toBeInTheDocument();
  });
  it("existe botao de realizar login", () => {
    render(<LoginForm />);

    const loginButton = screen.getByTestId("LoginButton");

    expect(loginButton).toBeInTheDocument();
  });
  it("o botão está invativo carregar a página", () => {
    render(<LoginForm />);

    expect(screen.getByTestId("LoginButton").disabled).toBe(true);
  });

  it("o botão de login fica ativo ao inserir senha dentro da validacão", () => {
    render(<LoginForm />);

    const inputPassword = screen.getByTestId("password");

    fireEvent.change(inputPassword, { target: { value: "123456789" } });

    expect(screen.getByTestId("LoginButton").disabled).toBe(true);
  });

  it("Ao clicar no Botão, chama o método de validação da senha", () => {
    const onSubmit = jest.fn();

    render(<LoginForm toSend={onSubmit} />);

    const loginForm = screen.getByTestId("LoginForm");

    fireEvent.submit(loginForm);

    expect(onSubmit).toHaveBeenCalled();
  });
});
