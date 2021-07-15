/*
Faça o mock da funcão subtrair e teste sua chamada.
Faça o mock da função multiplicar e implemente como retorno padrão o valor '10'. Teste a chamada e o retorno.
Faça o mock da função somar e implemente uma função que recebe dois valores e retorna sua soma. Teste a chamada, o retorno e os parâmetros passados.
Faça o mock da função dividir e implemente um retorno padrão com o valor '15'. Implemente também os seguintes valores para a primeira e segunda chamadas: '2' e '5'. Teste a chamada, o retorno, os parâmetros e quantas vezes a função foi chamada.
Faça o mock da função subtrair de maneira que seja possível restaurar sua implementação original. Defina como retorno padrão o valor '20'. Teste o número de chamadas e o retorno. Restaure a implementação original da função e teste sua execução.
*/
const math = require('./math');
jest.mock('./math');

test('Testando a função subtrair', () => {
    math.subtrair.mockImplementation((a, b) => a - b);
    math.subtrair(3, 2);

    expect(math.subtrair).toHaveBeenCalled();
    expect(math.subtrair).toHaveBeenCalledTimes(1);
});

test('Testando a função multiplicar', () => {
    math.multiplicar = jest.fn().mockReturnValue('10');

    math.multiplicar();
    expect(math.multiplicar).toHaveBeenCalled();
    expect(math.multiplicar()).toBe('10');
});

test('Testando a função somar', () => {
    math.somar.mockImplementation((a, b) => a + b);
    math.somar(2, 2);

    expect(math.somar).toHaveBeenCalled();
    expect(math.somar).toHaveBeenCalledWith(2, 2);
    expect(math.somar(2, 2)).toBe(4);
});

test('Testando a função dividir', () => {
    math.dividir.mockReturnValue('10');
    math.dividir
    

})