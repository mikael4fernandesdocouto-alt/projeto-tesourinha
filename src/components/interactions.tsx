'use client';
import { useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Plus, Minus, ArrowLeft, ArrowRight, Play, MapPin, ArrowUpRight } from 'lucide-react';
import { faqs, gallery, mapUrl } from '@/lib/content';
import { asset } from '@/lib/asset';

export function FAQ(){
  const [active,setActive]=useState<number|null>(null);
  const reduced=useReducedMotion();
  return (
    <div className="faq-list">
      {faqs.map((f,i)=>(
        <div className={`faq-item ${active===i?'active':''}`} key={f.q}>
          <h3>
            <button
              aria-expanded={active===i}
              aria-controls={`faq-answer-${i}`}
              id={`faq-question-${i}`}
              onClick={()=>setActive(active===i?null:i)}
            >
              {f.q}
              {active===i?<Minus size={19}/>:<Plus size={19}/>}
            </button>
          </h3>
          <AnimatePresence initial={false}>
            {active===i&&(
              <motion.div
                id={`faq-answer-${i}`}
                role="region"
                aria-labelledby={`faq-question-${i}`}
                initial={{opacity:reduced?1:0}}
                animate={{opacity:1}}
                exit={{opacity:0}}
                transition={{duration:reduced?0:0.2}}
              >
                <p>{f.a}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

export function Gallery(){
  const [current,setCurrent]=useState(0);
  return (
    <div className="gallery" role="region" aria-roledescription="carrossel" aria-label="Registros oficiais das aulas">
      <div className="gallery-frame">
        <Image src={asset(`/images/${gallery[current].image}`)} alt={gallery[current].alt} fill sizes="(max-width: 700px) 90vw, 50vw"/>
      </div>
      <div className="gallery-caption">
        <span>Dentro do Tesourinha</span>
        <h3>{gallery[current].title}</h3>
      </div>
      <div className="gallery-controls">
        <span aria-live="polite">{current+1} de {gallery.length}</span>
        <div>
          <button className="icon-button" aria-label="Fotografia anterior" onClick={()=>setCurrent((current-1+gallery.length)%gallery.length)}>
            <ArrowLeft size={20}/>
          </button>
          <button className="icon-button" aria-label="Próxima fotografia" onClick={()=>setCurrent((current+1)%gallery.length)}>
            <ArrowRight size={20}/>
          </button>
        </div>
      </div>
    </div>
  );
}

const milestones=[
  {label:'1992',title:'O começo de uma transformação',text:'Ivan Stringhi cria o Projeto Tesourinha para ampliar o acesso à formação profissional na área da beleza.'},
  {label:'A formação',title:'Conhecimento que abre caminhos',text:'Cursos práticos e teóricos aproximam os participantes de uma profissão e estimulam o empreendedorismo.'},
  {label:'O propósito',title:'Uma história que segue com pessoas',text:'Parcerias e bolsas de estudo ajudam a sustentar a missão social do projeto. Consulte a equipe para conhecer as iniciativas atuais.'},
];

export function Timeline(){
  const [active,setActive]=useState(0);
  return (
    <div className="timeline">
      <div role="tablist" aria-label="História do projeto">
        {milestones.map((m,i)=>(
          <button
            role="tab"
            id={`history-tab-${i}`}
            aria-controls={`history-panel-${i}`}
            aria-selected={active===i}
            tabIndex={active===i?0:-1}
            key={m.label}
            onClick={()=>setActive(i)}
            onKeyDown={e=>{
              let n=i;
              if(e.key==='ArrowRight')n=(i+1)%3;
              else if(e.key==='ArrowLeft')n=(i+2)%3;
              else if(e.key==='Home')n=0;
              else if(e.key==='End')n=2;
              else return;
              e.preventDefault();
              setActive(n);
              document.getElementById(`history-tab-${n}`)?.focus();
            }}
          >
            {m.label}
          </button>
        ))}
      </div>
      <div role="tabpanel" id={`history-panel-${active}`} aria-labelledby={`history-tab-${active}`} tabIndex={0}>
        <h3>{milestones[active].title}</h3>
        <p>{milestones[active].text}</p>
      </div>
    </div>
  );
}

export function Video(){
  const [loaded,setLoaded]=useState(false);
  return (
    <div className="video-block">
      {loaded
        ? <iframe src="https://www.youtube-nocookie.com/embed/O_u_AF3Am0o?autoplay=1" title="Ivan Stringhi em entrevista no Programa do Jô" allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen/>
        : <button onClick={()=>setLoaded(true)} className="video-cover">
            <Image src={asset('/images/ivan-programa-do-jo.jpg')} alt="" fill sizes="(max-width: 700px) 100vw, 55vw"/>
            <span className="video-play" aria-hidden="true"><Play size={28} fill="currentColor"/></span>
            <span className="video-label">Assistir à entrevista de Ivan no Programa do Jô <ArrowUpRight size={18}/></span>
          </button>}
    </div>
  );
}

export function Map(){
  const [loaded,setLoaded]=useState(false);
  return (
    <div className="map-panel">
      {loaded
        ? <iframe title="Mapa da sede informada pelo Projeto Tesourinha" src="https://maps.google.com/maps?q=Av.%20Ibirapuera%203501%20Sao%20Paulo&z=16&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/>
        : <div className="map-placeholder">
            <MapPin size={34}/>
            <h3>Esperamos você em Moema.</h3>
            <p>Av. Ibirapuera, 3501 • São Paulo</p>
            <button className="button button-outline" onClick={()=>setLoaded(true)}>Carregar mapa do Google <ArrowUpRight size={17}/></button>
          </div>}
      <a href={mapUrl} target="_blank" rel="noopener noreferrer" className="map-link">Abrir rotas no Google Maps <ArrowUpRight size={16}/></a>
    </div>
  );
}
