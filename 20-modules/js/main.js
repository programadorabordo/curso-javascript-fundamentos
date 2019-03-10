import * as Components from './components/'

import { agrupaPorMaiorEMenor, eDeMaior as eMaioridade } from './modules/utils';

import pessoasMock from './mock/pessoas';

// console.log('eDeMaior', eMaioridade(10));
// console.log('eDeMaior', eMaioridade(20));

const { maiores, menores } = agrupaPorMaiorEMenor(pessoasMock);

const html = `
  ${Components.HelloWorld('Programador a Bordo')}
  <h3>Maiores</h3>
  ${Components.List(maiores)}
  <h3>Menores</h3>
  ${Components.List(menores)}
`

document.querySelector('#app').innerHTML = html;


