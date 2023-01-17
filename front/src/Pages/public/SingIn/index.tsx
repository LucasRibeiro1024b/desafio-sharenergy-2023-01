import React, { useState, useContext } from "react";
import {
    Snackbar,
    InputAdornment,
    FormControl,
    Input,
    InputLabel,
    IconButton,
    FormControlLabel,
    withStyles,
    Checkbox,
    Button,
    CircularProgress,
} from "@material-ui/core";
import { AccountCircle, VisibilityOff, Visibility } from "@material-ui/icons";
import { green } from "@material-ui/core/colors";
import { CheckboxProps } from "@material-ui/core/Checkbox";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import MuiAlert from "@material-ui/lab/Alert";

import Footer from "../../components/Footer";
import "./index.css";
import userImg from "../../../Assets/user.png";
import { AuthContext } from "../../../Services/Context/Auth";
import { api } from "../../../Services/API";

const GreenCheckbox = withStyles({
    root: {
        color: green[400],
        "&$checked": {
            color: green[600],
        },
    },
})((props: CheckboxProps) => <Checkbox color="default" {...props} />);

const useStyles = makeStyles(() =>
    createStyles({
        label: {
            fontFamily: "GreatVibes",
            fontWeight: "bolder",
            fontSize: 22,
            letterSpacing: 2,
        },
    })
);

interface IDataLogin {
    username: string;
    password: string;
    remember: boolean;
}

/* global localStorage */

const Login: React.FC = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [data, setData] = useState<IDataLogin>({} as IDataLogin);
    const [open, setOpen] = useState<boolean>(false);
    const [messageError, setMessageError] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    const { setLogined, setUserData } = useContext(AuthContext);

    const login: Function = () => {
        if (
            data.username === undefined ||
            data.password === undefined ||
            data.username.length < 4 ||
            data.password.length < 4
        ) {
            setMessageError(
                "o nome de usuário e senha devem ter mais que 5 letras!"
            );
            setOpen(true);
            return;
        }
        setLoading(true);

        const sendData = {
            username: data.username,
            password: data.password,
        };

        api.post("/admin/login", sendData)
            .then(res => {
                setUserData({
                    username: res.data.username,
                    password: res.data.password,
                });
                if (data.remember === true) {
                    localStorage.setItem("username", res.data.username);
                    localStorage.setItem("password", res.data.password);
                }
                setLogined(true);
            })
            .catch(() => {
                setMessageError("o nome de usuário ou senha está incorreto!");
                setOpen(true);
            })
            .finally(() => setLoading(false));
    };

    const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === "clickaway") {
            return;
        }

        setOpen(false);
    };

    const classes = useStyles();

    return (
        <div>
            <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
                <MuiAlert
                    elevation={6}
                    variant="filled"
                    onClose={handleClose}
                    severity="error"
                >
                    Não foi possível realizar o login, {messageError}
                </MuiAlert>
            </Snackbar>
            <div className="contain">
                <div className="contain-content">
                    <div className="center">
                        <p className="title-login">Login</p>
                        <img alt="user" src={userImg} className="avatar" />
                    </div>
                    <div className="center between">
                        <div>
                            <FormControl>
                                <InputLabel
                                    htmlFor="standard-adornment-username"
                                    className={classes.label}
                                >
                                    Username
                                </InputLabel>
                                <Input
                                    id="standard-adornment-username"
                                    defaultValue={data.username}
                                    onChange={value =>
                                        setData({
                                            ...data,
                                            username: value.target.value,
                                        })
                                    }
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                onClick={() =>
                                                    setShowPassword(
                                                        !showPassword
                                                    )
                                                }
                                                aria-label="toggle username"
                                            >
                                                <AccountCircle />
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                        </div>
                        <FormControl>
                            <InputLabel
                                htmlFor="standard-adornment-password"
                                className={classes.label}
                            >
                                Password
                            </InputLabel>
                            <Input
                                id="standard-adornment-password"
                                type={showPassword ? "text" : "password"}
                                defaultValue={data.password}
                                onChange={value =>
                                    setData({
                                        ...data,
                                        password: value.target.value,
                                    })
                                }
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={() =>
                                                setShowPassword(!showPassword)
                                            }
                                            aria-label="toggle password visibility"
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
                        <FormControlLabel
                            control={
                                <GreenCheckbox
                                    value={data.remember}
                                    onChange={() =>
                                        setData({
                                            ...data,
                                            remember: !data.remember,
                                        })
                                    }
                                    name="checkedG"
                                />
                            }
                            label="Lembrar de mim"
                        />
                    </div>
                    <div className="mb-25">
                        <Button
                            disabled={loading}
                            variant="outlined"
                            onClick={() => login()}
                        >
                            {loading ? <CircularProgress /> : "Entrar"}
                        </Button>
                    </div>
                </div>
            </div>
            <Footer colorWhite />
        </div>
    );
};

export default Login;
