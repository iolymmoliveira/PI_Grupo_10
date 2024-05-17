document.addEventListener('DOMContentLoaded', function () {
    const signupForm = document.getElementById('signup-form');

    signupForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const companyName = signupForm.companyName.value;
        const cnpj = signupForm.cnpj.value;
        const email = signupForm.email.value;
        const password = signupForm.password.value;

        // Aqui você pode adicionar validações de formulário

        // Aqui você pode enviar os dados para o backend para processamento
        // Por enquanto, apenas exibindo os dados no console
        console.log('Razão Social:', companyName);
        console.log('CNPJ:', cnpj);
        console.log('Email:', email);
        console.log('Senha:', password);

        // Simulando redirecionamento após o cadastro
        window.location.href = 'login.html';
    });
});
