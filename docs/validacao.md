# Validação da entrega

Executada em 04/11/2026, Windows, Node 24.22.1, Next 16.4.5, Edge headless. Preview em http://127.0.0.1:3000. Nenhuma publicação externa.

## Resultados

- Build de produção com Webpack: aprovado, páginas estáticas geradas.
- TypeScript: sem erros após correção de tipagem da validação.
- ESLint: zero erros e zero avisos na execução final.
- Testes unitários: 4/4 aprovados (WhatsApp com acentos/caracteres especiais, campos obrigatórios, consentimento, honeypot e limite de mensagem).
- Playwright: 8/8 aprovados em 22 segundos na versão compilada.
- Axe: nenhuma violação WCAG A/AA automatizada em home, catálogo, contato e Cabeleireiro. Isso não substitui auditoria humana completa.
- Responsividade: home, contato e Lash Design sem overflow horizontal em 320, 390, 768, 1024 e 1440 px.
- Navegação: quinze páginas de conteúdo verificadas, uma h1 por página, canonicals, links locais, imagens carregadas, XML, robots e 404.
- Interações: filtro, busca vazia/recuperação, FAQ, carrossel, menu com foco/escape, redimensionamento desktop, formulário, linha do tempo por teclado e carregamento de mídia sob demanda.
- Console na captura da versão final: nenhum erro JavaScript de página.
- Capturas desktop e mobile inspecionadas visualmente. Imagens de prévia na pasta outputs.

## Lighthouse

Homepage da versão compilada, execução local com Lighthouse 13.6.0 no Edge. Perfis mobile e desktop; resultados de laboratório, não dados reais de campo. Houve outras verificações de navegador no mesmo período, portanto não se trata de benchmark isolado.

| Categoria | Mobile | Desktop |
|---|---:|---:|
| Performance | 97 | 98 |
| Accessibility | 100 | 100 |
| Best Practices | 100 | 100 |
| SEO | 69 | 69 |

Mobile: FCP 0,8s, LCP 0,8s, TBT 190ms, CLS 0,001.

O único item pontuado de SEO reprovado é `is-crawlable`: a prévia usa noindex e robots Disallow de propósito. Título, descrição, status HTTP, texto/âncoras dos links, robots válido, alt, hreflang e canonical passaram. A meta de SEO 95+ não foi atingida nesta configuração, e não se afirma resultado futuro após liberar indexação. Relatórios HTML/JSON completos estão em outputs/lighthouse-mobile e outputs/lighthouse-desktop.

## Problemas encontrados e resolvidos

Revisão independente identificou foco escapando do menu, bloqueio de rolagem ao ampliar viewport e detalhes incompletos de Depilação. Foco foi reproduzido em teste falhando e corrigido; suite final cobre foco e resize. Depilação agora preserva tópicos e materiais publicados.

Turbopack falhou ao iniciar seu processo de transformação CSS neste Windows, inclusive fora do ambiente restrito. Webpack compilou corretamente e foi configurado nos scripts. Primeiro teste de navegação e viewport excedeu 30 segundos no servidor de desenvolvimento; a versão final compilada passou integralmente. Nenhum problema de teste foi ocultado.

## Decisões e limites restantes

- Inscrição e contato abrem WhatsApp; não há serviço de envio ou matrícula automática. Para envio direto, configurar backend real.
- Depoimentos pessoais não foram republicados sem autorização. Há galeria e links para as fontes.
- Endereço, telefones, indicadores históricos, direitos de imagens e divergências de horários precisam de validação institucional antes de publicação.
- Links sociais foram preservados do site oficial; o controle das contas não foi auditado. Os testes de vídeo/mapa verificam carregamento sob ação e destinos, não garantem disponibilidade futura dos serviços externos.
- Sem alterações no WordPress, DNS, hospedagem ou domínio original.
