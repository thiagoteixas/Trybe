// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Banana', 'Manga', 'Uva'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Granulado', 'Mel', 'Marshmallow'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  return [...fruit, ...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));