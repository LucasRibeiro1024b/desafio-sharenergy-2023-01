import React from "react";
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
import { Search, Home, Feedback, Pets, PersonAdd } from "@material-ui/icons";
import { Link } from "react-router-dom";

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
            [theme.breakpoints.up("sm")]: {
                display: "block",
            },
        },
        titleTow: {
            flexGrow: 1,
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
                right: 0,
            },
            [theme.breakpoints.up("sm")]: {
                position: "relative",
                right: "3%",
            },
            [theme.breakpoints.up("md")]: {
                position: "relative",
                right: "30%",
            },
            [theme.breakpoints.up("lg")]: {
                position: "relative",
                right: "40%",
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
        },
        containIcon: {
            display: "flex",
            alignItems: "center",
        },
        navigationA: {
            color: "#fff",
            textDecorator: "none",
            textDecorationLine: "none",
        },
        navigationIcon: {
            position: "relative",
            top: 5,
        },
    })
);

interface IProps {
    search?: string;
    setSearch?: Function;
    input: boolean;
}

const Header: React.FC<IProps> = ({ search, setSearch, input }) => {
    const classes = useStyles();

    return (
        <div className="contain-header">
            <AppBar position="fixed">
                <Toolbar className={classes.containItemHeader}>
                    {!input ? (
                        <Typography
                            id="User"
                            className={classes.titleTow}
                            variant="h6"
                            noWrap
                        >
                            Sharenergy challenge
                        </Typography>
                    ) : (
                        <Typography
                            id="User"
                            className={classes.title}
                            variant="h6"
                            noWrap
                        >
                            Sharenergy challenge
                        </Typography>
                    )}
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
                    <div>
                        <ul className={classes.containIcons}>
                            <li className={classes.containIcon}>
                                <Link to="/" className={classes.navigationA}>
                                    <Home className={classes.navigationIcon} />{" "}
                                    Home
                                </Link>
                            </li>
                            <li className={classes.containIcon}>
                                <Link
                                    to="/status"
                                    className={classes.navigationA}
                                >
                                    <Feedback
                                        className={classes.navigationIcon}
                                    />{" "}
                                    Status
                                </Link>
                            </li>
                            <li className={classes.containIcon}>
                                <Link
                                    to="/picture"
                                    className={classes.navigationA}
                                >
                                    <Pets className={classes.navigationIcon} />{" "}
                                    Foto
                                </Link>
                            </li>
                            <li className={classes.containIcon}>
                                <Link
                                    to="/users"
                                    className={classes.navigationA}
                                >
                                    <PersonAdd
                                        className={classes.navigationIcon}
                                    />{" "}
                                    Usuário
                                </Link>
                            </li>
                        </ul>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header;
