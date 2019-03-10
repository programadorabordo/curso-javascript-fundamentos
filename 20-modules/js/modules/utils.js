export const eDeMaior = idade => idade >= 18;

export const agrupaPorMaiorEMenor = pessoas => (
  pessoas.reduce(function(valorAcumulador, valorArray) {
    const propMaiorOuMenor = valorArray.idade >= 18 ? 'maiores' : 'menores';

    valorAcumulador[propMaiorOuMenor].push(valorArray);

    return valorAcumulador;
   }, { maiores: [], menores: []})
)