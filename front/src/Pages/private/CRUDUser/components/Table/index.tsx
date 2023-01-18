import React, { useState, useEffect } from "react";
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
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Skeleton from "@material-ui/lab/Skeleton";

import { api } from "../../../../../Services/API";

interface Column {
    id: "name" | "email" | "phone" | "addres" | "cpf" | "actions";
    label: string;
    minWidth?: number;
    align?: "center";
    /* eslint-disable-next-line */
    format?: (value: number) => string;
}

const columns: Column[] = [
    { id: "name", label: "Nome", minWidth: 170, align: "center" },
    { id: "email", label: "E-mail", minWidth: 100, align: "center" },
    {
        id: "phone",
        label: "Telefone",
        minWidth: 170,
        align: "center",
    },
    {
        id: "addres",
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
    addres: string;
    cpf: string;
    password?: string;
    actions?: any;
}

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            width: "99%",
            borderRadius: 10,
            paddingTop: 10,
            border: "3px solid darkgray",
            marginBottom: 50,
        },
        container: {
            maxHeight: 440,
        },
        containRowsColumns: {
            borderLeft: "1px solid #e9e8e8",
        },
        containActions: {
            cursor: "pointer",
        },
        textActions: {
            position: "relative",
            bottom: 7,
        },
    })
);

interface IProps {
    setFeedbackSeverity: Function;
    setMessageFeedback: Function;
    setModalData: Function;
    setEditUser: Function;
    setOpen: Function;
    refresh: boolean;
    setRefresh: Function;
    setOpenFeedback: Function;
}

/* global HTMLInputElement, window */

const TableCrud: React.FC<IProps> = ({
    setFeedbackSeverity,
    setMessageFeedback,
    setModalData,
    setEditUser,
    setOpen,
    refresh,
    setRefresh,
    setOpenFeedback,
}) => {
    const [page, setPage] = useState<number>(0);
    const [rowsPerPage, setRowsPerPage] = useState<number>(10);
    const [rows, setRows] = useState<Data[]>([] as Data[]);
    const [ready, setReady] = useState<boolean>(false);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const deleteUser: Function = (cpf: string, email: string) => {
        const sendData = { cpf, email };

        api.delete("/user", { data: sendData })
            .then(() => {
                setFeedbackSeverity("success");
                setMessageFeedback("Usuário excluido com sucesso!");
                setOpenFeedback(true);
                setRefresh(true);
            })
            .catch(() => {
                setFeedbackSeverity("error");
                setMessageFeedback("Não foi possível excluir o usuário!");
                setOpenFeedback(true);
            });
    };

    const getAllUsers: Function = () => {
        api.get("/user")
            .then(({ data }) => {
                setRows(data);
                setReady(true);
            })
            .catch(() => {
                setFeedbackSeverity("error");
                setMessageFeedback("Não foi possível encontrar os usuários!");
                setOpenFeedback(true);
            });
    };

    useEffect(() => {
        if (refresh) {
            getAllUsers();
            setRefresh(false);
        }
    }, [refresh]);

    const classes = useStyles();

    if (!ready) {
        return (
            <Skeleton variant="rect" width={window.screen.width} height={500} />
        );
    }
    return (
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
                                    className={classes.containRowsColumns}
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
                                                className={
                                                    classes.containRowsColumns
                                                }
                                            >
                                                {column.id === "actions" ? (
                                                    <div>
                                                        {/* eslint-disable-next-line */}
                                                        <div
                                                            className={
                                                                classes.containActions
                                                            }
                                                            onClick={() => {
                                                                setModalData(
                                                                    row
                                                                );
                                                                setEditUser(
                                                                    true
                                                                );
                                                                setOpen(true);
                                                            }}
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
                                                        {/* eslint-disable-next-line */}
                                                        <div
                                                            className={
                                                                classes.containActions
                                                            }
                                                            onClick={() =>
                                                                deleteUser(
                                                                    row.cpf,
                                                                    row.email
                                                                )
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
    );
};

export default TableCrud;
