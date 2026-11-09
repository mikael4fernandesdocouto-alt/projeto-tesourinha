import type { MetadataRoute } from 'next';
import { courses } from '@/lib/content';
import { siteUrl } from '@/lib/seo';
export const dynamic='force-static';
export default function sitemap():MetadataRoute.Sitemap{return ['','/cursos','/nossa-historia','/depoimentos','/duvidas-frequentes','/contato','/politica-de-privacidade','/mapa-do-site',...courses.map(c=>`/cursos/${c.slug}`)].map(p=>({url:siteUrl+p,changeFrequency:'monthly',priority:p===''?1:p.startsWith('/cursos')?0.8:0.5}));}
