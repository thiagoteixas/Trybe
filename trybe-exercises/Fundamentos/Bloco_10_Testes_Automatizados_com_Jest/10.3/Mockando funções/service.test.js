const service = require('./service');

// test("#randomRgbColor", () => {
//   // testando se a função foi chamada
//   service.randomRgbColor();
//   expect(service.randomRgbColor).toHaveBeenCalled();
// }); Não irá passar

test("#randomRgbColor", () => {
    // testando se a função foi chamada. Não simulamos nenhum comportamento aqui, pois, para esse teste, isso não importa! Queremos saber se ela foi chamada e ponto final.
    service.randomRgbColor = jest.fn();
  
    service.randomRgbColor();
    expect(service.randomRgbColor).toHaveBeenCalled();
  });

test("#randomRgbColor2", () => {
    // testando se a função foi chamada e qual seu retorno
    service.randomRgbColor = jest.fn().mockReturnValue("rgb(255, 255, 255)");
  
    service.randomRgbColor();
    expect(service.randomRgbColor).toHaveBeenCalled();
    expect(service.randomRgbColor()).toBe("rgb(255, 255, 255)");
  });

  // Na linha 21 temos que chamar a função. Isso acontece porque mockar uma função redefine seu comportamento, mas não a executa. A propriedade toHaveBeenCalled() espera que a função dentro do expect tenha sido executada por alguma chamada anterior a essa linha dentro do contexto desse teste.

  test("#randomRgbColor3", () => {
    // testando quantas vezes a função foi chamada e qual seu retorno
    service.randomRgbColor = jest
      .fn()
      .mockReturnValue('default value')
      .mockReturnValueOnce('first call')
      .mockReturnValueOnce('second call');
  
    expect(service.randomRgbColor).toHaveBeenCalledTimes(0);
  
    expect(service.randomRgbColor()).toBe("first call");
    expect(service.randomRgbColor).toHaveBeenCalledTimes(1);
  
    expect(service.randomRgbColor()).toBe("second call");
    expect(service.randomRgbColor).toHaveBeenCalledTimes(2);
  
    expect(service.randomRgbColor()).toBe("default value");
    expect(service.randomRgbColor).toHaveBeenCalledTimes(3);
  });