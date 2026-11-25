#!/usr/bin/env node
/**
 * pexels.mjs: busca e baixa fotos do Pexels, com créditos.
 *
 *   PEXELS_API_KEY=... node scripts/pexels.mjs --busca "barber shop warm light" --quantos 6 --orientacao landscape --saida public/img
 *
 * Chave grátis em https://www.pexels.com/api/ . Gera CREDITOS.md na pasta de saída.
 */
import fs from "node:fs";
import path from "node:path";

const argv = process.argv.slice(2);
const opt = (k, d) => {
  const i = argv.indexOf("--" + k);
  return i < 0 ? d : argv[i + 1];
};
const busca = opt("busca");
const quantos = Math.min(30, Number(opt("quantos", 6)));
const orientacao = opt("orientacao", "landscape"); // landscape | portrait | square
const tamanho = opt("tamanho", "large2x"); // original | large2x | large | medium
const saida = path.resolve(opt("saida", "public/img"));
const chave = process.env.PEXELS_API_KEY;

if (!busca) {
  console.log('uso: PEXELS_API_KEY=... node scripts/pexels.mjs --busca "termos em inglês" [--quantos 6] [--orientacao landscape|portrait|square] [--saida public/img]');
  process.exit(1);
}
if (!chave) {
  console.error(`
Falta a chave do Pexels (grátis):
  1. Crie a conta em https://www.pexels.com/join-consumer/
  2. Peça a chave em https://www.pexels.com/api/new/
  3. Rode: PEXELS_API_KEY=sua_chave node scripts/pexels.mjs --busca "${busca}"

Sem chave? Entregue o prompt de imagem (referencias/07-imagem-3d.md) ou use a forma da metáfora em CSS.`);
  process.exit(2);
}

const u = new URL("https://api.pexels.com/v1/search");
u.searchParams.set("query", busca);
u.searchParams.set("per_page", String(quantos));
u.searchParams.set("orientation", orientacao);
const r = await fetch(u, { headers: { Authorization: chave } });
if (!r.ok) {
  console.error(`Pexels respondeu ${r.status}: ${(await r.text()).slice(0, 200)}`);
  process.exit(1);
}
const { photos = [] } = await r.json();
if (!photos.length) {
  console.error("Nada encontrado. Tente termos em inglês, mais concretos (objeto + luz + ângulo).");
  process.exit(1);
}
fs.mkdirSync(saida, { recursive: true });
const slug = busca.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 40);
const creditos = [];
for (const [i, f] of photos.entries()) {
  const src = f.src[tamanho] ?? f.src.large2x;
  const arq = `${slug}-${String(i + 1).padStart(2, "0")}.jpg`;
  const img = await fetch(src);
  fs.writeFileSync(path.join(saida, arq), Buffer.from(await img.arrayBuffer()));
  creditos.push(`- \`${arq}\` · ${f.width}×${f.height} · foto de [${f.photographer}](${f.photographer_url}) no [Pexels](${f.url}) · alt sugerido: "${f.alt || busca}"`);
  console.log(`baixada ${arq} (${f.photographer})`);
}
const credArq = path.join(saida, "CREDITOS.md");
const antes = fs.existsSync(credArq) ? fs.readFileSync(credArq, "utf8") : "# Créditos das imagens\n\nNo rodapé do site: \"Imagens ilustrativas: Pexels\".\n";
fs.writeFileSync(credArq, `${antes}\n## "${busca}"\n${creditos.join("\n")}\n`);
console.log(`\n${photos.length} fotos em ${saida}. Créditos em CREDITOS.md. Converta para AVIF/WebP e gere 2 larguras antes de usar.`);
