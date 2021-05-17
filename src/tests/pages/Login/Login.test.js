import React from "react";
import Login from "../../../pages/Login/Login";
import { render } from "@testing-library/react";

describe("Página de Login", () => {
  it("O snapShot do component deve permanecer sempre o mesmo", () => {
    const { container } = render(<Login />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
