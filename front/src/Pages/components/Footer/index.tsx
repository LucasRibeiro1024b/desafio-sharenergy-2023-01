import React from "react";

import "./index.css";

interface IProps {
    colorWhite: boolean;
}

const Footer: React.FC<IProps> = ({ colorWhite }) => (
    <div className={`contain-footer ${colorWhite ? "bg-white" : "bg-black"}`}>
        <span className={`text-footer ${!colorWhite && "text-white"}`}>
            Espero que gostem ☺
        </span>
    </div>
);

export default Footer;
