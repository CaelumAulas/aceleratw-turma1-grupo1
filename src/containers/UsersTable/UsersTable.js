import React, { useEffect, useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { Link, useRouteMatch } from "react-router-dom";

import "./style.css";
import { findAllUsers } from "../../api/users/UsersApi";

const UsersTable = () => {
  let { url } = useRouteMatch();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    findAllUsers("/users", setUsers);
  }, []);
 
  return (
    <section>
      <TableContainer component={Paper}>
        <Table aria-label="Users Table">
          <TableHead>
            <TableRow>
              <TableCell>Nome </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((row) => (
              <TableRow key={row.login}>
                <TableCell align="left" component="th" scope="row">
                  {row.login}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button variant="contained" color="primary">
        Excluir
      </Button>
      <Button variant="contained">alterar</Button>
      <Link to={`${url}/cadastrar-usuarios`}>
        <Button variant="contained">incluir</Button>
      </Link>
    </section>
  );
};

export default UsersTable;
