import type { Metadata } from 'next';
import { asset } from '@/lib/asset';
export const siteUrl=(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000').replace(/\/$/,'');
export const indexable=process.env.SITE_INDEXABLE==='true';
export function pageMetadata(title:string,description:string,path:string):Metadata {
 return {title:{absolute:`${title} | Projeto Tesourinha`},description,alternates:{canonical:siteUrl+path},openGraph:{title:`${title} | Projeto Tesourinha`,description,url:siteUrl+path,locale:'pt_BR',type:'website',images:[{url:asset('/images/img_turma_1-1024x389.webp'),width:1024,height:389,alt:'Projeto Tesourinha'}]},twitter:{card:'summary_large_image',title,description,images:[asset('/images/img_turma_1-1024x389.webp')]}};
}
