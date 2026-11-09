# Projeto Tesourinha — redesign

Site completo de apresentação em Next.js, React, TypeScript, Tailwind CSS, Framer Motion e Lucide. Conteúdo e imagens provenientes do site oficial; nenhuma mudança em produção.

## Executar

Requisitos: Node.js 22 ou superior e pnpm 11 (ou npm).

```sh
pnpm install
pnpm dev
```

Abra http://127.0.0.1:3000. Com npm: `npm install` e `npm run dev`. O lockfile fornecido é do pnpm.

## Compilar e servir

```sh
pnpm build
pnpm start
```

O modo Webpack foi escolhido por compatibilidade com o ambiente Windows de desenvolvimento. O servidor de prévia escuta apenas neste computador.

## Verificações

```sh
pnpm lint
pnpm typecheck
pnpm test
pnpm test:e2e
```

Os testes E2E esperam servidor na porta 3000 e Microsoft Edge instalado. Em outro ambiente, altere `channel: 'msedge'` em playwright.config.ts para o navegador disponível ou instale Chromium com Playwright e remova o channel.

## Conteúdo

- `src/lib/content.ts`: cursos, FAQ, links sociais e fotografias da galeria.
- `src/lib/contact.mjs`: WhatsApp e validação; nenhum envio é realizado automaticamente.
- `src/components`: blocos reutilizáveis e interações.
- `src/app`: homepage, catálogo, sete cursos, história, depoimentos, FAQ, contato, privacidade e mapa do site.
- `docs/conteudo-e-fontes.md`: inventário, fontes, divergências e pendências.
- `asset-sources.json`: origem das imagens.

## Publicar após autorização

1. Escolha hospedagem compatível com Next.js e Node. Este projeto usa o otimizador de imagens e não é um simples upload de HTML estático.
2. Configure `NEXT_PUBLIC_SITE_URL` com a URL definitiva e `SITE_INDEXABLE=true` apenas quando o responsável autorizar o lançamento. Sem isso, a prévia permanece noindex.
3. Execute instalação e build. Inicie com `next start` usando a porta e interface exigidas pela hospedagem, ou utilize integração nativa de Next.js.
4. Confira HTTPS, domínio, redirecionamentos, sitemap e contatos. Refaça testes de produção. Mantenha backup do site anterior antes de uma migração autorizada.

Não publique no domínio original sem autorização. Não existe integração com o WordPress original. A política de privacidade desta prévia precisa de revisão institucional para publicação definitiva.

## Formulário

Valida nome, curso, confirmação e tamanho da mensagem; campo honeypot reduz automação básica. Nenhum dado vai para um backend. O visitante recebe um link com a mensagem preparada e precisa enviá-la no WhatsApp. Para receber leads diretamente, será necessário configurar um serviço real; não há simulação de sucesso.
