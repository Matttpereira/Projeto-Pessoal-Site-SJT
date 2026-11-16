// Interações de páginas específicas.
// Cada bloco só roda se a página tiver os elementos dele.

// ---------------------------------------------------------
// PASTORAIS: filtro por categoria
// ---------------------------------------------------------
const filtros = document.querySelectorAll('.filtro');
const cartoesPastorais = document.querySelectorAll('[data-categoria]');
const statusFiltro = document.querySelector('#status-filtro');

function aplicarFiltro(botao) {
    const escolhido = botao.dataset.filtro;
    let visiveis = 0;

    // Marca só o botão clicado como ativo
    filtros.forEach(function (outro) {
        outro.setAttribute('aria-pressed', outro === botao);
    });

    // Mostra só os cartões da categoria escolhida
    cartoesPastorais.forEach(function (cartao) {
        const mostrar = escolhido === 'todas' || cartao.dataset.categoria === escolhido;
        cartao.hidden = !mostrar;
        if (mostrar) visiveis++;
    });

    // Avisa quantas aparecem (e quando a categoria está vazia)
    if (statusFiltro) {
        if (visiveis === 0) {
            statusFiltro.textContent = 'Nenhuma pastoral nesta categoria por enquanto.';
        } else if (visiveis === 1) {
            statusFiltro.textContent = 'Mostrando 1 pastoral.';
        } else {
            statusFiltro.textContent = 'Mostrando ' + visiveis + ' pastorais.';
        }
    }

    // Guarda o filtro no endereço (ex.: pastorais.html#jovens) para poder compartilhar
    const endereco = escolhido === 'todas' ? location.pathname : '#' + escolhido;
    history.replaceState(null, '', endereco);
}

filtros.forEach(function (botao) {
    botao.addEventListener('click', function () {
        aplicarFiltro(botao);
    });
});

// Se a página abrir com um filtro no endereço (ex.: #jovens), já aplica
const filtroDoEndereco = document.querySelector('.filtro[data-filtro="' + location.hash.slice(1) + '"]');

if (filtroDoEndereco) {
    aplicarFiltro(filtroDoEndereco);
}

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
