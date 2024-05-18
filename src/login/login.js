const emailInput = document.getElementById('email');
const emailError = document.getElementById('email-error');

emailInput.addEventListener('input', () => {
  if (emailInput.validity.patternMismatch) {
    emailError.textContent = 'Formato de email inválido.';
    emailError.classList.remove('hidden');
    emailInput.classList.add('error');
  } else {
    emailError.textContent = '';
    emailError.classList.add('hidden');
    emailInput.classList.remove('error');
  }
});

//Verify password
const passwordInput = document.getElementById('senha');
const passwordRules = document.getElementById('password-rules');

const rules = {
  length: { regex: /^.{8,}$/, message: '✔ Pelo menos 8 caracteres' },
  number: { regex: /[0-9]/, message: '✔ Pelo menos 1 número' },
  special: { regex: /[!"#$%&'()*+,-./:;<=>?@[\]^_{|}~]/, message: '✔ Pelo menos 1 caracter especial' },
  uppercase: { regex: /[A-Z]/, message: '✔ Letras maiúsculas e minúsculas' },
};

passwordInput.addEventListener('input', () => {
  let valid = true;

  for (const ruleId in rules) {
    const rule = rules[ruleId];
    const ruleElement = document.getElementById(`rule-${ruleId}`);

    if (!rule.regex.test(passwordInput.value)) {
      valid = false;
      ruleElement.classList.remove('valid');
      ruleElement.textContent = rule.message;
    } else {
      ruleElement.classList.add('valid');
      ruleElement.textContent = rule.message;
    }
  }

  if (valid) {
    passwordRules.classList.remove('error');
  } else {
    passwordRules.classList.add('error');
  }

  passwordRules.classList.remove('hidden');
});

//Submit form
const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('senha');

  if (emailInput.validity.patternMismatch || emailInput.classList.contains('error')) {
    return;
  }

  if (!validatePassword(passwordInput.value)) {
    return;
  }

  //If all it's okay: Send form and redirect
  window.location.href = '../logged/logged.html';
});

function validatePassword(password) {
  for (const ruleId in rules) {
    if (!rules[ruleId].regex.test(password)) {
      return false;
    }
  }
  return true;
}

//Toggle visibility of password
const togglePasswordButton = document.getElementById('toggle-password');

togglePasswordButton.addEventListener('click', () => {
  const passwordInput = document.getElementById('senha');
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    togglePasswordButton.textContent = '🙈';
  } else {
    passwordInput.type = 'password';
    togglePasswordButton.textContent = '️👁️';
  }
});

//Redirect to register.html
const signupLink = document.querySelector('.signup-text a');

signupLink.addEventListener('click', (event) => {
  event.preventDefault();
  window.location.href = '../register/register.html';
});
