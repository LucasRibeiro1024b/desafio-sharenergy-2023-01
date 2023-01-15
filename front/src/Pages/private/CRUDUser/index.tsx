import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
} from "@material-ui/core";
import { Edit, Delete } from "@material-ui/icons";

import Header from "../Components/Header";
import Footer from "../../components/Footer";
import "./index.css";

interface Column {
    id: "name" | "email" | "phone" | "endereco" | "cpf" | "actions";
    label: string;
    minWidth?: number;
    align?: "center";
    /* eslint-disable-next-line */
    format?: (value: number) => string;
}

const columns: Column[] = [
    { id: "name", label: "Nome", minWidth: 170 },
    { id: "email", label: "E-mail", minWidth: 100 },
    {
        id: "phone",
        label: "phone",
        minWidth: 170,
        align: "center",
    },
    {
        id: "endereco",
        label: "Endereço",
        minWidth: 170,
        align: "center",
    },
    {
        id: "cpf",
        label: "CPF",
        minWidth: 170,
        align: "center",
    },
    {
        id: "actions",
        label: "Ações",
        minWidth: 170,
        align: "center",
    },
];

interface Data {
    name: string;
    email: string;
    phone: string;
    endereco: string;
    cpf: string;
    actions?: any;
}

function createData(
    name: string,
    email: string,
    phone: string,
    endereco: string,
    cpf: string
): Data {
    return { name, email, phone, endereco, cpf };
}

const rows = [
    createData("user1", "user1", "1324171354", "alameda", "3287263"),
    createData("user2", "user2", "1403500365", "alameda", "9596961"),
    createData("user3", "user3", "60483973", "alameda", "301340"),
    createData("user4", "user4", "327167434", "alameda", "9833520"),
    createData("user5", "user5", "37602103", "alameda", "9984670"),
    createData("user6", "user6", "25475400", "alameda", "7692024"),
    createData("user7", "user7", "83019200", "alameda", "357578"),
    createData("user8", "user8", "4857000", "alameda", "70273"),
    createData("user9", "user9", "126577691", "alameda", "1972550"),
    createData("user10", "user10", "126317000", "alameda", "377973"),
    createData("user11", "user11", "67022000", "alameda", "640679"),
    createData("user12", "user12", "67545757", "alameda", "242495"),
    createData("user13", "user13", "146793744", "alameda", "17098246"),
    createData("user14", "user14", "200962417", "alameda", "923768"),
    createData("user15", "user15", "210147125", "alameda", "8515767"),
];

const useStyles = makeStyles({
    root: {
        width: "99%",
        borderRadius: 10,
        paddingTop: 10,
        border: "3px solid darkgray",
    },
    container: {
        maxHeight: 440,
    },
    containActions: {
        cursor: "pointer",
    },
    textActions: {
        position: "relative",
        bottom: 7,
    },
});

/* global HTMLInputElement */

const CRUDUser: React.FC = () => {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <div>
            <div className="contain-crud">
                <Header input={false} />
                <h2 className="title-name">Listagem de usuários</h2>
                <Paper className={classes.root}>
                    <TableContainer className={classes.container}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    {columns.map(column => (
                                        <TableCell
                                            key={column.id}
                                            align={column.align}
                                            style={{
                                                minWidth: column.minWidth,
                                            }}
                                        >
                                            {column.label}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows
                                    .slice(
                                        page * rowsPerPage,
                                        page * rowsPerPage + rowsPerPage
                                    )
                                    .map(row => (
                                        <TableRow
                                            hover
                                            role="checkbox"
                                            tabIndex={-1}
                                            key={row.cpf}
                                        >
                                            {columns.map(column => {
                                                const value = row[column.id];
                                                return (
                                                    <TableCell
                                                        key={column.id}
                                                        align={column.align}
                                                    >
                                                        {column.id ===
                                                        "actions" ? (
                                                            <div>
                                                                <div
                                                                    className={
                                                                        classes.containActions
                                                                    }
                                                                >
                                                                    <Edit color="action" />
                                                                    <span
                                                                        className={
                                                                            classes.textActions
                                                                        }
                                                                    >
                                                                        {" "}
                                                                        Editar
                                                                    </span>
                                                                </div>
                                                                <div
                                                                    className={
                                                                        classes.containActions
                                                                    }
                                                                >
                                                                    <Delete color="error" />
                                                                    <span
                                                                        className={
                                                                            classes.textActions
                                                                        }
                                                                    >
                                                                        {" "}
                                                                        Excluir
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        ) : (
                                                            value
                                                        )}
                                                    </TableCell>
                                                );
                                            })}
                                        </TableRow>
                                    ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[10, 25, 100]}
                        component="div"
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Paper>
            </div>
            <Footer colorWhite={false} />
        </div>
    );
};

export default CRUDUser;
