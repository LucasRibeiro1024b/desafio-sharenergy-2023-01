import React, { useContext } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import {
    createStyles,
    alpha,
    Theme,
    makeStyles,
} from "@material-ui/core/styles";
import {
    Search,
    Home,
    Feedback,
    Pets,
    PersonAdd,
    ExitToApp,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

import { AuthContext } from "../../../../Services/Context/Auth";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        containItemHeader: {
            display: "flex",
            justifyContent: "space-between",
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
            display: "none",
            [theme.breakpoints.up("md")]: {
                display: "block",
            },
        },
        search: {
            position: "relative",
            borderRadius: theme.shape.borderRadius,
            backgroundColor: alpha(theme.palette.common.white, 0.15),
            "&:hover": {
                backgroundColor: alpha(theme.palette.common.white, 0.25),
            },
            marginLeft: 0,
            width: "auto",
            alignSelf: "center",
            right: "40%",
            [theme.breakpoints.up("xs")]: {
                position: "relative",
                right: 10,
            },
            [theme.breakpoints.up("sm")]: {
                position: "relative",
                right: 0,
            },
            [theme.breakpoints.up("md")]: {
                position: "relative",
                right: "10%",
            },
            [theme.breakpoints.up("lg")]: {
                position: "relative",
                right: "20%",
            },
        },
        searchIcon: {
            padding: theme.spacing(0, 2),
            height: "100%",
            position: "absolute",
            pointerEvents: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        },
        inputRoot: {
            color: "inherit",
        },
        inputInput: {
            padding: theme.spacing(1, 1, 1, 0),
            paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
            transition: theme.transitions.create("width"),
            width: "6ch",
            "&:focus": {
                width: "20ch",
            },
        },
        containIcons: {
            listStyle: "none",
            display: "flex",
        },
        containIcon: {
            display: "flex",
            alignItems: "center",
            [theme.breakpoints.up("xs")]: {
                marginRight: 9,
                position: "relative",
                right: 40,
            },
            [theme.breakpoints.up("sm")]: {
                marginRight: 20,
                left: 10,
            },
            [theme.breakpoints.up("md")]: {
                left: 28,
            },
        },
        lastContainIcon: {
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            [theme.breakpoints.up("xs")]: {
                position: "relative",
                right: 23,
            },
            [theme.breakpoints.up("sm")]: {
                marginRight: 0,
                left: 10,
            },
            [theme.breakpoints.up("md")]: {
                left: 8,
            },
        },
        navigationA: {
            color: "#fff",
            textDecorator: "none",
            textDecorationLine: "none",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
        },
        LastnavigationA: {
            textDecorator: "none",
            textDecorationLine: "none",
        },
        textLogout: {
            color: "#f00",
            fontWeight: "bold",
        },
    })
);

interface IProps {
    search?: string;
    setSearch?: Function;
    input: boolean;
}

/* global localStorage */

const Header: React.FC<IProps> = ({ search, setSearch, input }) => {
    const { setLogined, setUserData } = useContext(AuthContext);

    const classes = useStyles();

    const logout: Function = () => {
        localStorage.clear();
        setUserData({ username: "", password: "" });
        setLogined(false);
    };

    return (
        <div className="contain-header">
            <AppBar position="fixed">
                <Toolbar className={classes.containItemHeader}>
                    <Typography
                        id="User"
                        className={classes.title}
                        variant="h6"
                        noWrap
                    >
                        Sharenergy challenge
                    </Typography>
                    {/* header so tem input search no home */}
                    {input && (
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <Search />
                            </div>
                            <InputBase
                                placeholder="Search…"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                defaultValue={search}
                                onChange={e =>
                                    setSearch !== undefined &&
                                    setSearch(e.target.value)
                                }
                                inputProps={{ "aria-label": "search" }}
                            />
                        </div>
                    )}
                    {/* links para página de deslogar da página */}
                    <div>
                        <ul className={classes.containIcons}>
                            <li className={classes.containIcon}>
                                <Link to="/" className={classes.navigationA}>
                                    <Home /> <span>Home</span>
                                </Link>
                            </li>
                            <li className={classes.containIcon}>
                                <Link
                                    to="/status"
                                    className={classes.navigationA}
                                >
                                    <Feedback /> <span>Status</span>
                                </Link>
                            </li>
                            <li className={classes.containIcon}>
                                <Link
                                    to="/picture"
                                    className={classes.navigationA}
                                >
                                    <Pets /> <span>Foto</span>
                                </Link>
                            </li>
                            <li className={classes.containIcon}>
                                <Link
                                    to="/users"
                                    className={classes.navigationA}
                                >
                                    <PersonAdd /> <span>Usuário</span>
                                </Link>
                            </li>
                            <li className={classes.lastContainIcon}>
                                {/* eslint-disable-next-line */}
                                <div
                                    className={classes.lastContainIcon}
                                    onClick={() => logout()}
                                >
                                    <ExitToApp color="error" />{" "}
                                    <span className={classes.textLogout}>
                                        Sair
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header;
