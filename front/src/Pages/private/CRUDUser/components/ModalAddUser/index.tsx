import React, { useState } from "react";
import {
    TextField,
    Input,
    InputLabel,
    IconButton,
    InputAdornment,
    FormControl,
    Button,
} from "@material-ui/core";
import {
    makeStyles,
    Theme,
    createStyles,
    withStyles,
} from "@material-ui/core/styles";
import { Visibility, VisibilityOff, Save, Cancel } from "@material-ui/icons";
import { green, red } from "@material-ui/core/colors";

import "./index.css";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        modal: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            padding: 50,
        },
        paper: {
            backgroundColor: "#ddd",
            border: "2px solid #000",
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
            borderRadius: 10,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
        },
        modalRightContent: {
            marginLeft: 50,
            marginBottom: 25,
            maxWidth: "40%",
            minWidth: "40%",
        },
        containLeftContent: {
            marginLeft: 0,
            marginBottom: 25,
            maxWidth: "40%",
            minWidth: "40%",
        },
        containIconSave: {
            color: "#fff",
        },
    })
);

const ColorGreen = withStyles((theme: Theme) => ({
    root: {
        color: theme.palette.getContrastText(green[500]),
        backgroundColor: green[500],
        "&:hover": {
            backgroundColor: green[700],
        },
    },
}))(Button);

const ColorRed = withStyles((theme: Theme) => ({
    root: {
        color: theme.palette.getContrastText(red[500]),
        backgroundColor: red[500],
        "&:hover": {
            backgroundColor: red[700],
        },
    },
}))(Button);

interface Data {
    name: string;
    email: string;
    phone: string;
    addres: string;
    cpf: string;
    password?: string;
    actions?: any;
}

interface IProps {
    edit: boolean;
    handleClose(): void;
    value: Data;
    setValue: Function;
}

const ModalAddUser: React.FC<IProps> = ({
    edit,
    handleClose,
    value,
    setValue,
}) => {
    const [showPassword, setShowPassword] = useState<boolean>(false);

    /*
    const editOrRegister = () => {
        api.post("/user", value).then(({data}) => console.log(data))
        api.put("/user", value).then(({data}) => console.log(data))
    }
    */

    const classes = useStyles();

    return (
        <div className={classes.paper}>
            <h3 id="simple-modal-title" className="title-modal">
                {edit ? "Editar" : "Adicionar"} usuário
            </h3>
            <div id="simple-modal-description" className="modalAllContent">
                <div>
                    <TextField
                        defaultValue={value?.name}
                        onChange={e =>
                            setValue({ ...value, name: e.target.value })
                        }
                        id="standard-basic"
                        label="Nome"
                        className={classes.containLeftContent}
                    />
                    <TextField
                        defaultValue={value?.email}
                        onChange={e =>
                            setValue({ ...value, email: e.target.value })
                        }
                        disabled={!edit}
                        id="standard-basic"
                        label="Email"
                        className={classes.modalRightContent}
                    />
                </div>
                <div>
                    <TextField
                        defaultValue={value?.phone}
                        onChange={e =>
                            setValue({ ...value, phone: e.target.value })
                        }
                        id="standard-basic"
                        label="Telefone"
                        className={classes.containLeftContent}
                    />
                    <TextField
                        defaultValue={value?.addres}
                        onChange={e =>
                            setValue({ ...value, addres: e.target.value })
                        }
                        id="standard-basic"
                        label="Endereço"
                        className={classes.modalRightContent}
                    />
                </div>
                <div>
                    <TextField
                        defaultValue={value?.cpf}
                        onChange={e =>
                            setValue({ ...value, cpf: e.target.value })
                        }
                        disabled={!edit}
                        id="standard-basic"
                        label="CPF"
                        className={classes.containLeftContent}
                    />
                    <FormControl className={classes.modalRightContent}>
                        <InputLabel htmlFor="standard-adornment-password">
                            Password
                        </InputLabel>
                        <Input
                            id="standard-adornment-password"
                            type={showPassword ? "text" : "password"}
                            defaultValue={value?.password}
                            onChange={e =>
                                setValue({ ...value, password: e.target.value })
                            }
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={() =>
                                            setShowPassword(!showPassword)
                                        }
                                    >
                                        {showPassword ? (
                                            <Visibility />
                                        ) : (
                                            <VisibilityOff />
                                        )}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                </div>
                <div className="containButton">
                    <ColorGreen
                        variant="contained"
                        color="primary"
                        startIcon={
                            <Save
                                color="inherit"
                                className={classes.containIconSave}
                            />
                        }
                        className={classes.containLeftContent}
                    >
                        <span className={classes.containIconSave}>Salvar</span>
                    </ColorGreen>
                    <ColorRed
                        variant="contained"
                        color="primary"
                        startIcon={<Cancel />}
                        onClick={handleClose}
                        className={classes.modalRightContent}
                    >
                        Cancelar
                    </ColorRed>
                </div>
            </div>
        </div>
    );
};

export default ModalAddUser;
