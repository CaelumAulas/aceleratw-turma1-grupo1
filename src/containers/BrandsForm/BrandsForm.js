import React from "react";

import { Button, TextField } from "@material-ui/core";

import "./style.css";

const BrandsForm = () => (
  <section>
    <form className="brandsForm" noValidate autoComplete="off">
      <div className="brandsForm--inputs">
        <TextField id="standard-basic" label="Marca" />
      </div>
      ß<Button variant="contained">Cadastrar</Button>
      <Button variant="contained">Cancelar</Button>
    </form>
  </section>
);

export default BrandsForm;
