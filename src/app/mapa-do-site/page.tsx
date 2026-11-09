import Link from 'next/link';
import { courses } from '@/lib/content';
import { PageHeading } from '@/components/sections';
import { pageMetadata } from '@/lib/seo';
export const metadata=pageMetadata('Mapa do site','Encontre todas as páginas e cursos do Projeto Tesourinha.','/mapa-do-site');
export default function SitemapPage(){return <><PageHeading label="Mapa do site" title="Encontre seu caminho por aqui." description="Todas as páginas desta versão do Projeto Tesourinha."/><div className="container sitemap-links">{[['Início','/'],['Cursos','/cursos'],['Nossa história','/nossa-historia'],['Depoimentos','/depoimentos'],['Dúvidas frequentes','/duvidas-frequentes'],['Contato','/contato'],['Privacidade','/politica-de-privacidade'],...courses.map(c=>[c.name,`/cursos/${c.slug}`])].map(([label,href])=><Link key={href} href={href}>{label}</Link>)}</div></>}
