// Partes que se repetem em todas as páginas.
// Mudou aqui, muda no site inteiro.

const redesSociais = `
    <a href="https://www.facebook.com/saojudassa" target="_blank" rel="noopener">Facebook</a>
    <a href="https://www.instagram.com/saojudassa/" target="_blank" rel="noopener">Instagram</a>
    <a href="https://www.youtube.com/@paroquiasaojudastadeu-sant8880" target="_blank" rel="noopener">YouTube</a>
`;

const endereco = `
    <a href="https://maps.app.goo.gl/Vi4xch855Y2pte2i9" target="_blank" rel="noopener">
        Rua Vitória Régia, 933 - Bairro Campestre - Santo André - SP
    </a>
`;

const barraSuperior = `
    <header class="barra-superior">
        <span class="localizacao">${endereco}</span>
        <nav class="redes-sociais" aria-label="Redes sociais">${redesSociais}</nav>
    </header>
`;

const paginas = [
    { arquivo: 'index.html', nome: 'Início' },
    { arquivo: 'paroquia.html', nome: 'Paróquia' },
    { arquivo: 'pastorais.html', nome: 'Pastorais' },
    { arquivo: 'dizimo.html', nome: 'Dízimo' },
    { arquivo: 'horarios.html', nome: 'Horários' },
    { arquivo: 'padroeiro.html', nome: 'Padroeiro' },
];

// Descobre em qual página estamos para destacar o link no menu
const paginaAtual = location.pathname.split('/').pop() || 'index.html';

const itensMenu = paginas.map(function (pagina) {
    const atual = pagina.arquivo === paginaAtual ? ' aria-current="page"' : '';
    return `<li><a href="${pagina.arquivo}"${atual}>${pagina.nome}</a></li>`;
}).join('');

const menu = `
    <nav class="menu-principal" aria-label="Menu principal">
        <ul>${itensMenu}</ul>
    </nav>
`;

const rodape = `
    <footer class="rodape">
        <p>Paróquia São Judas Tadeu - Santo André</p>
        <p>${endereco}</p>
        <p class="redes-sociais">${redesSociais}</p>
        <p>&copy; ${new Date().getFullYear()} Paróquia São Judas Tadeu</p>
    </footer>
`;

document.body.insertAdjacentHTML('afterbegin', barraSuperior);
document.querySelector('.imagem-fundo, .imagem-fundo-paginas').insertAdjacentHTML('afterend', menu);
document.body.insertAdjacentHTML('beforeend', rodape);
