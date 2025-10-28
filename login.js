const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const form = document.getElementById('loginForm');
const email = document.getElementById('email');
const password = document.getElementById('password');
const emailHelp = document.getElementById('emailHelp');
const pwHelp = document.getElementById('pwHelp');
const msg = document.getElementById('formMessage');

function validateEmail(value) {
  const re = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  return re.test(value);
}

form.addEventListener('submit', e => {
  e.preventDefault();
  emailHelp.style.display = 'none';
  pwHelp.style.display = 'none';
  msg.style.display = 'none';

  const eVal = email.value.trim();
  const pVal = password.value.trim();
  let valid = true;

  if (!validateEmail(eVal)) {
    emailHelp.textContent = 'Introduce un correo válido.';
    emailHelp.style.display = 'block';
    valid = false;
  }

  if (pVal.length < 6) {
    pwHelp.textContent = 'La contraseña debe tener al menos 6 caracteres.';
    pwHelp.style.display = 'block';
    valid = false;
  }

  if (!valid) return;

  msg.textContent = 'Verificando credenciales...';
  msg.style.display = 'block';

  setTimeout(() => {
    if (eVal.includes('cea.edu.co')) {
      msg.textContent = 'Inicio de sesión correcto. Redirigiendo...';
      msg.className = 'success';
      // window.location.href = 'inicio.html';
    } else {
      msg.textContent = 'Correo o contraseña incorrectos.';
      msg.className = 'error';
    }
  }, 900);
});

[email, password].forEach(inp =>
  inp.addEventListener('input', () => {
    emailHelp.style.display = 'none';
    pwHelp.style.display = 'none';
    msg.style.display = 'none';
  })
);
