import React from 'react';

// const element = <h1>Hello, world!</h1>; // JSX
// const element2 = React.createElement("h1", null, "Hello, world"); //Sem JSX

// const nome = 'Jorge Maravilha';
//const element = <h1>Hello, {nome}</h1>;

function nomeCompleto (nome, sobrenome) {
    return `${nome} ${sobrenome}`;
}

const element = <h1>Hello, {nomeCompleto('Jorge', 'Maravilha')}</h1>;