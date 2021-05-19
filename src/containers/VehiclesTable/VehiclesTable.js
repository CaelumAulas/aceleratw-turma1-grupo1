import React from "react"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableContainer from "@material-ui/core/TableContainer"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import Paper from "@material-ui/core/Paper"
import Button from "@material-ui/core/Button"

import './style.css'

function createData(name, model, year, value) {
  return { name, model, year, value }
}

const rows = [
  createData('Ford', 'KA', '2020', 'R$15.000'),
  createData('GM', 'Corsa', '2015', 'R$7.000'),
]

const VehiclesTable = () => (
  <section className="vehiclesTable">
    <TableContainer component={Paper} className="vehiclesTable--table">
      <Table aria-label="Vehicles Table">
        <TableHead>
          <TableRow>
            <TableCell>Marcas</TableCell>
            <TableCell align="right">Modelo</TableCell>
            <TableCell align="right">Ano</TableCell>
            <TableCell align="right">Valor</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.model}</TableCell>
              <TableCell align="right">{row.year}</TableCell>
              <TableCell align="right">{row.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <div className="vehiclesTable--actions">
      <Button
        variant="contained"
        color="secondary"
      >
      Excluir
      </Button>
      <Button variant="contained">Alterar</Button>
      <Button variant="contained" onClick={() => {
        window.location.href = '/cadastro-veiculo';
      }}>
        Incluir
      </Button>
    </div>
  </section>
)

export default VehiclesTable
