# Relatório do site da Paróquia São Judas Tadeu

> **Versão 2, 16/11/2026.** Análise completa refeita. O código não mudou desde a versão 1 (14/11), então esta versão **aprofunda** o que antes ficou só na amostragem:
> - leitura integral de todas as páginas, do CSS e do JS;
> - auditoria com a skill **web-design-guidelines** (diretrizes de interface da Vercel);
> - cálculo de contraste das cores pela norma WCAG;
> - testes no navegador, no computador e no celular (375px): menu, âncoras, filtro e rolagem.
>
> Os itens novos desta versão estão marcados com 🆕. Itens marcados com [x] foram corrigidos em 16/11.

## Resumo

A base está **boa e organizada**. Variáveis de cor no topo do CSS, cabeçalho e rodapé num só arquivo ([components.js](js/components.js)), um único `h1` por página, títulos em ordem, imagens com tamanho declarado, todos os campos com `<label>`, botão de menu com `aria-expanded` e nenhum erro no console. Nenhuma página fica com rolagem para o lado no celular, e quase todas as cores passam no teste de contraste.

**Para terminar o site, o que falta é sobretudo conteúdo e envio dos formulários, não código.**

---

## 1. Conteúdo pendente (o que mais pesa)

Ainda há cerca de **190 textos entre [COLCHETES]**:

| Página | Pendências |
|---|---|
| pastorais.html | 36 |
| paroquia.html | 34 |
| index.html | 28 |
| agenda.html | 24 |
| horarios.html | 23 |
| sacramentos.html | 20 |
| dizimo.html | 15 |
| contato.html | 6 + rodapé |

### Checklist para pedir à secretaria

Junte tudo de uma vez numa planilha ou documento:

- [ ] Horários das missas por dia e por comunidade, confissões, secretaria e novenas/adoração
- [ ] Telefone, WhatsApp e e-mail da paróquia
- [ ] Chave PIX, favorecido/CNPJ, dados bancários e QR Code
- [ ] História da paróquia e marcos com ano
- [ ] Nomes e fotos do clero e da equipe (com autorização de uso de imagem)
- [ ] Comunidades e capelas: nome, endereço e horários
- [ ] Pastorais e movimentos: nome, categoria, descrição, dia/horário e foto
- [ ] Orientações de cada sacramento (documentos, idade, inscrições)
- [ ] Oração a São Judas usada pela paróquia
- [ ] Frases de boas-vindas e textos curtos de cada página

**Dica:** os horários das missas aparecem em 3 lugares (início, página de horários e rodapé). Defina uma única fonte para não ficarem diferentes.

---

## 2. Problemas que impedem a publicação

- [ ] **Os formulários não enviam nada.** Os botões são `type="button"` e os `<form>` não têm `action`: [contato.html:48](contato.html#L48), [contato.html:90](contato.html#L90), [dizimo.html:80](dizimo.html#L80). Como o site é só HTML, a saída mais simples é um serviço como **Formspree** ou **Web3Forms**. Eles são gratuitos, basta colocar um `action` no form e não precisa de servidor.
- [ ] **Os campos não têm `name`**, então mesmo com `action` os dados não chegariam. Também faltam `required` e uma mensagem de "enviado com sucesso".
- [ ] **O botão do WhatsApp está sem link:** `href="#"` em [contato.html:74](contato.html#L74). Deve ser `https://wa.me/55DDDNUMERO`.
- [ ] **Links que levam ao lugar errado:** "Ver programação completa" ([agenda.html:34](agenda.html#L34)) e todos os botões "Detalhes" da agenda ([agenda.html:53](agenda.html#L53)) vão para a página de contato. 🆕 Os "Quero participar →" das pastorais também, o que é aceitável, mas daria para já abrir o contato com o assunto "Pastorais" escolhido.
- [ ] **As setas de mês da agenda não fazem nada** ([agenda.html:44](agenda.html#L44)). Ou implementar, ou tirar até ter a agenda real.
- [ ] 🆕 **O destaque da agenda está desatualizado.** A "Festa de São Judas Tadeu, 28 de outubro" ([agenda.html:32](agenda.html#L32)) já passou. Um destaque fixo vai ficar velho todo ano; troque pelo próximo grande evento ou mostre só quando estiver perto da data.
- [ ] 🆕 **O botão "Copiar chave PIX" não avisa quando falha** ([paginas.js:36](js/paginas.js#L36)). Sem HTTPS ou em navegador antigo a cópia não funciona e a pessoa não fica sabendo. Mostre a chave selecionável e uma mensagem de erro. (No GitHub Pages há HTTPS, então funciona.)
- [ ] **O cadastro de dizimista pede data de nascimento, telefone e e-mail.** Isso é dado pessoal, então a LGPD pede um texto curto dizendo para que os dados serão usados. 🆕 Vale o mesmo para os pedidos de oração, que podem conter informações sensíveis de saúde ou família.

---

## 3. Acessibilidade e usabilidade

### Confirmado no navegador
- [x] **O cabeçalho fixo cobre o título** ao abrir `horarios.html#como-chegar`. 🆕 Medido: a seção começa no topo da tela e o cabeçalho ocupa os primeiros 72px. Solução: `section[id] { scroll-margin-top: 90px; }`.
- [x] **O filtro das pastorais não fica salvo na URL.** 🆕 Confirmado: o filtro funciona, mas o endereço não muda (`#jovens`), então não dá para compartilhar um filtro já aplicado.

### Foco do teclado (correção da versão 1)
- [x] 🆕 **O CSS não remove o contorno de foco**, então o navegador mostra o padrão dele. O problema é que esse contorno escuro **quase não aparece sobre o cabeçalho verde nem nos botões**. E o contorno dourado dos campos tem contraste de só **2,3:1 sobre o creme** ([style.css:846](css/style.css#L846)), abaixo do mínimo de 3:1. Sugestão:
  ```css
  :focus-visible { outline: 3px solid var(--verde); outline-offset: 2px; }
  .topo :focus-visible, .fundo-verde :focus-visible { outline-color: var(--branco); }
  ```

### Contraste de cores 🆕
Resultado do cálculo WCAG (o mínimo é 4,5:1 para texto e 3:1 para bordas e ícones):

| Combinação | Contraste | Situação |
|---|---|---|
| Texto branco sobre verde | 7,6 | ✅ |
| Texto branco sobre o botão vermelho (chama) | 5,8 | ✅ |
| Sobretítulo dourado sobre creme | 5,1 | ✅ |
| Texto claro sobre seção verde | 6,0 | ✅ |
| Textos do rodapé | 9,0+ | ✅ |
| **Sobretítulo dourado sobre verde-claro** | **4,3** | ❌ por pouco |
| **Contorno de foco dourado sobre creme** | **2,3** | ❌ |
| Borda dos campos sobre creme | 3,6 | ✅ |

- [x] **Sobretítulo sobre verde-claro:** acontece em [index.html:36](index.html#L36) ("Venha celebrar conosco") e [paroquia.html:51](paroquia.html#L51) ("Nosso padroeiro"). Escurecer `--dourado-texto` para algo como `#7A5A12` resolve.

### Outros
- [x] **Falta o link "Pular para o conteúdo"**, que ajuda quem navega pelo teclado.
- [x] **Falta suporte a `prefers-reduced-motion`.** O `scroll-behavior: smooth` ([style.css:50](css/style.css#L50)) deveria ser desligado para quem pede menos movimento.
- [x] **O menu do celular não fecha com a tecla Esc** nem ao clicar num link.
- [x] 🆕 **O filtro não avisa leitores de tela** quantas pastorais estão aparecendo. Um `<p aria-live="polite">Mostrando 2 pastorais</p>` resolve, e também serve de mensagem quando uma categoria não tiver nenhuma.
- [ ] **Faltam `inputmode`/`placeholder` com exemplo** nos campos de telefone, como `(11) 90000-0000`.
- [ ] 🆕 **Sem `<noscript>`:** se o JavaScript falhar, o site fica sem menu e sem rodapé. Um aviso simples ou um link para o início já ajuda.

---

## 4. Desempenho e SEO

- [ ] **Faltam favicon, `og:image`/`og:title`** (a prévia ao compartilhar no WhatsApp) e `<meta name="theme-color">`. Nenhuma página tem.
- [ ] 🆕 **Faltam `<meta name="description">` próprias** nas páginas internas, para o Google mostrar um resumo melhor de cada uma.
- [ ] 🆕 **Faltam `robots.txt`, `sitemap.xml` e uma página `404.html`.** O GitHub Pages usa o `404.html` automaticamente.
- [ ] **A imagem do padroeiro na home não usa `loading="lazy"`.** Ela fica mais abaixo na página e poderia carregar depois.
- [ ] **O logo é um PNG de 1920×387 exibido com 238×48.** Uma versão menor ou em SVG/WebP resolve.
- [ ] **Três imagens não são usadas em nenhuma página:** `fundo-home.jpg`, `banner-paginas.jpg` e `cartao-missa.jpg`. Usar ou apagar.
- [ ] 🆕 **Dois mapas do Google** (horários e contato) carregam cerca de 1MB cada. Já usam `loading="lazy"`, o que ajuda; na página de contato daria para trocar o mapa por uma imagem com link.
- **Cabeçalho e rodapé são criados por JavaScript**, então somem se o JS falhar e o Google indexa pior. Para um site estático isso é aceitável, mas um gerador simples (Eleventy) resolveria no futuro.

---

## 5. Design 🆕

- [ ] **Na página do Dízimo, o topo verde emenda no cabeçalho verde** ([dizimo.html:16](dizimo.html#L16)) e os dois parecem um bloco só. Uma linha dourada fina embaixo do cabeçalho, ou o topo em creme como nas outras páginas, separa melhor.
- [ ] **O botão "Dízimo" (vermelho) dentro do cabeçalho verde tem pouco contraste de borda (1,3:1).** O texto branco se lê bem, mas o botão "some" para quem enxerga pouco. Uma borda creme fina resolve.
- [ ] **As páginas internas abrem só com texto.** Usar o `banner-paginas.jpg` (que já existe e não é usado) como fundo do topo, com uma camada escura por cima, daria mais vida sem pesar.
- [ ] **Depois que as fotos reais entrarem**, rodar a skill **design-taste-frontend** para uma revisão de polimento: animação de entrada discreta, ritmo entre seções e hierarquia da home.

---

## 6. Organização do código

- [x] **Há estilos inline espalhados** que poderiam virar classes: [paroquia.html:32](paroquia.html#L32), [horarios.html:60](horarios.html#L60), [contato.html:52](contato.html#L52), [contato.html:99](contato.html#L99), [dizimo.html:31](dizimo.html#L31), [agenda.html:25](agenda.html#L25).
- [x] **`testes.html` estava no repositório** (removido em 16/11) e carrega uma imagem de um site de terceiros. Tirar antes de publicar.
- [ ] **A pasta `.claude/` não foi adicionada ao git.** Decidir se entra no repositório ou vai para o `.gitignore`.
- [ ] 🆕 **Atualizar o [README.md](README.md)** quando os formulários e a publicação estiverem prontos (a seção "Próximos Passos" dele repete parte deste relatório).

---

## Próximos passos (em ordem)

1. [x] **Ajustes rápidos de código** (feito em 16/11; só ficou de fora a limpeza das 3 imagens sem uso, que depende de decidir se o `banner-paginas.jpg` vai para o topo das páginas): foco visível, contraste do dourado, `scroll-margin`, link "Pular para o conteúdo", reduced-motion, Esc no menu, aviso do filtro, estilos inline viram classes, limpeza de imagens e do `testes.html`.
2. [ ] **Formulários funcionando:** `name`, `required`, Formspree/Web3Forms, mensagem de sucesso, aviso de LGPD e erro no botão do PIX.
3. [ ] **Conteúdo real:** usar o checklist da seção 1, preencher os [COLCHETES] e trocar as caixas tracejadas por fotos (com `loading="lazy"`).
4. [ ] **Agenda:** decidir se fica estática ou ganha navegação por mês, alimentada por um arquivo JSON simples. Resolver o destaque da festa.
5. [ ] **SEO e compartilhamento:** favicon, Open Graph, `theme-color`, descrições por página, `404.html`, `robots.txt` e `sitemap.xml`.
6. [ ] **Ajustes de design** da seção 5 e revisão com **design-taste-frontend**.
7. [ ] **Publicar:** o site já está no GitHub Pages (https://matttpereira.github.io/Projeto-Pessoal-Site-SJT/), mas com a versão antiga. Cada envio (`git push`) atualiza o site público; se quiser, configurar depois um domínio próprio.
8. [ ] **Revisão final:** rodar de novo a **web-design-guidelines** e testar menu, filtro e formulários com a **playwright-cli**.

---

## Como as skills instaladas ajudam aqui

| Skill | Uso no projeto |
|---|---|
| **web-design-guidelines** | A auditoria deste relatório. Rodar de novo antes de publicar. |
| **design-taste-frontend** | Polimento visual quando o conteúdo real e as fotos estiverem no lugar. |
| **playwright-cli** | Testar automaticamente que menu, filtro e formulários funcionam. |
| **gsap-skills** | Animações suaves, se quiser, com cuidado para não pesar. |
| **superpowers** (brainstorming / writing-plans) | Planejar a agenda dinâmica antes de programar. |
| **claude-security** | Uma checagem rápida antes de publicar, principalmente depois que os formulários enviarem dados. |
