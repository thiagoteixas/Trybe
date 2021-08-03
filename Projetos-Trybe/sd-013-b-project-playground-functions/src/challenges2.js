/* eslint-disable complexity */
// Desafio 10
function techList(array, name) {
  let resultingArray = [];
  let auxiliaryObject = {};

  array = array.sort();
  for (let index = 0; index < array.length; index += 1) {
    auxiliaryObject.tech = array[index];
    auxiliaryObject.name = name;
    resultingArray.push(auxiliaryObject);
    auxiliaryObject = {};
  }

  if (resultingArray.length === 0) {
    resultingArray = 'Vazio!';
  }
  return resultingArray;
}

// Desafio 11
// eslint-disable-next-line max-lines-per-function
function generatePhoneNumber(array) {
  let result = '(**) *****-****';
  let countNumbers = Array(10).fill(0);

  if (array.length === 11) {
    for (let index = 0; index < 11; index += 1) {
      if (array[index] > 9 || array[index] < 0) {
        result = 'não é possível gerar um número de telefone com esses valores';
        index = 11;
      } else {
        countNumbers[array[index]] += 1;
        if (countNumbers[array[index]] > 2) {
          result = 'não é possível gerar um número de telefone com esses valores';
          index = 11;
        } else {
          result = result.replace('*', array[index].toString());
        }
      }
    }
  } else {
    result = 'Array com tamanho incorreto.';
  }
  return result;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  let possivel;

  if (lineA < lineB + lineC && lineB < lineC + lineA && lineC < lineB + lineA) {
    if (lineA > Math.abs(lineB - lineC) && lineB > Math.abs(lineA - lineC)
    && lineC > Math.abs(lineA - lineB)) {
      possivel = true;
    } else {
      possivel = false;
    }
  } else {
    possivel = false;
  }
  return possivel;
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
