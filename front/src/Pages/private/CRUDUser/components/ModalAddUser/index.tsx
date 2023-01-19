import React, { useState, useEffect } from "react";
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
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Visibility, VisibilityOff, Save, Cancel } from "@material-ui/icons";
import { green, red } from "@material-ui/core/colors";
import { api } from "../../../../../Services/API";
import "./index.css";
import { checkValidCpfCnpj, cpfMask, phoneMask } from "../../../../../Utils";

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
        containInput: {
            display: "flex",
        },
        containError: {
            display: "flex",
            flexDirection: "column",
            maxWidth: "40%",
            minWidth: "40%",
        },
        textError: {
            fontSize: 12,
            fontWeight: "bolder",
            color: "#f00",
        },
        textErrorRight: {
            marginLeft: 50,
            fontSize: 12,
            fontWeight: "bolder",
            color: "#f00",
        },
        modalRightContent: {
            marginLeft: 50,
            marginBottom: 25,
            maxWidth: "100%",
            minWidth: "100%",
        },
        containLeftContent: {
            marginLeft: 0,
            marginBottom: 25,
            maxWidth: "100%",
            minWidth: "100%",
        },
        modalRightButton: {
            marginLeft: 50,
            marginBottom: 25,
            maxWidth: "40%",
            minWidth: "40%",
        },
        containLeftButton: {
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

const schema = yup.object({
    name: yup
        .string()
        .required("Preencha seu nome completo")
        .min(5, "Seu nome completo deve possuir no mínimo 5 letras"),
    email: yup
        .string()
        .email("Formato inválido de email")
        .required("Preencha com seu email"),
    password: yup
        .string()
        .required("Preencha sua senha")
        .min(5, "Sua senha deve ter no mínimo 5 dígitos"),
    cpf: yup
        .string()
        .required("Preencha com seu cpf")
        .min(14, "Digite o número de telefone igual o modelo (99) 99999-9999")
        .max(14, "Digite o número de telefone igual o modelo (99) 99999-9999"),
    addres: yup.string().required("Preencha o nome da sua rua e número"),
    phone: yup
        .string()
        .required("Digite o número do seu telefone")
        .min(16, "Digite o número de telefone igual o modelo (99) 99999-9999")
        .max(16, "Digite o número de telefone igual o modelo (99) 99999-9999"),
});

interface IProps {
    setFeedbackSeverity: Function;
    setMessageFeedback: Function;
    edit: boolean;
    handleClose(): void;
    values: Data;
    setRefresh: Function;
    setOpenFeedback: Function;
}

const ModalAddUser: React.FC<IProps> = ({
    setFeedbackSeverity,
    setMessageFeedback,
    edit,
    handleClose,
    values,
    setRefresh,
    setOpenFeedback,
}) => {
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const {
        control,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm<Data>({
        resolver: yupResolver(schema),
    });

    const setDefaultValues = (valuesData: Data) => {
        setValue("cpf", valuesData.cpf);
        setValue("email", valuesData.email);
        setValue("name", valuesData.name);
        setValue("addres", valuesData.addres);
        setValue("password", valuesData.password);
        setValue("phone", valuesData.phone);
    };

    useEffect(() => setDefaultValues(values), []);

    const showError: Function = (data: string) => {
        setFeedbackSeverity("error");
        setMessageFeedback(data);
        setOpenFeedback(true);
    };

    const feedBackError = (data: any) => {
        if (data.cpf) {
            showError(data.cpf.message);
        }
        if (data.password) {
            showError(data.password.message);
        }
        if (data.name) {
            showError(data.name.message);
        }
        if (data.email) {
            showError(data.email.message);
        }
        if (data.addres) {
            showError(data.addres.message);
        }
        if (data.phone) {
            showError(data.phone.message);
        }
    };

    const editOrRegister = (value: Data) => {
        if (!checkValidCpfCnpj(value.cpf)) {
            showError("O CPF informado é inválido!");
            return;
        }

        if (edit) {
            api.put("/user", value)
                .then(() => {
                    setFeedbackSeverity("success");
                    setMessageFeedback("Usuário editado com sucesso!");
                    setRefresh(true);
                    setOpenFeedback(true);
                    handleClose();
                })
                .catch(() => {
                    setFeedbackSeverity("error");
                    setMessageFeedback("Não foi possível editar o usuário!");
                    setOpenFeedback(true);
                });
        } else {
            api.post("/user", value)
                .then(() => {
                    setFeedbackSeverity("success");
                    setMessageFeedback("Usuário adicionado com sucesso!");
                    setRefresh(true);
                    setOpenFeedback(true);
                    handleClose();
                })
                .catch(() => {
                    setFeedbackSeverity("error");
                    setMessageFeedback(
                        "Não foi possível adicionar o usuário, já possuí um usuário com este email ou cpf!"
                    );
                    setOpenFeedback(true);
                });
        }
    };

    const classes = useStyles();

    return (
        <div className={classes.paper}>
            <h3 id="simple-modal-title" className="title-modal">
                {edit ? "Editar" : "Adicionar"} usuário
            </h3>
            <div id="simple-modal-description" className="modalAllContent">
                <div className={classes.containInput}>
                    <div className={classes.containError}>
                        {errors.name && (
                            <span className={classes.textError}>
                                {errors.name?.message}
                            </span>
                        )}
                        <Controller
                            control={control}
                            name="name"
                            render={({ field: { onChange, value } }) => (
                                <TextField
                                    value={value}
                                    onChange={onChange}
                                    id="standard-basic"
                                    label="Nome"
                                    className={classes.containLeftContent}
                                />
                            )}
                        />
                    </div>

                    <div className={classes.containError}>
                        {errors.email && (
                            <span className={classes.textErrorRight}>
                                {errors.email?.message}
                            </span>
                        )}
                        <Controller
                            control={control}
                            name="email"
                            render={({ field: { onChange, value } }) => (
                                <TextField
                                    value={value}
                                    onChange={onChange}
                                    disabled={edit}
                                    id="standard-basic"
                                    label="Email"
                                    className={classes.modalRightContent}
                                />
                            )}
                        />
                    </div>
                </div>
                <div className={classes.containInput}>
                    <div className={classes.containError}>
                        {errors.phone && (
                            <span className={classes.textError}>
                                {errors.phone?.message}
                            </span>
                        )}
                        <Controller
                            control={control}
                            name="phone"
                            render={({ field: { onChange, value } }) => (
                                <TextField
                                    value={value}
                                    onChange={e =>
                                        onChange(phoneMask(e.target.value))
                                    }
                                    id="standard-basic"
                                    label="Telefone"
                                    className={classes.containLeftContent}
                                />
                            )}
                        />
                    </div>

                    <div className={classes.containError}>
                        {errors.addres && (
                            <span className={classes.textErrorRight}>
                                {errors.addres?.message}
                            </span>
                        )}
                        <Controller
                            control={control}
                            name="addres"
                            render={({ field: { onChange, value } }) => (
                                <TextField
                                    value={value}
                                    onChange={onChange}
                                    id="standard-basic"
                                    label="Endereço"
                                    className={classes.modalRightContent}
                                />
                            )}
                        />
                    </div>
                </div>
                <div className={classes.containInput}>
                    <div className={classes.containError}>
                        {errors.cpf && (
                            <span className={classes.textError}>
                                {errors.cpf?.message}
                            </span>
                        )}
                        <Controller
                            control={control}
                            name="cpf"
                            render={({ field: { onChange, value } }) => (
                                <TextField
                                    value={value}
                                    onChange={e =>
                                        onChange(cpfMask(e.target.value))
                                    }
                                    disabled={edit}
                                    id="standard-basic"
                                    label="CPF"
                                    className={classes.containLeftContent}
                                />
                            )}
                        />
                    </div>

                    <div className={classes.containError}>
                        {errors.password && (
                            <span className={classes.textErrorRight}>
                                {errors.password?.message}
                            </span>
                        )}
                        <Controller
                            control={control}
                            name="password"
                            render={({ field: { onChange, value } }) => (
                                <FormControl
                                    className={classes.modalRightContent}
                                >
                                    <InputLabel htmlFor="standard-adornment-password">
                                        Password
                                    </InputLabel>
                                    <Input
                                        id="standard-adornment-password"
                                        type={
                                            showPassword ? "text" : "password"
                                        }
                                        value={value}
                                        onChange={onChange}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={() =>
                                                        setShowPassword(
                                                            !showPassword
                                                        )
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
                            )}
                        />
                    </div>
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
                        onClick={handleSubmit(editOrRegister, feedBackError)}
                        className={classes.containLeftButton}
                    >
                        <span className={classes.containIconSave}>Salvar</span>
                    </ColorGreen>
                    <ColorRed
                        variant="contained"
                        color="primary"
                        startIcon={<Cancel />}
                        onClick={handleClose}
                        className={classes.modalRightButton}
                    >
                        Cancelar
                    </ColorRed>
                </div>
            </div>
        </div>
    );
};

export default ModalAddUser;
