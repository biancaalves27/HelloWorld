import React from 'react';
import ReactDOM from 'react-dom';
import Saudacao from './componentes/Saudacao';
import Segundo from './componentes/Segundo';
import Terceiro from './componentes/Filho';
import Primeiro from './componentes/Primeiro';
import HelloWorld from './componentes/HelloWorld';
import Botao from './componentes/Botao';

ReactDOM.render (
    <div>
        <Segundo nome="Hello" sobrenome="World!">
            <Terceiro nome="6) Hello"/>
            <Terceiro nome="Hello" sobrenome="world!3" />
        </Segundo>
        <Primeiro/>
        <Saudacao tipo="Hello" elemento="world 4" />
        <HelloWorld elemento=" world 8"/>
        <Botao/>
    </div>,
    document.getElementById('root')
);



