import { PageHeading } from '@/components/sections';
import { InquiryForm } from '@/components/inquiry-form';
import { Map } from '@/components/interactions';
import { pageMetadata } from '@/lib/seo';
import { legal } from '@/lib/content';
import { whatsappUrl } from '@/lib/contact.mjs';
import { MessageCircle, Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';
export const metadata=pageMetadata('Contato e inscrição','Fale com a equipe do Projeto Tesourinha pelo WhatsApp, email ou na sede em Moema, São Paulo.','/contato');
export default function Contact(){return <><PageHeading label="Contato" title="Seu próximo caminho começa com uma conversa." description="Pergunte sobre os cursos, as próximas turmas e o processo de seleção para bolsas."/><section className="container contact-page"><div><div className="contact-detail"><MessageCircle/><div><h2>WhatsApp</h2><a href={whatsappUrl()}>(11) 99979-5965 <ArrowUpRight size={16}/></a></div></div><div className="contact-detail"><Phone/><div><h2>Outros telefones divulgados</h2><a href="tel:+551150962495">(11) 5096-2495</a><a href="tel:+5511944628519">(11) 94462-8519</a></div></div><div className="contact-detail"><Mail/><div><h2>E-mail</h2><a href="mailto:contato@curso-tesourinha.com.br">contato@curso-tesourinha.com.br</a></div></div><div className="contact-detail"><MapPin/><div><h2>Visite a sede</h2><p>Av. Ibirapuera, 3501, Moema<br/>Embaixo do viaduto • São Paulo, SP</p><p className="source-note">Endereço divulgado no site oficial. Confirme o acesso e o horário de atendimento antes da visita.</p><p className="source-note">Responsável: {legal.name} · CNPJ {legal.cnpj}.</p></div></div><Map/></div><InquiryForm/></section></>}
