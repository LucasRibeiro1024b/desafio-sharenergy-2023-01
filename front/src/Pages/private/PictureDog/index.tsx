import React, { useEffect, useState } from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import { Fab } from "@material-ui/core";
import { Refresh } from "@material-ui/icons";

import Header from "../Components/Header";
import Footer from "../../components/Footer";
import { dogs } from "../../../Services/API";
import "./index.css";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        margin: {
            margin: theme.spacing(3),
        },
        extendedIcon: {
            marginRight: theme.spacing(1),
        },
    })
);

let isRequested = false;

const PictureDog: React.FC = () => {
    // a variável guarda o link de todas as fotos q podem ser exibidas
    const [allDogs, setAllDogs] = useState<string[]>([]);
    /*
        a variável guarda o número de fotos e randomicamente e escolhido para
        mostrar outra foto quando o botão é apertado.
     */
    const [indexPicture, setIndexPiture] = useState<number>(0);

    const getIndexPicture: Function = () => {
        // gera um index aleatório
        setIndexPiture(Math.round(Math.random() * allDogs.length));
    };

    useEffect(() => {
        if (!isRequested) {
            isRequested = true;
            dogs().then(({ data }: any) => {
                setAllDogs(data);
                getIndexPicture();
            });
            isRequested = false;
        }
    }, []);

    const classes = useStyles();

    return (
        <div>
            <div className="contain-picture">
                <Header input={false} />
                <h2 className="title-name">Doguinhos</h2>
                <div className="contain-select">
                    <span className="title-img">
                        Clique para mostrar outro doguinho
                    </span>
                    <Fab
                        variant="extended"
                        color="primary"
                        aria-label="add"
                        className={classes.margin}
                        onClick={() => getIndexPicture()}
                    >
                        <Refresh className={classes.extendedIcon} />
                        Exibir outra imagem
                    </Fab>
                </div>
                {allDogs.length > 1 && (
                    <img
                        src={`https://random.dog/${allDogs[indexPicture]}`}
                        alt="cachorrinho"
                        loading="eager"
                        onError={() => getIndexPicture()}
                        className="picture-dog"
                    />
                )}
            </div>
            <Footer colorWhite={false} />
        </div>
    );
};

export default PictureDog;
