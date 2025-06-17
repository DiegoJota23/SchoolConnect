// Selección de elementos
const tabLogin = document.getElementById('tab-login');
const tabSignup = document.getElementById('tab-signup');
const formLogin = document.getElementById('form-login');
const formSignup = document.getElementById('form-signup');
const message = document.getElementById('message');

// Función para alternar pestañas
function showTab(tab) {
  if (tab === 'login') {
    tabLogin.classList.add('active');
    tabSignup.classList.remove('active');
    formLogin.classList.add('active');
    formSignup.classList.remove('active');
  } else {
    tabSignup.classList.add('active');
    tabLogin.classList.remove('active');
    formSignup.classList.add('active');
    formLogin.classList.remove('active');
  }
  message.textContent = '';
}

tabLogin.addEventListener('click', () => showTab('login'));
tabSignup.addEventListener('click', () => showTab('signup'));

// Toggle mostrar/ocultar contraseña
document.querySelectorAll('.toggle-password').forEach(toggle => {
  toggle.addEventListener('click', () => {
    const input = toggle.previousElementSibling;
    input.type = input.type === 'password' ? 'text' : 'password';
  });
});

// Manejo de envío de formulario Login
formLogin.addEventListener('submit', e => {
  e.preventDefault();
  const email = document.getElementById('login-email').value.trim();
  const pass = document.getElementById('login-password').value.trim();
  if (!email || !pass) {
    message.style.color = 'var(--error)';
    message.textContent = 'Por favor completa todos los campos.';
  } else {
    message.style.color = 'var(--primary)';
    message.textContent = 'Se ha iniciado sesión exitosamente.';
    formLogin.reset();
  }
});

// Manejo de envío de formulario Signup
formSignup.addEventListener('submit', e => {
  e.preventDefault();
  const email = document.getElementById('signup-email').value.trim();
  const pass = document.getElementById('signup-password').value.trim();
  const pass2 = document.getElementById('signup-password-confirm').value.trim();
  if (!email || !pass || !pass2) {
    message.style.color = 'var(--error)';
    message.textContent = 'Por favor completa todos los campos.';
  } else if (pass !== pass2) {
    message.style.color = 'var(--error)';
    message.textContent = 'Las contraseñas no coinciden.';
  } else {
    message.style.color = 'var(--primary)';
    message.textContent = 'Se ha creado tu cuenta exitosamente.';
    formSignup.reset();
  }
});