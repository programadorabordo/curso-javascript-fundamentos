import UserList from '../components/UserList';
import * as usersService from '../services/users';

/*
  TODO:
  - Refatorar para não ter função anônima e arrow functions
  na Promise retornada
  - Utilizar template strings
  - Refatorar callbacks e passar para promises
  - Não utilizar função anônima
  - Utilizar retorno imediato
*/

export default function UserPage(fnCallback) {
  usersService.getAllUsers(function(data) {
    var userListHTML = UserList(data);
    var userPageHTML = '<div id="page-userlist" class="container">' +
      '<h1 class="mt-4">Admin de usuários</h1>' +
      '<hr>' +
      userListHTML +
    '</div>'
    return fnCallback(userPageHTML);
  })
};