// Interações de páginas específicas.
// Cada bloco só roda se a página tiver os elementos dele.

// ---------------------------------------------------------
// PASTORAIS: filtro por categoria
// ---------------------------------------------------------
const filtros = document.querySelectorAll('.filtro');
const cartoesPastorais = document.querySelectorAll('[data-categoria]');

filtros.forEach(function (botao) {
    botao.addEventListener('click', function () {
        const escolhido = botao.dataset.filtro;

        // Marca só o botão clicado como ativo
        filtros.forEach(function (outro) {
            outro.setAttribute('aria-pressed', outro === botao);
        });

        // Mostra só os cartões da categoria escolhida
        cartoesPastorais.forEach(function (cartao) {
            const mostrar = escolhido === 'todas' || cartao.dataset.categoria === escolhido;
            cartao.hidden = !mostrar;
        });
    });
});

// ---------------------------------------------------------
// DÍZIMO: botão "Copiar chave PIX"
// ---------------------------------------------------------
const botaoCopiarPix = document.querySelector('#copiar-pix');

if (botaoCopiarPix) {
    botaoCopiarPix.addEventListener('click', function () {
        const chave = document.querySelector('#chave-pix').textContent.trim();

        navigator.clipboard.writeText(chave).then(function () {
            botaoCopiarPix.textContent = 'Chave copiada!';
            setTimeout(function () {
                botaoCopiarPix.textContent = 'Copiar chave PIX';
            }, 2500);
        });
    });
}
