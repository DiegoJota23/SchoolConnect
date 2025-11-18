// login.js

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('loginForm');
  if (!form) return;

  const emailEl = document.getElementById('email');
  const passwordEl = document.getElementById('password');
  const errorEl = document.getElementById('error-message');

  function showError(message) {
    if (!errorEl) {
      alert(message);
      return;
    }
    errorEl.textContent = message;
    errorEl.style.display = 'block';
  }

  function clearError() {
    if (!errorEl) return;
    errorEl.textContent = '';
    errorEl.style.display = 'none';
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    clearError();

    const email = emailEl ? emailEl.value.trim() : '';
    const password = passwordEl ? passwordEl.value.trim() : '';

    // Validaciones básicas
    if (!email || !password) {
      showError('Por favor, completa todos los campos.');
      return;
    }

    // Validar correo institucional
    const lowerEmail = email.toLowerCase();
    if (!lowerEmail.endsWith('@schoolconnect.edu')) {
      showError('El correo debe ser institucional (@schoolconnect.edu).');
      return;
    }

    // Validación opcional de longitud de contraseña
    if (password.length < 6) {
      showError('La contraseña debe tener al menos 6 caracteres.');
      return;
    }

    // Obtener rol seleccionado (estudiante/docente) si hace falta
    const roleRadios = document.getElementsByName('role');
    let selectedRole = null;
    for (let i = 0; i < roleRadios.length; i++) {
      if (roleRadios[i].checked) {
        selectedRole = roleRadios[i].value;
        break;
      }
    }

    // Aquí normalmente harías una petición al backend (fetch / XHR).
    // Simulamos llamada y resultado positivo:
    // Ejemplo (descomenta y ajusta la URL y payload para usarlo con tu API):
    /*
    fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, role: selectedRole })
    })
    .then(res => res.json())
    .then(data => {
      if (data.success) {
        window.location.href = 'dashboard.html';
      } else {
        showError(data.message || 'Credenciales incorrectas.');
      }
    })
    .catch(err => showError('Error de conexión. Intenta nuevamente.'));
    return;
    */

    // Demo: mostrar éxito y redirigir después de 600ms
    alert('Inicio de sesión exitoso ✅');
    // Descomenta la línea siguiente para redirigir a tu dashboard:
    // window.location.href = 'dashboard.html';
  });
});

