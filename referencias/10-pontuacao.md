# 10. Pontuação: 100 ou continua chicoteando

A nota tem duas partes. Os **60 pontos dos portões** são medidos pelo `chicotada.mjs`, sem conversa. Os **40 pontos da rubrica** são avaliados por você, e cada ponto exige evidência (texto exato, seletor, print). Sem evidência, o item vale zero.

**Meta: 100.** Máximo de 5 rodadas de correção. Se não chegar, pare e entregue o que falta. Nunca arredonde, nunca dê a nota "porque está quase".

## Portões medidos (60)

| id | Pontos | Passa quando |
|---|---|---|
| `cta-360` | 10 | o `[data-cta="principal"]` (ou o primeiro CTA detectado) está inteiro na primeira tela a 360×640 |
| `cta-desktop` | 4 | idem a 1440×900 |
| `sem-rolagem-lateral` | 6 | nenhuma das 3 larguras tem rolagem horizontal |
| `contraste` | 8 | ≥ 98% dos textos passam no mínimo do público e nenhum fica abaixo de 3:1 (parcial proporcional) |
| `alvos` | 6 | todo elemento clicável tem o lado menor ≥ alvo mínimo do público (links dentro de parágrafo são exceção) (parcial proporcional) |
| `fonte` | 5 | o texto de leitura está no corpo mínimo do público e nada fica abaixo do mínimo absoluto (parcial proporcional) |
| `lcp` | 6 | LCP ≤ 2,5 s no perfil lento (360px, CPU 4×, 4G ruim); 0 acima de 4 s, proporcional entre os dois |
| `cls` | 3 | CLS ≤ 0,1 |
| `peso` | 4 | bytes transferidos na primeira carga dentro do orçamento do aparelho |
| `seo` | 5 | 1 ponto para cada: `lang`, `title` 30–65, `description` 70–160, um único `h1`, `og:image` + `viewport` sem bloquear zoom |
| `movimento` | 3 | com `prefers-reduced-motion: reduce`, nenhuma animação infinita rodando |

O script imprime a nota de cada portão, o que falhou e onde (seletor, texto, medida).

## Rubrica com evidência (40)

Preencha `chicote/chicotada/rubrica.json`:

```json
{
  "itens": [
    { "id": "hero-frase", "pontos": 8, "evidencia": "h1: 'Barba feita em 30 min, sem fila, no Cambuí' — 9 palavras, cabe em 3 linhas a 360px (print 360-dobra.png), específica (bairro), concreta (30 min)" }
  ]
}
```

| id | Máx. | Nota máxima só se |
|---|---|---|
| `hero-frase` | 8 | a frase passa nos 5 testes de `02-historia.md` (−2 por teste reprovado) |
| `roteiro` | 6 | cada seção tem função única e responde a uma pergunta do visitante; CTA a cada ~1,5 tela no celular; nenhuma seção repetida |
| `metafora` | 6 | a metáfora do nicho está escrita e os componentes principais derivam dela; nenhuma grade de cards idênticos como solução padrão; nenhum passo 1-2-3 em fila de ícones |
| `composicao` | 6 | `composicao.md` completo: eixo, colunas, peso e porquê com número em cada capítulo; um único peso 1 por dobra; medidas vindas do `tokens.css` |
| `copy` | 5 | nada da lista de `12-anti-slop.md`; botões dizem o que acontece; nenhuma prova inventada |
| `publico` | 5 | o checklist do perfil (`05-publico.md`) está cumprido, item por item |
| `imagem` | 4 | cada imagem prova algo ou cria a atmosfera certa; `alt` com significado; regras do nicho regulado respeitadas; prompts entregues quando falta imagem |

Rode de novo com a rubrica para ter o total:

```bash
node scripts/chicotada.mjs <url> --publico idoso --rubrica chicote/chicotada/rubrica.json
```

## Ordem de correção

Corrija pelo que mais pesa e mais rápido resolve: `cta-360` → `sem-rolagem-lateral` → `contraste` → `alvos` → `fonte` → `lcp` → o resto. Na rubrica, a frase do hero vem primeiro: se ela muda, muita coisa muda junto.

## Hero 100

Para avaliar só o hero (pedido comum: "chicoteia meu hero"), use `--so-hero`: o script mede só a primeira tela (CTA, contraste, fonte, alvos e LCP) e a rubrica considera `hero-frase`, `metafora` e `composicao` daquela dobra. A regra é a mesma: 100 ou continua.
