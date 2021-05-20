import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import "./style.css";

const BrandsForm = ({ sendBrand }) => {
  const [brand, setBrand] = useState("");
  const [errors, setErrors] = useState({
    validator: { isvalid: true, text: "" }
  });

  function validate(brand) {
    let isBrandValid = {
      isvalid: true,
      text: "",
    };

    if (brand.length <= 2) {
      isBrandValid = {
        isvalid: false,
        text: "A marca deve ter pelo menos 3 dígitos",
      };
    }

    if (brand.length === 0) {
      isBrandValid = {
        isvalid: false,
        text: "Preencha o campo Marca",
      };
    }

    return isBrandValid;
  }

  return (
    <section>
      <form
        data-testid="BrandForm"
        onSubmit={(event) => {
          event.preventDefault();
          setErrors({ validator: validate(brand) });
          if (brand.length === 0) {
            return false;
          }
          sendBrand(brand)
        }}
        className="brandsForm"
        noValidate
        autoComplete="off"
      >
        <div className="brandsForm--inputs">
          <TextField
            error={!errors.validator.isvalid}
            fullWidth
            helperText={errors.validator.text}
            id="standard-basic"
            label="Marca"
            margin="normal"
            name="brand"
            required
            value={brand}
            variant="outlined"
            onChange={(event) => {
              setBrand(event.target.value);
            }}
            onBlur={(event) => {
              setErrors({ validator: validate(brand) });
            }}
          />
        </div>
        <Button
          type="submit"
          variant="contained"
        >
          Cadastrar
        </Button>
        <Button variant="contained">
          Cancelar
        </Button>
      </form>
    </section>
  );
}

export default BrandsForm;
