const form = document.getElementById('form-agenda');
let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputNomeAgenda = document.getElementById('nome-agenda');
    const inputTelefoneAgenda = document.getElementById('telefone-agenda');

    let linha = '<tr>';
    linha += `<td>${inputNomeAgenda.value}</td>`;
    linha += `<td>${inputTelefoneAgenda}</td>`;
    linha += `</tr>`;

    linhas += linha;

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

    inputNomeAgenda.value = '';
    inputTelefoneAgenda.value = '';
})