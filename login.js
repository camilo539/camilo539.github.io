document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;

    const users = JSON.parse(localStorage.getItem('users')) || {};

    if (users[username]) {
        showMessage('El usuario ya existe. Intenta con otro.');
    } else {
        users[username] = password;
        
        localStorage.setItem('users', JSON.stringify(users));

        showMessage('Registro exitoso. Puedes iniciar sesión ahora.');
    }
});

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    const users = JSON.parse(localStorage.getItem('users')) || {};

    if (users[username] && users[username] === password) {
        showMessage('Inicio de sesión exitoso. Bienvenido!');
    } else {
        showMessage('Credenciales incorrectas. Intenta de nuevo.');
    }
});

function showMessage(message) {
    document.getElementById('message').textContent = message;
}
