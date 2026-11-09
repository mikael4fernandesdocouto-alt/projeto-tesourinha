import type { Metadata } from 'next';
import '@fontsource-variable/manrope';
import './globals.css';
import { Header, Footer } from '@/components/shell';
import { indexable, siteUrl } from '@/lib/seo';
import { asset } from '@/lib/asset';
export const metadata:Metadata={metadataBase:new URL(siteUrl),title:{default:'Projeto Tesourinha | Formação que transforma vidas',template:'%s | Projeto Tesourinha'},description:'Conheça o Projeto Tesourinha, seus cursos de beleza e as orientações para inscrição e bolsas em São Paulo.',robots:{index:indexable,follow:indexable},icons:{icon:asset('/images/cropped-LOGO-Tesourinha-NOVO-3.png')}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="pt-BR"><body><Header/><main id="main" tabIndex={-1}>{children}</main><Footer/></body></html>}
