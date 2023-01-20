import React, { useState } from "react";
import { Modal, Snackbar } from "@material-ui/core";
import { AddCircle } from "@material-ui/icons";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import MuiAlert from "@material-ui/lab/Alert";

import Header from "../Components/Header";
import Footer from "../../components/Footer";
import "./index.css";
import TableCrud from "./components/Table";
import ModalAddUser from "./components/ModalAddUser";

const useStyles = makeStyles(() =>
    createStyles({
        modal: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            padding: 50,
        },
    })
);

interface Data {
    name: string;
    email: string;
    phone: string;
    addres: string;
    cpf: string;
    password?: string;
    actions?: any;
}

const CRUDUser: React.FC = () => {
    // variável para abrir o modal de adicionar ou editar usuário
    const [open, setOpen] = useState<boolean>(false);
    const [openFeedback, setOpenFeedback] = useState<boolean>(false);
    const [messageFeedback, setMessageFeedback] = useState<string>("");
    const [feedbackSeverity, setFeedbackSeverity] = useState<any>();
    const [modalData, setModalData] = useState<Data>({} as Data);
    const [editUser, setEditUser] = useState<boolean>(false);
    const [refresh, setRefresh] = useState<boolean>(true);

    const handleOpen = (value?: Data) => {
        if (value !== undefined) setModalData(value);
        setOpen(true);
    };

    const handleClose = () => {
        setModalData({} as Data);
        setOpen(false);
    };

    const handleCloseFeedback = (
        event?: React.SyntheticEvent,
        reason?: string
    ) => {
        if (reason === "clickaway") {
            return;
        }

        setOpenFeedback(false);
    };

    const classes = useStyles();

    return (
        <div>
            {/* mostra um feedback para o usuário depois de uma ação */}
            <Snackbar
                open={openFeedback}
                autoHideDuration={4000}
                onClose={handleCloseFeedback}
            >
                <MuiAlert
                    elevation={6}
                    variant="filled"
                    onClose={handleCloseFeedback}
                    severity={feedbackSeverity}
                >
                    {messageFeedback}
                </MuiAlert>
            </Snackbar>
            <div className="contain-crud">
                <Header input={false} />
                <h2 className="title-crud">Listagem de usuários</h2>
                {/* eslint-disable-next-line */}
                <div
                    className="contain-add-user"
                    onClick={() => {
                        setEditUser(false);
                        setModalData({
                            name: "",
                            email: "",
                            phone: "",
                            addres: "",
                            cpf: "",
                            password: "",
                        });
                        handleOpen();
                    }}
                >
                    <AddCircle color="action" fontSize="large" />
                    <span className="text-add-user">Adicionar usuário</span>
                </div>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    className={classes.modal}
                >
                    <ModalAddUser
                        setMessageFeedback={setMessageFeedback}
                        setFeedbackSeverity={setFeedbackSeverity}
                        edit={editUser}
                        handleClose={handleClose}
                        values={modalData}
                        setRefresh={setRefresh}
                        setOpenFeedback={setOpenFeedback}
                    />
                </Modal>
                <TableCrud
                    setMessageFeedback={setMessageFeedback}
                    setFeedbackSeverity={setFeedbackSeverity}
                    setModalData={setModalData}
                    setEditUser={setEditUser}
                    setOpen={setOpen}
                    refresh={refresh}
                    setRefresh={setRefresh}
                    setOpenFeedback={setOpenFeedback}
                />
            </div>
            <Footer colorWhite={false} />
        </div>
    );
};

export default CRUDUser;
