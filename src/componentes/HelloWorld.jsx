import React from "react";

const HelloWorld = (props) => {
    const horaAtual = new Date().toLocaleString();

    return (
        <div>
            <h1 key="h1">Hello{props.elemento}</h1>
            <h2 key="h2">Hello World! 7</h2>
            <p>Data e Hora: {horaAtual}</p>
        </div>
    );
};

export default HelloWorld;