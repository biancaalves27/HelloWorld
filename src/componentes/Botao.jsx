import React from "react";


const Botao = () => {
    const exibirAlerta = () => {
        const horaExibicao = new Date().toLocaleString();
        alert(`Hello World!  ${horaExibicao}`);
    };

    return (
        <div>
            <button onClick={exibirAlerta}>Hello World</button>
        </div>
    );
};

export default Botao;
