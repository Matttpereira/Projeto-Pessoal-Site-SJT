# ⛪ Site Paróquia São Judas Tadeu - Santo André

Website da **Paróquia São Judas Tadeu**, em Santo André - SP. O objetivo é oferecer aos fiéis e à comunidade uma interface limpa para encontrar informações sobre a paróquia, as pastorais, os horários e o dízimo.

🔗 **Ver online:** https://matttpereira.github.io/Projeto-Pessoal-Site-SJT/

---

## 🚀 Status do Projeto
> [!IMPORTANT]
> **Em desenvolvimento.** A página inicial e as páginas internas já existem com o layout base (banner, logotipo e barra superior). O conteúdo de cada página ainda está sendo escrito.

---

## 🛠️ Tecnologias Utilizadas
* **HTML5**: estrutura das páginas.
* **CSS3**: estilização e layout em um único arquivo global.
* **JavaScript**: componente da barra superior, reaproveitado em todas as páginas.
* **Google Fonts**: tipografia *Bebas Neue*.

---

## 📋 Funcionalidades Atuais
### Página inicial (`html/index.html`)
* **Banner em tela cheia** com o logotipo da paróquia (efeito de zoom ao passar o mouse).
* **Barra superior**: endereço com link para o Google Maps e links para Facebook, Instagram e YouTube.
* **Navegação por imagens** para as páginas internas.

### Páginas internas
Cada página usa o mesmo cabeçalho (banner menor + logotipo que volta para o início) e a mesma barra superior:

| Página | Arquivo |
|---|---|
| Nossa Paróquia | `html/SJT_paroquia.html` |
| Nossas Pastorais | `html/SJT_pastorais.html` |
| Nossos Horários | `html/SJT_horarios.html` |
| Nosso Padroeiro | `html/SJT_padroeiro.html` |
| Dízimo | `html/SJT_dizimo.html` |

---

## 📂 Estrutura de Arquivos
```
.
├── index.html          # redireciona para html/index.html (usado pelo GitHub Pages)
├── html/
│   ├── index.html      # página inicial
│   ├── SJT_*.html      # páginas internas
│   └── Testes.html     # rascunho para testar layouts
├── css/
│   └── Style.css       # estilos globais
├── js/
│   └── components.js   # barra superior injetada em todas as páginas
└── img/                # logotipo, banners e imagens de navegação
```

---

## 🚧 Próximos Passos
- [ ] Escrever o conteúdo das páginas internas.
- [ ] Criar as imagens de navegação de Horários, Padroeiro, Pastorais e Dízimo na página inicial.
- [ ] Criar a página de Contato.
- [ ] Desenvolver o rodapé institucional.
- [ ] Deixar o layout responsivo para celulares.

---

## 📝 Como visualizar
**Online:** acesse o link do GitHub Pages acima.

**Localmente:**
1. Clone este repositório.
2. Abra o arquivo `index.html` (ou `html/index.html`) em qualquer navegador.

---

## 📄 Licença
Distribuído sob a licença MIT. Veja [LICENSE](LICENSE).
