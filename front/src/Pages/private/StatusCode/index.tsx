import React, { useState } from "react";
import {
    FormControl,
    InputLabel,
    NativeSelect,
    FormHelperText,
} from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import Header from "../Components/Header";
import { statusCode } from "../../../Utils";
import "./index.css";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },
    })
);

const StatusCode: React.FC = () => {
    const [status, setStatus] = useState<string>("");
    const [statusAux, setStatusAux] = useState<string>("");
    const [valided, setValided] = useState<boolean>(false);

    const handleChange = (
        event: React.ChangeEvent<{ name: string; value: string }>
    ) => {
        const [statusSelected, validedSelected] = event.target.value.split("-");
        setStatus(event.target.value);
        setStatusAux(statusSelected);
        setValided(validedSelected === "true");
    };

    const classes = useStyles();

    return (
        <div className="contain-status">
            <Header input={false} />
            <h2 className="title-name">Status</h2>
            <div className="contain-select">
                <span className="text-select">
                    Selecione um código de status
                </span>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="select-status">Status</InputLabel>
                    <NativeSelect
                        value={status}
                        onChange={handleChange}
                        inputProps={{
                            name: "Status",
                            id: "select-status",
                        }}
                    >
                        <option aria-label="None" value="" />
                        {statusCode.map((value, index) => (
                            <option
                                key={index}
                                value={`${value.status}-${String(value.valid)}`}
                            >
                                {value.status}
                            </option>
                        ))}
                    </NativeSelect>
                    <FormHelperText>
                        Selecione um código de status
                    </FormHelperText>
                </FormControl>
            </div>
            {statusAux === "" ||
                (!valided && (
                    <span className="title-img">Imagem não encontrada...</span>
                ))}
            <img
                src={
                    statusAux !== "" && valided
                        ? `https://http.cat/${statusAux}`
                        : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGkLz64cmdQUXREhNMIBou2g0nrhblWc0h8g&usqp=CAU"
                }
                className={`img-cat ${
                    statusAux !== "" && valided ? "" : "img-not-found"
                }`}
                alt="gatinho"
                loading="eager"
            />
        </div>
    );
};

export default StatusCode;
