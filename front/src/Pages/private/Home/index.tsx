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

import Header from '../Components/Header';
import { fakeUsers } from "../../../Services/API";
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
    md5: string;
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
    },
});

const Home: React.FC = () => {
    const [fakeUsersData, setFakeUsersData] = useState<IFakerUser[]>(
        [] as IFakerUser[]
    );
    const [search, setSearch] = useState<string>('')

    useEffect(() => {
        fakeUsers().then(({ data }: any) => {
            setFakeUsersData(data.results);
        });
    }, []);

    const classes = useStyles();

    return (
        <div className="contain-home">
            <Header search={search} setSearch={setSearch} input />
            <h2 className="title-name">Usuários</h2>
            <div className="contain-cards">
                {fakeUsersData.length > 1 ? (
                    fakeUsersData.map(value => (
                        <div key={value.login.md5}>
                            {search.length === 0 ?
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

                                        <Typography
                                            color="textSecondary"
                                            component="p"
                                        >
                                            email: {value.email}
                                        </Typography>

                                        <Typography
                                            color="textSecondary"
                                            component="p"
                                        >
                                            idade: {value.dob.age}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            :
                            value.name.first.includes(search) || value.login.username.includes(search) || value.email.includes(search) &&
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

                                        <Typography
                                            color="textSecondary"
                                            component="p"
                                        >
                                            email: {value.email}
                                        </Typography>

                                        <Typography
                                            color="textSecondary"
                                            component="p"
                                        >
                                            idade: {value.dob.age}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            }
                        </div>
                    ))
                ) : (
                    <div className="contain-skeleton">
                        <p>Aguarde...</p>
                        <div className="contain-cards">
                            <Skeleton
                                className="skeleton-item"
                                variant="rect"
                                width={250}
                                height={300}
                            />
                            <Skeleton
                                className="skeleton-item"
                                variant="rect"
                                width={250}
                                height={300}
                            />
                            <Skeleton
                                className="skeleton-item"
                                variant="rect"
                                width={250}
                                height={300}
                            />
                            <Skeleton
                                className="skeleton-item"
                                variant="rect"
                                width={250}
                                height={300}
                            />
                            <Skeleton
                                className="skeleton-item"
                                variant="rect"
                                width={250}
                                height={300}
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;
