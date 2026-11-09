import { PageHeading, FAQSection, ContactSection } from '@/components/sections';
import { pageMetadata } from '@/lib/seo';
export const metadata=pageMetadata('Dúvidas frequentes','Orientações sobre inscrição, aulas presenciais, idade, bolsas de estudo e seleção do Projeto Tesourinha.','/duvidas-frequentes');
export default function FAQPage(){return <><PageHeading label="Dúvidas frequentes" title="Informação para dar o primeiro passo." description="Orientações baseadas no FAQ oficial. A equipe pode confirmar as condições do curso escolhido."/><FAQSection/><ContactSection/></>}
