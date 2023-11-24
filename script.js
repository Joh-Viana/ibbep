document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.nav_link');

    const botaoVoltar = document.createElement('a');
    botaoVoltar.setAttribute('href', '#inicio');
    botaoVoltar.setAttribute('id', 'botao_voltar');
    botaoVoltar.textContent = 'Topo';

    document.body.appendChild(botaoVoltar);

    links.forEach(link => {
        link.addEventListener('click', scrollSmooth);
    });

    botaoVoltar.addEventListener('click', scrollSmooth);
});

function scrollSmooth(e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    }
}



