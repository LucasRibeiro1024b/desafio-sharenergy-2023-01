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
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
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
        search: {
            position: "relative",
            right: "45%",
            borderRadius: theme.shape.borderRadius,
            backgroundColor: alpha(theme.palette.common.white, 0.15),
            "&:hover": {
                backgroundColor: alpha(theme.palette.common.white, 0.25),
            },
            marginLeft: 0,
            width: "100%",
            [theme.breakpoints.up("xs")]: {
                right: 0,
                width: 200,
            },
            [theme.breakpoints.up("sm")]: {
                marginLeft: theme.spacing(1),
                width: "auto",
                right: "35%",
            },
            [theme.breakpoints.up("md")]: {
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
            width: "100%",
            [theme.breakpoints.up("sm")]: {
                width: "6ch",
                "&:focus": {
                    width: "20ch",
                },
            },
        },
        navigationA: {
            color: "#fff",
            textDecorator: "none",
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
                <Toolbar>
                    <Typography
                        id="User"
                        className={classes.title}
                        variant="h6"
                        noWrap
                    >
                        Sharenergy challenge
                    </Typography>
                    {input && (
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
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
                                fullWidth
                                inputProps={{ "aria-label": "search" }}
                            />
                        </div>
                    )}
                    <div>
                        <ul>
                            <li>
                                <a href="#User" className={classes.navigationA}>
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#User" className={classes.navigationA}>
                                    Status
                                </a>
                            </li>
                            <li>
                                <a href="#User" className={classes.navigationA}>
                                    Pic
                                </a>
                            </li>
                            <li>
                                <a href="#User" className={classes.navigationA}>
                                    Config
                                </a>
                            </li>
                        </ul>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header;
