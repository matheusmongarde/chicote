# chicote

> Site bonito é portfólio. Site que vende é site acessível.

**[Português](#português) · [English](#english)**

---

## Português

`/chicote` é uma skill para agentes de IA (Claude Code, Codex, Cursor e qualquer agente que lê arquivos) que constrói sites, landing pages, sistemas e componentes **focados em venda**, e não para de chicotear até a página bater 100 pontos.

Ela não confia no gosto do modelo. Ela **mede**. É por isso que funciona até em modelo pequeno.

### O que ela faz

1. **Arranca a história.** Nicho, quem compra (idade, celular, pressa), a ação que conta como venda, a prova que existe de verdade. Sem história, não começa.
2. **Escreve o hero numa frase.** Se o potencial do produto não cabe numa frase, o problema não é o layout.
3. **Transforma o nicho em forma.** Nada de três cards iguais ou passo 1-2-3 em fila de ícones. Um site de engenharia ganha carimbo e cotas. Uma barbearia ganha placas de preço esmaltadas. No Olimpo, o card virou um portal grego.
4. **Calcula cada medida para o público real.** Para idoso, 19px de corpo, alvo de 52px e contraste 7:1. Para celular fraco, orçamento de peso. O tamanho do título sai de uma fórmula para caber em 3 linhas a 360px.
5. **Justifica a posição de cada elemento** com Fitts, Hick, escala modular, grade de 12 e peso visual. Os egípcios e Leonardo da Vinci entram como método, não como enfeite.
6. **Costura uma seção na outra.** Nada de linha cinza separando faixas. Um elemento atravessa a borda, a borda tem a forma do nicho, uma pergunta no fim de uma seção é respondida no título da próxima. O cabeçalho tem comportamento escolhido (some, encolhe, vira barra de ação, mora embaixo) e o rodapé é o último capítulo: carimbo de engenharia, comanda de restaurante, placa da porta da barbearia.
7. **Compõe os cards em vez de enfileirar.** Pilha deslocada, leque, escada, bento com hierarquia, quebra-grade, órbita, baralho em rolagem. O mais importante é maior.
8. **Não aceita página pobre.** O piso é o nível das melhores landing pages de produto: moldura em painéis, fonte de título de verdade, hero com uma peça visual forte, cards que mostram alguma coisa e fotos com um só tratamento. Fundo chapado, fonte do sistema, botão sem relevo e card encostado à esquerda perdem ponto no script.
9. **Sem imagem, entrega o prompt.** Cada imagem que falta vira um prompt pronto para ChatGPT, Gemini ou Midjourney, em camadas quando a cena passa na frente do produto, e a página ganha uma reserva bonita enquanto isso.
10. **Desenha quando a imagem não serve.** Campo de pontos que reage ao dedo, holofote na malha, card que inclina em 3D, maquete só de CSS, traço que se desenha, grão de papel. Cada efeito tem menos de 3 KB, para fora da tela e tem versão estática para quem pede menos movimento.
11. **Mede num navegador de verdade** a 360×640 com CPU 4× mais lenta e 4G ruim. Confere CTA na primeira tela, contraste, alvo de toque, fonte, LCP, CLS, peso, SEO, movimento e **texto**: conta as palavras de cada seção e caça jargão ("soluções completas", "eleve seu negócio", "saiba mais").
12. **Chicoteia até 100.** São 70 pontos medidos pelo script e 30 numa rubrica em que cada ponto exige evidência. Máximo de 5 rodadas. Se não chegar, diz o que falta, sem maquiar.

### Instalar

```bash
git clone https://github.com/matheusmongarde/chicote.git ~/chicote
cd ~/chicote && npm install && npx playwright install chromium

# Claude Code
ln -s ~/chicote ~/.claude/skills/chicote
```

No Claude Code, digite `/chicote` e conte a história. Em outros agentes, aponte para o `SKILL.md`.

### Usar

```
/chicote Barbearia no Cambuí, Campinas. Cliente de 25 a 70 anos, chega pelo Google Maps no celular.
Quero que chamem no WhatsApp. Temos 4,9 no Google com 212 avaliações. HTML puro.
```

Os scripts também rodam sozinhos:

```bash
node scripts/medidas.mjs --publico idoso --aparelho fraco --titulo "Barba feita em 30 minutos, sem fila." --letra 0.6
node scripts/chicotada.mjs minha-pagina.html --publico idoso
node scripts/chicotada.mjs https://meusite.com.br --rubrica chicote/chicotada/rubrica.json
node scripts/pexels.mjs --busca "barber shop warm light" --quantos 6      # sem chave, já em 2 larguras
```

### A prova

Em `exemplos/` há três páginas (`npm run teste` roda as três):

| Página | Nota | Por quê |
|---|---|---|
| `ruim.html` | **32,6/70** nos portões | fundo chapado, nenhuma imagem, fonte do sistema, botão chapado, texto ilegível, 12 jargões, três cards com emoji |
| `barbearia.html` | **100/100** | no nível das landing pages de referência: painéis com moldura, Instrument Serif grande, a agenda do WhatsApp, a foto e o recibo "emergindo" do hero, bento com fotos tratadas, pódio de preços, cena final. Prompts das imagens próprias em `barbearia-prompts.md` |
| `efeitos.html` | **70/70** nos portões | os 6 efeitos funcionando a 60 quadros por segundo |

A barbearia foi refeita três vezes até chegar aqui. A primeira versão era chapada, "folha de Word". Foi daí que nasceram as ordens diretas e os portões de gosto: atmosfera, visual, profundidade, eixo e tipografia. Hoje a primeira versão tiraria menos de 50.

### Estrutura

```
SKILL.md              o processo, em 9 passos
referencias/          19 arquivos lidos sob demanda (história, composição, metáfora, público, conversão, costuras,
                      cabeçalho e rodapé, efeitos, composições de cards, atmosfera,
                      o nível de referência, prompts de imagem…)
efeitos/              pontos, holofote, inclinação 3D, maquete em CSS, traço e grão, prontos para colar
scripts/medidas.mjs   público e aparelho viram tokens CSS com o porquê de cada número
scripts/chicotada.mjs auditoria num Chromium de verdade, nota de 0 a 60 + rubrica
scripts/pexels.mjs    busca e baixa fotos do Pexels sem chave, em 2 larguras, com créditos
modelos/              ficha da história e mapa de composição
exemplos/             a página ruim, a página 100 e a vitrine de efeitos
```

---

## English

`/chicote` (Portuguese for "whip") is a skill for AI coding agents that builds websites, landing pages, apps and components **that sell**, then keeps whipping the page until it scores 100.

It doesn't trust the model's taste. It **measures**, which is why it works even with small models.

- **Story first.** Niche, buyer (age, phone, hurry), the action that counts as a sale, real proof. No story, no build.
- **The hero in one sentence.** If the product doesn't fit in one sentence, the problem isn't the layout.
- **The niche becomes form.** No three identical cards, no 1-2-3 icon rows. An engineering site gets title blocks and dimension lines; a barbershop gets enamel price plates.
- **Every measure is computed for the real audience.** For older users: 19px body, 52px targets, 7:1 contrast. The headline size comes from a formula that fits 3 lines at 360px.
- **Every position is justified** with Fitts's law, Hick's law, a modular scale, a 12-column grid and visual weight.
- **Sections are stitched together**, not separated by lines: an element crosses the edge, the edge takes the niche's shape, the header has a chosen behavior and the footer is the last chapter.
- **Cards are composed** (offset stack, fan, staircase, hierarchical bento, grid-break), never three identical boxes.
- **Code-drawn effects instead of stock photos**: a dot field that reacts to touch, a spotlight grid, 3D tilt, a CSS-only model. Each is under 3 KB, pauses off-screen and respects reduced motion.
- **Measured in a real browser** at 360×640 with 4× CPU throttling and slow 4G: CTA above the fold, contrast, tap targets, font size, LCP, CLS, weight, SEO, reduced motion, word budget and jargon.
- **A quality floor.** Pages must reach the level of the best product landing pages: framed panels, a real display typeface, a strong hero visual, cards that show something, one color treatment for every photo. Flat backgrounds, system fonts, flat buttons and left-hugging cards lose points.
- **No image? It writes the prompt**, layered when the scene passes in front of the product.
- **Whipped until 100.** 70 points are measured by the script; 30 come from a rubric where every point needs evidence. Max 5 rounds, with no fake scores.

The skill's instructions are in Portuguese; it answers in the user's language.

```bash
git clone https://github.com/matheusmongarde/chicote.git ~/chicote
cd ~/chicote && npm install && npx playwright install chromium
ln -s ~/chicote ~/.claude/skills/chicote   # Claude Code
```

---

MIT · feito por [@mongarde_](https://x.com/mongarde_), com o que aprendi construindo a Korely, o mamãe virei dev e o Garimpo.
