import type { NextConfig } from 'next';

// GITHUB_PAGES=true gera uma exportação estática para GitHub Pages (sem servidor Node).
const staticExport = process.env.GITHUB_PAGES === 'true';
const basePath = staticExport ? (process.env.GITHUB_PAGES_BASE_PATH ?? '') : '';

const config: NextConfig = {
  poweredByHeader: false,
  trailingSlash: staticExport,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  ...(basePath ? { basePath, assetPrefix: basePath } : {}),
  images: staticExport
    ? { unoptimized: true }
    : { formats: ['image/avif', 'image/webp'] },
};

if (staticExport) {
  config.output = 'export';
} else {
  config.redirects = async () => [
    { source:'/blog',destination:'/cursos',permanent:true },
    ...['cabeleireiro','barbearia-intensivo-completo','lash-design-tecnica-express','design-de-sobrancelha','depilacao','caobeleireiro-banho-e-tosa-canina'].map((s,i)=>({source:`/curso-de-${s}`,destination:`/cursos/${['cabeleireiro','barbearia','lash-design','sobrancelhas','depilacao','banho-e-tosa'][i]}`,permanent:true})),
    {source:'/curso-5-em-1-acelerador-de-carreira-especializacao-intensiva-para-profissionais',destination:'/cursos/especializacao-5-em-1',permanent:true},
    {source:'/category/curso-tesourinha',destination:'/cursos',permanent:true},
  ];
}

export default config;
