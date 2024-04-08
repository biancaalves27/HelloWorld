import React from "react";

const ComponenteComDataHora = (props) => {
    const horaAtual = new Date().toLocaleString();

    return (
        <div>
            <h1>{props.nome} {props.sobrenome}</h1>
            <h2>Hello World!2</h2>
            <ul>
                {React.Children.map(props.children, (child) =>
                    React.cloneElement(child, { ...props, ...child.props })
                )}
            </ul>
            <p> {horaAtual}</p>
        </div>
    );
};

export default ComponenteComDataHora;