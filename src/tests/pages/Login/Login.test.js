import React from "react";
import Login, { collectUser } from "../../../pages/Login/Login";
import { render } from "@testing-library/react";

describe("Página de Login", () => {
  it("O snapShot do component deve permanecer sempre o mesmo", () => {
    const { container } = render(<Login />);
    expect(container.firstChild).toMatchSnapshot();
  });
  it("coletando os dados do formulario e devolvendo um json", () => {
    const user = {
      email: "vitor@vitor.com",
      senha: "minhaSenha123",
    };

    const collect = collectUser(user);

    expect(user).toBe(collect);
  });
});
