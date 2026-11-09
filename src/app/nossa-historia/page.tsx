import { PageHeading, History, InterviewSpotlight, About, Enrollment } from '@/components/sections';
import { pageMetadata } from '@/lib/seo';
export const metadata=pageMetadata('Nossa história','Conheça a trajetória de Ivan Stringhi e o nascimento do Projeto Tesourinha em 1992.','/nossa-historia');
export default function HistoryPage(){return <><PageHeading label="Nossa história" title="Desde 1992, compartilhar uma profissão é abrir caminhos." description="A história do Projeto Tesourinha começa com Ivan Stringhi e sua vontade de transformar a experiência na beleza em oportunidade."/><History full/><InterviewSpotlight/><About full/><Enrollment/></>}
