import React, { useEffect, useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import "./style.css";
import { findAllVehicles } from "../../api/users/UsersApi";

const VehiclesTable = () => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    findAllVehicles("/vehicles", setVehicles);
  }, []);

  return (
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
            {vehicles.map((row) => (
              <TableRow key={row.model}>
                <TableCell component="th" scope="row">
                  {row.brand}
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
        <Button variant="contained" color="primary">
          Excluir
        </Button>
        <Button variant="contained">Alterar</Button>
        <Button variant="contained">Incluir</Button>
      </div>
    </section>
  );
};

export default VehiclesTable;
