/*
  TODO:
  - Remover var, utilizar let ou const
  - Refatorar para não ter função anônima
  - Refatorar callback
*/

import UserPage from './pages/User';

var app = document.querySelector('#app');

UserPage(function(html) {
  app.innerHTML = html;
})