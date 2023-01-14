import React, { useState, useContext } from "react";
import {
    /* Grid,
    TextField, */
    InputAdornment,
    FormControl,
    Input,
    InputLabel,
    IconButton,
    FormControlLabel,
    withStyles,
    Checkbox,
    Button,
} from "@material-ui/core";
import { AccountCircle, VisibilityOff, Visibility } from "@material-ui/icons";
import { green } from "@material-ui/core/colors";
import { CheckboxProps } from "@material-ui/core/Checkbox";
import { createStyles, makeStyles } from "@material-ui/core/styles";

import "./index.css";
import userImg from "../../../Assets/user.png";
import { AuthContext } from "../../../Services/Context/Auth";

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

const Login: React.FC = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [data, setData] = useState<IDataLogin>({} as IDataLogin);

    const { setLogined } = useContext(AuthContext);

    const sendData: Function = () => {
        setLogined(true);
    };

    const classes = useStyles();

    return (
        <div className="contain">
            <div className="contain-content">
                <div className="center">
                    <p className="title-login">Login</p>
                    <img alt="user" src={userImg} className="avatar" />
                </div>
                <div className="center between">
                    <div>
                        {/* <Grid
                            container
                            spacing={2}
                            alignContent="center"
                            alignItems="flex-end"
                        >
                            <Grid item>
                                <AccountCircle />
                            </Grid>
                            <Grid item>
                                <TextField
                                    id="input-with-icon-grid"
                                    label="Username"
                                    defaultValue={data.username}
                                    onChange={value =>
                                        setData({
                                            ...data,
                                            username: value.target.value,
                                        })
                                    }
                                />
                            </Grid>
                        </Grid> */}
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
                                                setShowPassword(!showPassword)
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
                    <Button variant="outlined" onClick={() => sendData()}>
                        Entrar
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Login;
