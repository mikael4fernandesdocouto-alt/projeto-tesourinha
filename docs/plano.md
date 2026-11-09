# Redesign Projeto Tesourinha

Objetivo: site completo para apresentação local, baseado no briefing de 18 seções recebido em 04/11/2026. Não publicar ou alterar produção.

Arquitetura: Next.js App Router, TypeScript, Tailwind 4, componentes de interação com Framer Motion, Lucide. Conteúdo central tipado e páginas estáticas. Inscrições pelo WhatsApp oficial, sem backend fictício. Formulário prepara mensagem e exige envio no WhatsApp. Nenhum dado armazenado localmente.

Direção: branco #FFFFFF, off-white #F7F7F5, grafite #242424, cinza #626262, vermelho #C92335 e rosa claro #FCEDEF. Manrope local; títulos amplos, fotos oficiais, assimetria moderada na abertura e cards suaves. Evitar gradientes e decorações genéricas.

## Execução
- [x] Consolidar fontes e baixar imagens oficiais; registrar divergências.
- [x] Testes de links personalizados e validação do formulário, observando falha antes da implementação.
- [x] Implementar shell acessível, homepage, catálogo, sete cursos, história, FAQ, depoimentos, contato e privacidade.
- [x] Implementar movimento reduzido, filtro, accordion, galeria, menu por teclado e formulário transparente.
- [x] Build, lint, tipos, testes de navegador, acessibilidade automatizada, responsividade e Lighthouse.
- [x] Revisão independente, correções, README, pendências e pacote de entrega.

## Critérios de revisão
1. Nenhum depoimento sem autorização: usar ligação para a fonte e galeria oficial; o carrossel será de fotografias, não citações.
2. Não transformar horários históricos em promessa de turma disponível; explicitar confirmação.
3. Teclado e fechamento do menu; 320 px sem overflow; movimento reduzido.
4. Formulário inválido ou preenchido por bot não pode abrir WhatsApp; envio nunca é afirmado pelo site.
5. SEO deve usar URL configurável e bloquear indexação de prévia por padrão.

## Decisões de execução
Briefing completo autoriza avanço para implementação, dispensando rodada adicional de aprovação do plano. Pasta nova sem checkout próprio: não criar worktree nem alterar repositório pai. Scripts de ledger dependentes de Git serão substituídos por registro local. Dados históricos terão nota de fonte; ausência de autorização para depoimentos não impede página funcional com links oficiais. Mapa e vídeo carregam apenas após ação do visitante. Certificação vaga do original não será ampliada para reconhecimento oficial.
