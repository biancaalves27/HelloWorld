import React, { Component } from "react";

export default class Saudacao extends Component {
    state = {
        tipo: "Hello",
        elemento: "World 4",
        horaExibicao: new Date().toLocaleString()
    };

    setTipo = (e) => {
        this.setState({ tipo: e.target.value });
    };

    setElemento = (e) => {
        this.setState({ elemento: e.target.value });
    };

    render() {
        const { tipo, elemento, horaExibicao } = this.state;
        return (
            <div>
                <h1>{tipo} {elemento}!</h1>
                <p> {horaExibicao}</p>
                <hr />
                <input
                    type="text"
                    placeholder="tipo..."
                    value={tipo}
                    onChange={this.setTipo}
                />
                <input
                    type="text"
                    placeholder="elemento..."
                    value={elemento}
                    onChange={this.setElemento}
                />
            </div>
        );
    }
}