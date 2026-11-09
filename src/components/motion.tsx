'use client';
import { motion, useReducedMotion, useScroll, useTransform, useInView, animate } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export function Reveal({children,className='',delay=0}:{children:React.ReactNode;className?:string;delay?:number}) {
  const reduced=useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={false}
      whileInView={reduced?{}:{y:[10,0]}}
      viewport={{once:true,amount:0.12}}
      transition={{duration:0.45,delay,ease:[0.22,1,0.36,1]}}
    >
      {children}
    </motion.div>
  );
}

export function Parallax({children}:{children:React.ReactNode}) {
  const ref=useRef<HTMLDivElement>(null);
  const reduced=useReducedMotion();
  const {scrollYProgress}=useScroll({target:ref,offset:['start end','end start']});
  const y=useTransform(scrollYProgress,[0,1],[10,-10]);
  return <motion.div ref={ref} className="parallax" style={{y:reduced?0:y}}>{children}</motion.div>;
}

function Counter({value,suffix=''}:{value:number;suffix?:string}) {
  const ref=useRef<HTMLSpanElement>(null);
  const inView=useInView(ref,{once:true});
  const reduced=useReducedMotion();
  const [display,setDisplay]=useState(value);
  useEffect(()=>{
    if(!inView||reduced)return;
    const control=animate(0,value,{duration:1.4,ease:'easeOut',onUpdate:v=>setDisplay(Math.round(v))});
    return ()=>control.stop();
  },[inView,reduced,value]);
  return (
    <>
      <span className="sr-only">{value.toLocaleString('pt-BR')}{suffix}</span>
      <span ref={ref} aria-hidden="true">{display.toLocaleString('pt-BR')}{suffix}</span>
    </>
  );
}

export function Impact(){
  return (
    <section className="impact-band" aria-label="Impacto divulgado pelo Projeto Tesourinha">
      <div className="container">
        <div className="impact-head">
          <h2>Uma história construída com pessoas.</h2>
          <p>Indicadores divulgados pelo projeto desde 1992.</p>
        </div>
        <div className="impact-grid">
          <div>
            <strong>+<Counter value={90000}/></strong>
            <p>profissionais formados</p>
          </div>
          <div>
            <strong><Counter value={33}/></strong>
            <p>anos de história*</p>
          </div>
          <div>
            <strong>~<Counter value={3000}/></strong>
            <p>formados por ano*</p>
          </div>
        </div>
        <p className="source-note">*Indicadores históricos divulgados no site oficial. Atualização e período de referência sujeitos à confirmação pela instituição.</p>
      </div>
    </section>
  );
}
