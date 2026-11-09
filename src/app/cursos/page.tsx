import { PageHeading, Enrollment } from '@/components/sections';
import { Catalog } from '@/components/catalog';
import { pageMetadata } from '@/lib/seo';
export const metadata=pageMetadata('Cursos profissionalizantes','Explore os cursos de cabeleireiro, barbearia, estética, banho e tosa e especialização do Projeto Tesourinha.','/cursos');
export default function Courses(){return <><PageHeading label="Nossos cursos" title="O seu talento tem muitos caminhos." description="Conheça as formações e encontre a área em que você quer dar seu próximo passo."/><section className="container catalog-page" aria-label="Catálogo de cursos"><Catalog/><p className="source-note">Informações preservadas do site oficial. Consulte a equipe para confirmar as próximas turmas e condições.</p></section><Enrollment/></>}
