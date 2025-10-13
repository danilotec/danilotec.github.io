document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
    const navLinks = document.querySelectorAll('.mobile-nav a');
    const form = document.getElementById('form-contato');
    const formMessage = document.getElementById('form-message');

    // 1. Funcionalidade do Menu Mobile (Responsividade)
    menuToggle.addEventListener('click', function() {
        mobileNav.classList.toggle('active');
        // Alterna o ícone do botão
        menuToggle.textContent = mobileNav.classList.contains('active') ? '✖' : '☰';
    });

    // Fechar o menu ao clicar em um link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileNav.classList.remove('active');
            menuToggle.textContent = '☰';
        });
    });

    // 2. Funcionalidade Básica do Formulário
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            // Simulação de envio de formulário (apenas front-end)
            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const telefone = document.getElementById('telefone').value;

            if (nome && email && telefone) {
                // Simula o sucesso após 1 segundo
                formMessage.style.color = 'var(--cor-secundaria)';
                formMessage.textContent = 'Obrigado, ' + nome.split(' ')[0] + '! Seu projeto foi enviado com sucesso. Em breve entraremos em contato.';
                form.reset();
            } else {
                formMessage.style.color = '#ff6347'; // Vermelho para erro
                formMessage.textContent = 'Por favor, preencha todos os campos obrigatórios (Nome, E-mail e Telefone).';
            }

            // Limpa a mensagem após 5 segundos
            setTimeout(() => {
                formMessage.textContent = '';
            }, 5000);
        });
    }

    // 3. Efeito de Scroll Suave (Melhora a UX)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

});
