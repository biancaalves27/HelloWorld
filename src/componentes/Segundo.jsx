import React, { Component } from "react";

export default class Segundo extends Component {
    state = {
        horaExibicao: new Date().toLocaleString()
    };

    render() {
        const { nome, sobrenome } = this.props;
        const { horaExibicao } = this.state;
        return (
            <div>
                <h1>{nome} {sobrenome}</h1>
                <p> {horaExibicao}</p>
                <h2>Hello World!2</h2>
            </div>
        );
    }
}