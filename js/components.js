// Partes que se repetem em todas as páginas (cabeçalho, menu e rodapé).
// Mudou aqui, muda no site inteiro.

const endereco = `
    <a href="https://maps.app.goo.gl/Vi4xch855Y2pte2i9" target="_blank" rel="noopener">
        Rua Vitória Régia, 933 - Bairro Campestre<br>Santo André - SP
    </a>
`;

const redesSociais = `
    <a href="https://www.facebook.com/saojudassa" target="_blank" rel="noopener">Facebook</a>
    <a href="https://www.instagram.com/saojudassa/" target="_blank" rel="noopener">Instagram</a>
    <a href="https://www.youtube.com/@paroquiasaojudastadeu-sant8880" target="_blank" rel="noopener">YouTube</a>
`;

// Páginas do menu, na ordem em que aparecem
const paginas = [
    { arquivo: 'index.html', nome: 'Início' },
    { arquivo: 'paroquia.html', nome: 'A Paróquia' },
    { arquivo: 'horarios.html', nome: 'Missas e Horários' },
    { arquivo: 'pastorais.html', nome: 'Pastorais' },
    { arquivo: 'sacramentos.html', nome: 'Sacramentos' },
    { arquivo: 'agenda.html', nome: 'Agenda' },
    { arquivo: 'contato.html', nome: 'Contato' },
];

// Descobre em qual página estamos para destacar o link no menu
const paginaAtual = location.pathname.split('/').pop() || 'index.html';

function marcarAtual(arquivo) {
    return arquivo === paginaAtual ? ' aria-current="page"' : '';
}

const itensMenu = paginas.map(function (pagina) {
    return `<a href="${pagina.arquivo}"${marcarAtual(pagina.arquivo)}>${pagina.nome}</a>`;
}).join('');

const cabecalho = `
    <header class="topo">
        <div class="container topo-conteudo">
            <a class="marca" href="index.html">
                <img src="img/logo.png" width="238" height="48" alt="Paróquia São Judas Tadeu - página inicial">
            </a>
            <button type="button" class="botao-menu" aria-expanded="false" aria-controls="menu-principal">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
                Menu
            </button>
            <nav id="menu-principal" class="menu" aria-label="Menu principal">
                ${itensMenu}
                <a href="dizimo.html" class="btn btn-chama"${marcarAtual('dizimo.html')}>Dízimo</a>
            </nav>
        </div>
    </header>
`;

const rodape = `
    <footer class="rodape">
        <div class="container rodape-colunas">
            <div>
                <h3>Paróquia São Judas Tadeu</h3>
                <p>${endereco}</p>
            </div>
            <div>
                <strong>Missas</strong>
                <p><span class="preencher">[HORÁRIOS RESUMIDOS DAS MISSAS]</span></p>
                <a href="horarios.html">Ver todos os horários</a>
            </div>
            <div>
                <strong>Secretaria</strong>
                <p><span class="preencher">[HORÁRIO DE ATENDIMENTO]</span><br><span class="preencher">[TELEFONE]</span></p>
            </div>
            <div>
                <strong>Redes sociais</strong>
                <p class="redes-sociais">${redesSociais}</p>
                <a href="contato.html" class="btn btn-verde">Fale com a gente</a>
            </div>
        </div>
        <div class="rodape-final">
            <p class="container">&copy; ${new Date().getFullYear()} Paróquia São Judas Tadeu · Diocese de Santo André</p>
        </div>
    </footer>
`;

document.body.insertAdjacentHTML('afterbegin', cabecalho);
document.body.insertAdjacentHTML('beforeend', rodape);

// Abre e fecha o menu no celular
const botaoMenu = document.querySelector('.botao-menu');
const menu = document.querySelector('.menu');

botaoMenu.addEventListener('click', function () {
    const aberto = menu.classList.toggle('aberto');
    botaoMenu.setAttribute('aria-expanded', aberto);
});
