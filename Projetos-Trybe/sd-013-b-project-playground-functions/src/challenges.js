/* eslint-disable sonarjs/cognitive-complexity */
// Desafio 1
function compareTrue(param1, param2) {
  // seu código aqui
  let result;

  if (param1 === true && param2 === true) {
    result = true;
  } else {
    result = false;
  }

  return result;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let valor;

  valor = (base * height) / 2;

  return valor;
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let arrayDeStrings = [];
  let stringAuxiliar = '';

  for (let letters of string) {
    if (letters === ' ') {
      arrayDeStrings.push(stringAuxiliar);
      stringAuxiliar = '';
    } else {
      stringAuxiliar += letters;
    }
  }
  arrayDeStrings.push(stringAuxiliar);

  return arrayDeStrings;
}

// Desafio 4
function concatName(strings) {
  // seu código aqui
  let primeiroItem = strings[0];
  let ultimoItem = strings[strings.length - 1];
  // eslint-disable-next-line prefer-template
  let result = ultimoItem + ', ' + primeiroItem;

  return result;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let totalPoints = 0;

  totalPoints += (wins * 3) + (ties);

  return totalPoints;
}

// Desafio 6
function highestCount(array) {
  // seu código aqui
  let maiorNumero = -99999;
  let numeroDeRepeticoes = 0;

  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === maiorNumero) {
      numeroDeRepeticoes += 1;
    } else if (array[index] > maiorNumero) {
      maiorNumero = array[index];
      numeroDeRepeticoes = 1;
    }
  }

  return numeroDeRepeticoes;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui\
  let result;

  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    result = 'cat1';
  } else if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)) {
    result = 'cat2';
  } else {
    result = 'os gatos trombam e o rato foge';
  }
  return result;
}

// Desafio 8
function fizzBuzz(array) {
  // seu código aqui
  let results = [];

  for (let number of array) {
    if (number % 3 === 0) {
      if (number % 5 === 0) {
        results.push('fizzBuzz');
      } else {
        results.push('fizz');
      }
    } else if (number % 5 === 0) {
      results.push('buzz');
    } else {
      results.push('bug!');
    }
  }

  return results;
}

// Desafio 9
// eslint-disable-next-line complexity
function encode(string) {
  // seu código aqui
  let resultingString = '';
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === 'a') {
      resultingString += '1';
    } else if (string[index] === 'e') {
      resultingString += '2';
    } else if (string[index] === 'i') {
      resultingString += '3';
    } else if (string[index] === 'o') {
      resultingString += '4';
    } else if (string[index] === 'u') {
      resultingString += '5';
    } else {
      resultingString += string[index];
    }
  }
  return resultingString;
}
// eslint-disable-next-line complexity
function decode(string) {
  // seu código aqui
  let resultingString = '';
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === '1') {
      resultingString += 'a';
    } else if (string[index] === '2') {
      resultingString += 'e';
    } else if (string[index] === '3') {
      resultingString += 'i';
    } else if (string[index] === '4') {
      resultingString += 'o';
    } else if (string[index] === '5') {
      resultingString += 'u';
    } else {
      resultingString += string[index];
    }
  }
  return resultingString;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
