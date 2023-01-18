import React, { useEffect, useState } from "react";
import {
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Skeleton from "@material-ui/lab/Skeleton";
import Pagination from "@material-ui/lab/Pagination";

import Header from "../Components/Header";
import Footer from "../../components/Footer";
import { fakeUsers } from "../../../Services/API";
import { pagCount } from "../../../Utils";
import "./index.css";

type picture = {
    large: string;
};

type name = {
    first: string;
    last: string;
};

type login = {
    username: string;
    uuid: string;
};

type age = {
    age: number;
};

interface IFakerUser {
    picture: picture;
    name: name;
    email: string;
    login: login;
    dob: age;
}

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        marginTop: 30,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20,
    },
    action: {
        cursor: "auto",
    },
    media: {
        height: 140,
        backgroundPosition: "cover",
    },
});

const numberContentUsers: number = 20;
const auxSetUsers: IFakerUser[] = [];
let isRequested: boolean = false;

interface IPropsCard {
    value: IFakerUser;
    index?: number;
}

const Cards: React.FC<IPropsCard> = ({ value, index }) => {
    const classes = useStyles();

    return (
        <div key={`${value.login.uuid}${index !== undefined && "1a2b"}`}>
            <Card className={classes.root}>
                <CardActionArea className={classes.action}>
                    <CardMedia
                        className={classes.media}
                        image={value.picture.large}
                        title={`Usuario ${value.name.first}`}
                    />
                    <CardContent>
                        <Typography
                            gutterBottom
                            variant="h5"
                            component="h2"
                            className="title-name"
                            align="center"
                        >
                            {`${value.name.first} ${value.name.last}`}
                        </Typography>

                        <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                        >
                            usuário: {value.login.username}
                        </Typography>

                        <Typography color="textSecondary" component="p">
                            email: {value.email}
                        </Typography>

                        <Typography color="textSecondary" component="p">
                            idade: {value.dob.age}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
};

/* global window */

const Home: React.FC = () => {
    const [fakeUsersData, setFakeUsersData] = useState<IFakerUser[]>(
        [] as IFakerUser[]
    );
    const [usersPag, setUsersPag] = useState<IFakerUser[]>([] as IFakerUser[]);
    const [, setForceRenderer] = useState<IFakerUser[]>();
    const [search, setSearch] = useState<string>("");
    const [numberPag, setNumberPag] = useState<number>(1);
    const [page, setPage] = useState<number>(1);

    const refreshUsers: Function = (data?: IFakerUser[]) => {
        auxSetUsers.length = 0;
        pagCount.forEach(value => {
            auxSetUsers.push(
                data === undefined
                    ? fakeUsersData[numberContentUsers * (page - 1) + value.id]
                    : data[numberContentUsers * (page - 1) + value.id]
            );
        });
        setUsersPag(auxSetUsers);
        setForceRenderer(usersPag);
        setForceRenderer([]);
    };

    useEffect(() => {
        if (!isRequested) {
            isRequested = true;
            fakeUsers().then(({ data }: any) => {
                setFakeUsersData(data.results);
                setNumberPag(
                    Math.round(data.results.length / numberContentUsers)
                );
                refreshUsers(data.results);
                isRequested = false;
            });
        }
    }, []);

    useEffect(() => {
        setUsersPag([] as IFakerUser[]);
        if (fakeUsersData.length > 1) {
            refreshUsers();
        }
        window.scrollTo({ top: 0 });
    }, [page]);

    useEffect(() => {
        if (search.length > 0) setUsersPag([] as IFakerUser[]);
        else if (fakeUsersData.length > 1 && usersPag.length === 0) {
            refreshUsers();
        }
    }, [search]);

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

    return (
        <div>
            <div className="contain-home">
                <Header search={search} setSearch={setSearch} input />
                <h2 className="title-name">Usuários</h2>
                <div className="contain-cards">
                    {search.length === 0 ? (
                        usersPag.length > 1 ? (
                            usersPag.map((value, index) => (
                                <Cards value={value} index={index} />
                            ))
                        ) : (
                            <div className="contain-skeleton">
                                <p>Aguarde...</p>
                                <div className="contain-cards">
                                    {pagCount.map(value => (
                                        <Skeleton
                                            className="skeleton-item"
                                            variant="rect"
                                            width={250}
                                            height={300}
                                            key={value.id}
                                        />
                                    ))}
                                </div>
                            </div>
                        )
                    ) : (
                        fakeUsersData.length > 1 &&
                        fakeUsersData.map(
                            value =>
                                value.name.first.includes(search) ||
                                value.login.username.includes(search) ||
                                (value.email.includes(search) && (
                                    <Cards value={value} />
                                ))
                        )
                    )}
                </div>
                <Pagination
                    count={search.length === 0 ? numberPag : 1}
                    onChange={handleChange}
                    color="primary"
                />
            </div>
            <Footer colorWhite={false} />
        </div>
    );
};

export default Home;
