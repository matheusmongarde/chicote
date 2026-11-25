---
name: chicote
description: >-
  /chicote: constrói sites, landing pages, sistemas, telas e componentes que VENDEM, não que só ficam bonitos.
  Obriga a contar a história (nicho, quem compra, oferta, objetivo, referências), escreve o hero numa frase,
  transforma o nicho numa metáfora visual própria (nada de card genérico, passo 1-2-3 lado a lado ou cara de IA),
  calcula cada medida para o público real (idoso, celular ruim, pressa) e justifica matematicamente a posição de
  cada elemento. Depois mede a página num navegador de verdade (celular 360px com rede lenta, contraste, alvo de
  toque, CTA visível, desempenho, SEO) e chicoteia até 100 pontos. Use quando a pessoa digitar /chicote ou pedir
  site, landing page, one page, página de vendas, hero, seção, componente, onboarding, cadastro, painel ou sistema
  com foco em venda, em qualquer stack (HTML, React, Next.js, Vue, Svelte, Astro, Tailwind) e qualquer nicho.
  Também para revisar ou "chicotear" uma página que já existe.
argument-hint: "[conte a história: o que é, pra quem, o que vende, referências]"
user-invocable: true
license: MIT
---

# Chicote

> Site bonito é portfólio. Site que vende é site acessível.

Você está construindo uma coisa que precisa **vender**. Beleza é consequência de proporção certa, não objetivo. Uma página 3D linda em que o botão de contato some no celular da avó é uma página que falhou.

Responda sempre no idioma de quem pediu. A skill foi escrita em português; se a pessoa escrever em inglês, trabalhe e entregue em inglês.

## As quatro leis

1. **Todo site conta uma história.** Cada seção é um capítulo com uma função só. Cada componente é um passo da jornada. Elemento que não empurra a pessoa até a ação é cortado.
2. **O hero resume tudo numa frase.** Se o potencial inteiro do produto não cabe numa frase, ainda não se sabe o que se vende. Volte à história, não ao layout.
3. **Nada fica onde está por acaso.** Todo tamanho, posição, cor e movimento tem um porquê escrito, de preferência com número. "Ficou bonito" não é porquê.
4. **Medir, não pedir.** A página só termina quando o script mede 60/60 nos portões e a rubrica fecha 40/40 com evidência. Nota dada no olho não vale.

## O processo (siga na ordem, sem pular)

### 0. Prepare as ferramentas (uma vez por máquina)

```bash
cd <pasta desta skill> && npm install && npx playwright install chromium
```

Os scripts ficam em `scripts/`. Se não der para rodar Node, siga o processo mesmo assim e diga claramente quais medições ficaram sem fazer.

### 1. Interrogatório: arranque a história

Leia `referencias/01-interrogatorio.md`. Sem estas respostas você não começa: **o que é, para quem (idade, celular, pressa, desconfiança), o que a pessoa ganha, qual a ação que conta como venda, prova que existe, referências, stack, outras skills a combinar.**

- Se a pessoa já contou a história no pedido, extraia e só pergunte o que falta (no máximo 5 perguntas, numa mensagem só).
- Se ela não souber responder, proponha a resposta mais provável para o nicho e peça só um "sim".
- Escreva a ficha em `chicote/ficha.md` no projeto (modelo em `modelos/ficha.md`). Tudo daqui para frente lê essa ficha.

### 2. Roteiro: a história vira página

Leia `referencias/02-historia.md` e `referencias/06-conversao.md`.

- Escreva **a frase do hero** (resultado + para quem + sem qual dor) e mais 2 alternativas. Escolha uma e diga por quê.
- Monte o roteiro: lista de capítulos, cada um com **função** (fisgar, provar, explicar, desarmar objeção, ofertar, chamar), **a pergunta do visitante que ele responde** e **a ação disponível**. Uma landing que vende raramente passa de 7 capítulos. Seção repetida ou sem função sai.
- Para sistema, onboarding ou cadastro: conte telas e campos. Menos telas, menos campos, menos esforço (equação de valor do Hormozi). Cada campo obrigatório precisa de justificativa.

### 3. Metáfora: o nicho vira forma

Leia `referencias/04-metafora.md`, `referencias/16-composicoes.md` e `referencias/12-anti-slop.md`.

- Liste 10 objetos, materiais, gestos e lugares reais do nicho. Escolha **uma** metáfora e derive dela a forma dos componentes que mais aparecem: o card, o divisor, o número, o botão, o passo a passo. (Exemplo real: no Olimpo, o card virou um portal grego de vidro, com arco, colunas e fecho dourado.)
- Para cada seção, nomeie a **estrutura dominante** (`referencias/03-composicao.md`, catálogo de estruturas). Quando houver vários itens, escolha a **composição** (pilha deslocada, leque, escada, bento com hierarquia, quebra-grade, encaixe, órbita, baralho em rolagem: `16-composicoes.md`). O mais importante é maior. Proibido: três cards iguais lado a lado como solução padrão, passo 1-2-3 em fila de ícones, tudo alinhado à esquerda sem eixo.
- A metáfora nunca esconde a função: o botão continua parecendo botão, o preço continua legível.

### 4. Medidas: o público vira número

Leia `referencias/05-publico.md` e `referencias/03-composicao.md`. Rode:

```bash
node scripts/medidas.mjs --publico <geral|idoso|jovem|b2b|tecnico> --aparelho <fraco|medio|forte> --titulo "frase do hero" --letra <0.52 grotesca | 0.6 serifada negrito> --saida chicote/medidas
```

Ele devolve os tokens (`tokens.css`) e o porquê de cada número (`medidas.md`): corpo, escala, entrelinha, medida de linha, grade, espaçamento, alvo de toque, contraste mínimo, tamanho máximo do título para caber em 3 linhas a 360px, orçamento de peso e de movimento. **Use esses tokens. Não invente número fora deles** sem escrever o porquê.

### 5. Composição justificada: capítulos, costuras, cabeçalho e rodapé

Leia `referencias/13-costuras.md` e `referencias/14-cabecalho-rodape.md`. Preencha `chicote/composicao.md` (modelo em `modelos/composicao.md`):

- **Cada capítulo:** eixo (esquerda, centro, direita, diagonal), colunas na grade, peso visual (1 = o mais forte da tela), rota do olhar e **o porquê com número** (Fitts, Hick, escala, contraste, medida). Só existe **um** peso 1 por dobra, e no hero ele é a frase ou o CTA.
- **Cada costura** entre capítulos: o que leva o olho de uma seção à outra (elemento que atravessa, forma da metáfora, fio condutor, sobreposição, pergunta-ponte…). Linha de 1px e troca seca de fundo não são costura.
- **Cabeçalho:** o comportamento no celular e no desktop (some ao descer, encolhe, vira barra de ação, mora embaixo, estático) e o porquê.
- **Rodapé:** o último capítulo (última chamada → o prático → o legal), com a forma da metáfora (carimbo, recibo, placa da porta, receituário…). Nunca o rodapé genérico de 40 links.

### 6. Imagem, efeito, 3D e movimento

Leia `referencias/07-imagem-3d.md`, `referencias/15-efeitos.md` e `referencias/08-movimento.md`.

- Decida a densidade de imagem pelo nicho e pelo aparelho. Foto real do cliente vence banco de imagem. Nicho regulado (saúde, advocacia, nutrição) tem regras: siga.
- Para cada vaga de imagem: baixe do Pexels (`node scripts/pexels.mjs --busca "..." --quantos 6 --saida public/img`, sem chave, já em duas larguras para o `srcset`) ou **entregue o prompt pronto** para ChatGPT/Gemini com proporção, composição, luz e espaço livre para o texto. Diga onde a imagem entra e por quê.
- **Quando imagem não serve** (produto abstrato, sem foto boa, peso demais), desenhe com código: campo de pontos que reage ao dedo, holofote na malha, card que inclina em 3D, maquete em CSS, traço que se desenha, grão. Receitas testadas em `efeitos/`, com as travas de desempenho.
- 3D só se o nicho ganha com ele **e** o aparelho do público aguenta; sempre com imagem estática de reserva.
- Todo movimento tem função (orientar, confirmar, mostrar causa e efeito) e respeita `prefers-reduced-motion`.

### 7. Construa

Escreva pouco: hero com até 30–35 palavras, seção com até 70–110 (pelo público), nenhum jargão (`02-historia.md`). O script mede.

Na stack pedida. Se nada foi pedido: HTML + CSS + o mínimo de JS, que funciona em qualquer lugar e passa nos portões mais fácil.

- Marque o CTA principal com `data-cta="principal"` e os secundários com `data-cta`. O script usa isso.
- Mobile primeiro: desenhe a 360px e só depois abra para 1440px.
- SEO e desempenho entram na construção, não no fim (`referencias/09-desempenho-seo.md`).
- Para combinar com outras skills (animação, tipografia, oferta, gosto visual), leia `referencias/11-outras-skills.md`. Elas dão técnica; o chicote decide.

### 8. Chicotada: medir e corrigir até 100

```bash
node scripts/chicotada.mjs <url ou arquivo.html> --publico <o mesmo do passo 4> --saida chicote/chicotada
```

O script abre a página num Chromium de verdade em três aparelhos (360×640 com CPU 4× mais lenta e rede 4G ruim, 390×844 e 1440×900), mede os portões e salva prints da primeira dobra e da página inteira. Depois:

1. **Olhe os prints** (`chicote/chicotada/*.png`). Compare com a ficha, o roteiro e a composição.
2. Preencha a rubrica de 40 pontos (`referencias/10-pontuacao.md`) em `chicote/chicotada/rubrica.json`. **Cada ponto precisa de evidência**: o texto, o seletor ou o print que prova. Sem evidência, zero.
3. Rode de novo com `--rubrica chicote/chicotada/rubrica.json` para ter a nota total.
4. Menos de 100? Corrija o que mais pesa primeiro e repita. **Máximo de 5 rodadas.** Se não chegar, pare e entregue a lista do que falta e por quê. Não maquie a nota.

### 9. Entrega

Entregue, curto e nesta ordem:
- a nota final, com os portões e a rubrica;
- a frase do hero e a metáfora escolhida, em uma linha cada;
- o que precisa da pessoa (fotos reais, prompts de imagem para gerar, chave do Pexels, textos de prova);
- os arquivos de decisão (`chicote/ficha.md`, `medidas.md`, `composicao.md`) para quem for mexer depois.

## Proibições absolutas

- CTA principal fora da primeira tela a 360×640.
- Rolagem lateral em qualquer largura.
- Texto de leitura abaixo do mínimo do público, contraste abaixo do mínimo do público, alvo de toque abaixo do mínimo do público.
- Depoimento, número, prêmio ou cliente inventado. Sem prova real, a seção de prova vira garantia, demonstração ou "veja funcionando".
- Emoji como ícone, gradiente roxo genérico, "Eleve seu negócio", "Solução completa", três cards idênticos como resposta padrão, linha cinza separando seções, rodapé genérico (lista completa em `referencias/12-anti-slop.md`).
- Animação que atrasa o conteúdo, rouba o foco ou roda sem parar.
- Dizer que está pronto sem ter rodado a chicotada. Se não deu para rodar, diga isso com todas as letras.

## Mapa das referências

| Arquivo | Quando ler |
|---|---|
| `01-interrogatorio.md` | sempre, no começo |
| `02-historia.md` | roteiro, hero, copy |
| `03-composicao.md` | grade, proporção, eixo, rota do olhar, catálogo de estruturas |
| `04-metafora.md` | transformar o nicho em forma de componente |
| `05-publico.md` | idoso, celular ruim, pressa, B2B: os números de cada um |
| `06-conversao.md` | CTA, formulário, cadastro, onboarding, sistemas e painéis |
| `07-imagem-3d.md` | imagem, banco de fotos, prompts, 3D, nichos regulados |
| `08-movimento.md` | animação com função e por aparelho |
| `09-desempenho-seo.md` | orçamento de peso, Core Web Vitals, SEO local |
| `10-pontuacao.md` | os 60 pontos medidos e os 40 da rubrica |
| `11-outras-skills.md` | como combinar com outras skills |
| `12-anti-slop.md` | o que denuncia página feita por IA e o que pôr no lugar |
| `13-costuras.md` | como uma seção encaixa na outra (nada de linha separando) |
| `14-cabecalho-rodape.md` | o comportamento do cabeçalho e o rodapé como último capítulo |
| `15-efeitos.md` | efeitos em CSS/canvas no lugar de imagem, sem travar (código em `efeitos/`) |
| `16-composicoes.md` | composições de cards: pilha, leque, escada, bento, quebra-grade, órbita |
