document.getElementById('show-login-form').addEventListener('click', function (e) {
  e.preventDefault();
  window.location.href = '../login/login.html';
});

document.getElementById('pessoa-fisica-form').addEventListener('submit', function (e) {
  e.preventDefault();

  // Adicionar lógica para enviar os dados do formulário para o servidor

  window.location.href = './dashboard/dashboard.html';
});

document.getElementById('tipo-cadastro').addEventListener('change', function () {
  const tipoCadastro = this.value;
  document.getElementById('pessoa-fisica-options').classList.add('hidden');
  document.getElementById('pessoa-fisica-form').classList.add('hidden');
  document.getElementById('pessoa-juridica-form').classList.add('hidden');

  if (tipoCadastro === 'pessoa_fisica') {
      document.getElementById('pessoa-fisica-options').classList.remove('hidden');
  } else if (tipoCadastro === 'pessoa_juridica') {
      document.getElementById('pessoa-juridica-form').classList.remove('hidden');
  }
});

document.getElementById('tipo-pessoa-fisica').addEventListener('change', function () {
  const tipoPessoaFisica = this.value;
  document.getElementById('pessoa-fisica-form').classList.remove('hidden');
  document.getElementById('professor-fields').classList.add('hidden');

  if (tipoPessoaFisica === 'professor') {
      document.getElementById('professor-fields').classList.remove('hidden');
  }
});

//Submit Register form

// Adicionando eventos de envio para ambos os formulários
const pessoaFisicaForm = document.getElementById('pessoa-fisica-form');
const pessoaJuridicaForm = document.getElementById('pessoa-juridica-form');

pessoaFisicaForm.addEventListener('submit', function (e) {
  e.preventDefault();

    //Add or call another validations here

    //Send form and redirect

  window.location.href = '../logged/logged.html';
});

pessoaJuridicaForm.addEventListener('submit', function (e) {
  e.preventDefault();

    //Add or call another validations here

    //Send form and redirect
  window.location.href = '../logged/logged.html';
});