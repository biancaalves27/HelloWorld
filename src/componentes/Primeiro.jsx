import React from "react";

const Primeiro = () => {
    const horaExibicao = new Date().toLocaleString();
    return (
        <div>
            <h1>Hello World!1</h1>
            <p>
                 {horaExibicao}</p>
        </div>
    );
};

export default Primeiro;