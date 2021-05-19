import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

function createData(brand) {
  return { brand };
}

const rows = [
  createData("Fiat"),
  createData("Chevrolet"),
  createData("Ford"),
  createData("VolksWagen"),
];

const BrandsTable = () => (
  <section>
    <TableContainer component={Paper}>
      <Table aria-label="Users Table">
        <TableHead>
          <TableRow>
            <TableCell>Marcas</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.brand}>
              <TableCell align="left" component="th" scope="row">
                {row.brand}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Button 
    variant="contained"
    color="secondary">
      Excluir
    </Button>
    <Button variant="contained">Alterar</Button>
    <Button variant="contained" onClick={() => {
      window.location.href = '/cadastro-marca';
    }}>
      Incluir
    </Button>

  </section>
);

export default BrandsTable;
