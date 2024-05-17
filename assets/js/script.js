document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const email = loginForm.email.value;
        const password = loginForm.password.value;

        // Por enquanto, apenas exibindo os dados no console
        console.log('Email:', email);
        console.log('Senha:', password);

        // Simulando redirecionamento após o login
        window.location.href = 'dashboard.html';
    });
});
