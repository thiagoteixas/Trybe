import React from '..node_modules/react';

function helloWorld (nome, sobrenome) {
    return <h1>Hello, {`${nome} ${sobrenome}`}</h1>;
  }
  
  
  const container = <div>{helloWorld("Jorge", "Maravilha")}</div>;