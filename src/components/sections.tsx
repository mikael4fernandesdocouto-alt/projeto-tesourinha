import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, ArrowRight, HeartHandshake, Scissors, MapPin, MessageCircle, ExternalLink } from 'lucide-react';
import { Reveal } from './motion';
import { FAQ, Gallery, Timeline, Video, Map } from './interactions';
import { whatsappUrl } from '@/lib/contact.mjs';
import { mapUrl } from '@/lib/content';
import { asset } from '@/lib/asset';

export function Hero(){
  return (
    <section className="hero" aria-labelledby="hero-title">
      <Image
        className="hero-photo"
        src={asset('/images/curso-tesourinha-1.webp')}
        alt="Profissional cortando cabelo durante uma atividade de beleza"
        fill
        priority
        sizes="(max-width: 700px) 1px, 100vw"
      />
      <Image
        className="hero-photo-mobile"
        src={asset('/images/imagem-cabelo-ivan-576x1024.webp')}
        alt="Aula prática de cabelo com estudantes do Projeto Tesourinha"
        fill
        sizes="(max-width: 700px) 100vw, 1px"
      />
      <div className="hero-shade" aria-hidden="true"/>
      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="hero-eyebrow">Projeto Tesourinha · São Paulo</p>
          <h1 id="hero-title">Transformamos talentos em <em>profissionais.</em></h1>
          <p className="hero-intro">Formação em cabelo, barbearia, estética e banho e tosa para quem quer aprender uma profissão.</p>
          <div className="hero-actions">
            <Link className="button" href="/cursos">Conhecer os cursos <ArrowUpRight size={18}/></Link>
            <a className="hero-link" href={whatsappUrl()}>Falar no WhatsApp</a>
          </div>
        </div>
        <p className="hero-bottom">Desde 1992, criando caminhos pela formação profissional.</p>
      </div>
    </section>
  );
}

export function About({full=false}:{full?:boolean}){
  return (
    <section id="sobre" className="section container split about">
      <Reveal className="about-visual">
        <div className="about-photo">
          <Image src={asset('/images/imagem-escova-576x1024.webp')} alt="Aula prática de escovação no Projeto Tesourinha" fill sizes="(max-width: 700px) 90vw, 42vw"/>
        </div>
        <div className="about-note">
          <HeartHandshake size={27}/>
          <p>Uma profissão pode<br/><strong>mudar uma história.</strong></p>
        </div>
      </Reveal>
      <Reveal className="section-copy">
        <h2>Mais do que ensinar uma profissão.<br/>Transformar vidas.</h2>
        <p>O Tesourinha nasceu para aproximar pessoas de uma profissão. A formação na área da beleza une conhecimento técnico, prática e oportunidades de trabalho.</p>
        <p>Jovens que estão começando e profissionais que querem se aperfeiçoar encontram cursos de beleza, cuidados pessoais e banho e tosa.</p>
        <div className="values-inline">
          <div>
            <Scissors size={22}/>
            <h3>Aprender fazendo</h3>
            <p>Formação prática e teórica para o dia a dia da profissão.</p>
          </div>
          <div>
            <HeartHandshake size={22}/>
            <h3>Crescer juntos</h3>
            <p>Inclusão e qualificação como parte da missão social.</p>
          </div>
        </div>
        {full
          ? <p>A missão divulgada pela instituição é promover a qualificação profissional de jovens e sua inserção no mercado de trabalho. Ética, conhecimento e respeito ao cliente orientam essa atuação.</p>
          : <Link href="/nossa-historia" className="text-link">Conheça nossa história <ArrowRight size={18}/></Link>}
      </Reveal>
    </section>
  );
}

export function History({full=false}:{full?:boolean}){
  return (
    <section id="historia" className="history-section">
      <div className="container split">
        <Reveal className="section-copy">
          <h2>Um sonho de Ivan.<br/>Um caminho para tanta gente.</h2>
          <p>Em 1992, o cabeleireiro Ivan Stringhi criou o Projeto Tesourinha. Sua experiência na beleza se tornou uma forma de enfrentar a falta de oportunidades e valorizar pessoas.</p>
          <p>O projeto cresceu com a ideia de compartilhar uma profissão e abrir espaço para novas trajetórias.</p>
          <Timeline/>
          {!full && <Link href="/nossa-historia" className="text-link">Explore nossa história <ArrowRight size={18}/></Link>}
        </Reveal>
        <Reveal className="founder-wrap">
          <div className="founder-photo">
            <Image src={asset('/images/WhatsApp-Image-2024-09-26-at-12.12.03.jpeg')} alt="Ivan Stringhi, fundador do Projeto Tesourinha" fill sizes="(max-width:700px) 90vw, 40vw"/>
          </div>
          <div className="founder-caption">
            <div>
              <h3>Ivan Stringhi</h3>
              <p>Fundador do Projeto Tesourinha</p>
            </div>
            <Scissors size={30}/>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function InterviewSpotlight(){
  return (
    <section className="interview-section" aria-labelledby="interview-title">
      <div className="container interview-grid">
        <div className="interview-visual"><Video/></div>
        <div className="interview-text">
          <span className="interview-label">Arquivo · Programa do Jô</span>
          <h2 id="interview-title">A história do Tesourinha, contada por Ivan.</h2>
          <p>Ivan Stringhi participou do Programa do Jô para falar sobre a trajetória do projeto. Assista à entrevista no canal de Ivan.</p>
          <p className="interview-source">Vídeo publicado no canal Ivan Stringhi Tesourinha, no YouTube.</p>
        </div>
      </div>
    </section>
  );
}

export function Stories(){
  return (
    <section id="depoimentos" className="section container split stories">
      <Reveal className="section-copy">
        <h2>O aprendizado acontece.<br/>As histórias continuam.</h2>
        <p>Nas aulas, cada pessoa traz sua trajetória. Conheça registros publicados pelo projeto e acompanhe o que os participantes compartilham nos canais oficiais.</p>
        <a className="button button-outline" href="https://curso-tesourinha.com.br/depoimentos/" target="_blank" rel="noopener noreferrer">Ler depoimentos no site oficial <ExternalLink size={16}/></a>
        <a href={mapUrl} target="_blank" rel="noopener noreferrer" className="text-link">Encontrar avaliações no Google <ArrowUpRight size={17}/></a>
        <p className="source-note">Fotografias do acervo publicado no site oficial. Depoimentos e avaliações podem ser consultados diretamente nas fontes.</p>
      </Reveal>
      <Reveal>
        <Gallery/>
      </Reveal>
    </section>
  );
}

export function Enrollment(){
  const steps = [
    {title:'Encontre seu curso',text:'Explore as áreas e escolha o que você quer aprender.'},
    {title:'Fale com a equipe',text:'Entre em contato pelo WhatsApp ou visite a sede.'},
    {title:'Receba as orientações',text:'Confirme vagas, matrícula, calendário e seleção para bolsas.'},
    {title:'Prepare-se para começar',text:'Após a confirmação da matrícula, siga as orientações da equipe.'},
  ];
  return (
    <section id="inscricao" className="enrollment-section">
      <div className="container">
        <div className="section-heading">
          <h2>Comece pela vontade.<br/>A gente conversa sobre o caminho.</h2>
          <p>Escolha uma área e fale com a equipe para conhecer as condições de participação.</p>
        </div>
        <div className="steps">
          {steps.map((s,i)=>(
            <Reveal delay={i*0.06} key={s.title}>
              <div className="step">
                <span>{String(i+1).padStart(2,'0')}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="scholarship">
          <HeartHandshake size={26}/>
          <p><strong>Quer saber sobre bolsas de estudo?</strong><br/>O processo inclui agendamento e entrevista. Cada caso é analisado individualmente.</p>
          <a className="button" href={whatsappUrl('bolsas de estudo')}>Conversar com a equipe <ArrowUpRight size={18}/></a>
        </div>
      </div>
    </section>
  );
}

export function FAQSection(){
  return (
    <section id="duvidas" className="section container faq-section">
      <div className="section-copy">
        <h2>Uma dúvida pode<br/>ser o primeiro passo.</h2>
        <p>Veja as orientações do projeto. Se precisar, a equipe continua a conversa com você.</p>
        <a className="text-link" href={whatsappUrl()}><MessageCircle size={18}/> Tirar dúvidas no WhatsApp</a>
      </div>
      <FAQ/>
    </section>
  );
}

export function ContactSection(){
  return (
    <section id="contato" className="section container split contact-section">
      <div className="section-copy">
        <h2>Vamos conversar<br/>sobre o seu futuro?</h2>
        <p>Fale com o Projeto Tesourinha para conhecer os cursos e receber orientações sobre a inscrição.</p>
        <div className="contact-detail">
          <MapPin/>
          <div>
            <h3>Visite o projeto</h3>
            <p>Av. Ibirapuera, 3501, Moema<br/>Embaixo do viaduto • São Paulo, SP</p>
          </div>
        </div>
        <div className="button-group">
          <a className="button" href={whatsappUrl()}>Falar no WhatsApp <ArrowUpRight size={18}/></a>
          <Link className="text-link" href="/contato">Todos os contatos <ArrowRight size={18}/></Link>
        </div>
      </div>
      <Map/>
    </section>
  );
}

export function PageHeading({label,title,description}:{label:string;title:string;description:string}){
  return (
    <div className="page-heading container">
      <div className="breadcrumbs">
        <Link href="/">Início</Link>
        <span>/</span>
        <span>{label}</span>
      </div>
      <Reveal>
        <h1>{title}</h1>
        <p>{description}</p>
      </Reveal>
    </div>
  );
}
