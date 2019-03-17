/*
  TODO:
  1 - Passar para template strings na listagem de usuários √
  2 - Substituir "for" por "map" √
  3 - Utilizar destructuring na extração das propriedades de cada usuário com let √
  4 - Utilizar valor de fallback caso não tenha valor de telefone no usuário √para exibir o texto 'Não cadastrado'
  5 - Trocar if (status) por operador ternário √
  6 - Utilizar função auxiliar para tratar o status √
  7 - Utilizar arrow function na function do map √
  8 - Utilizar destructuring de user para parâmetro da function do map √
  9 - Utilizar retorno imediato ao invés da palavra reservada return no map √
  10 - Quebrar renderUserList em mais functions, separado por blocos √
  11 - Transformar renderUserList em arrow function com retorno imediato √
*/

const getStatusLabel = status => (
  status ? 'Ativado' : 'Desativado'
);

const renderLine = ({ name, email, telefone = 'Não cadastrado', status }, userIndex) => (
    `<tr>
      <th scope="row">${(userIndex + 1)}</th>
      <td>${name}</td>
      <td>${email}</td>
      <td>${telefone}</td>
      <td>${getStatusLabel(status)}</td>
      <td><button type="button" data-userId="${(userIndex + 1)}" class="btn btn-edit btn-link text-primary">Editar</button></td>
      <td><button type="button" class="btn btn-link text-danger">Excluir</button></td>
    </tr>
`)

const renderLines = userData => (
  userData.map(renderLine).join('')
)

export default userData => (
  `
    <table class="table table-striped mt-4">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nome</th>
          <th scope="col">E-mail</th>
          <th scope="col">Telefone</th>
          <th scope="col">Status</th>
          <th scope="col">&nbsp;</th>
          <th scope="col">&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        ${renderLines(userData)}
      </tbody>
    </table>
  `
);
