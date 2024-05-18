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


document.addEventListener("DOMContentLoaded", function() {
    var phoneInput = document.getElementById("phone");
    var phone2Input = document.getElementById("phone2");

    phoneInput.addEventListener("input", function() {
        phoneInput.value = formatPhoneNumber(phoneInput.value);
    });

    phone2Input.addEventListener("input", function() {
        phone2Input.value = formatPhoneNumber(phone2Input.value);
    });

    function formatPhoneNumber(phoneNumber) {
        phoneNumber = phoneNumber.replace(/\D/g, ""); // Remove caracteres não numéricos
        phoneNumber = phoneNumber.replace(/^(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3"); // Formato: (XX) XXXXX-XXXX
        return phoneNumber;
    }
});

document.getElementById("signup-form").addEventListener("submit", function(event) {

    event.preventDefault();

    window.location.href = "/sucesso.html";
});