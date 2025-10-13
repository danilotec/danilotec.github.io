document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Para animar apenas uma vez
            }
        });
    }, {
        threshold: 0.1 // Começa a animar quando 10% do elemento estiver visível
    });

    // Observa todas as seções com a classe 'animate'
    document.querySelectorAll('.animate').forEach(element => {
        observer.observe(element);
    });
});
