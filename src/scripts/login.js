const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');

togglePassword.addEventListener('click', function (e) {
    // Alternar el atributo type
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    
    // Alternar el icono (ojo abierto / cerrado)
    if (this.classList.contains('ph-eye-slash')) {
        this.classList.remove('ph-eye-slash');
        this.classList.add('ph-eye');
    } else {
        this.classList.remove('ph-eye');
        this.classList.add('ph-eye-slash');
    }
});