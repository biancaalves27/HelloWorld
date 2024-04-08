import React from "react";

const Terceiro = (props) => {
    const horaExibicao = new Date().toLocaleString();
    return (
        <div>
            <h1>{props.nome} {props.sobrenome}</h1>
            <p> {horaExibicao}</p>
            <h2>Hello World!3</h2>
        </div>
    );
};

export default Terceiro;