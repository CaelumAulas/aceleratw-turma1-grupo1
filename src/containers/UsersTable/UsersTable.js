import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import {
    Link,
    useRouteMatch
} from "react-router-dom"

import "./style.css"

function createData(name) {
    return {name};
}

const rows = [
    createData("Stella"),
    createData("Miguel"),
    createData("Natália"),
    createData("Vitor"),
];

const UsersTable = () => {
    let {path, url} = useRouteMatch();

    return (
        <section>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Nome </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell align="left" component="th" scope="row">
                                    {row.name}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Button variant="contained" color="primary">
                excluir
            </Button>
            <Button variant="contained">alterar</Button>
            <Link to={`${url}/cadastrar-usuarios`}>
                <Button variant="contained">incluir</Button>
            </Link>
        </section>
    );
}

export default UsersTable;
