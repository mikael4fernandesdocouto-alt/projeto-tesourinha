import { PageHeading, Stories, Enrollment } from '@/components/sections';
import { pageMetadata } from '@/lib/seo';
export const metadata=pageMetadata('Depoimentos e vivências','Registros das aulas e acesso aos depoimentos publicados nos canais oficiais do Projeto Tesourinha.','/depoimentos');
export default function StoriesPage(){return <><PageHeading label="Depoimentos e vivências" title="Cada pessoa, uma história para seguir." description="Conheça o cotidiano das aulas e encontre avaliações nos canais oficiais."/><Stories/><Enrollment/></>}
