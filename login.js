const form = document.querySelector('form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (!email || !password) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    if (!validateEmail(email)) {
        alert('Por favor, insira um e-mail válido.');
        return;
    }

    console.log('E-mail:', email);
    console.log('Senha:', password);

    alert(`Login realizado com sucesso, bem-vindo(a), ${email}!`);

    try {
        window.location.href = "./index.html";
    } catch (error) {
        console.error("Erro ao redirecionar:", error);
    }
});

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
