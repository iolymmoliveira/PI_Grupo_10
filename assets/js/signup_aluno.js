document.addEventListener('DOMContentLoaded', function () {
    const signupForm = document.getElementById('signup-form');

    signupForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const fullName = signupForm.fullName.value;
        const studentID = signupForm.studentID.value;
        const email = signupForm.email.value;
        const password = signupForm.password.value;

        // Aqui você pode adicionar validações de formulário

        // Aqui você pode enviar os dados para o backend para processamento
        // Por enquanto, apenas exibindo os dados no console
        console.log('Nome Completo:', fullName);
        console.log('Matrícula:', studentID);
        console.log('Email:', email);
        console.log('Senha:', password);

        // Simulando redirecionamento após o cadastro
        window.location.href = 'login.html';
    });
});
