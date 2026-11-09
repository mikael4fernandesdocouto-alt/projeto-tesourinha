'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Clock3, MessageCircle, Search } from 'lucide-react';
import { courses, type Course } from '@/lib/content';
import { whatsappUrl } from '@/lib/contact.mjs';
import { asset } from '@/lib/asset';
import { Reveal } from './motion';
export function CourseCard({course,index=0}:{course:Course;index?:number}){return <Reveal delay={Math.min(index,3)*0.06}><article className="course-card"><Link className="course-image" href={`/cursos/${course.slug}`} tabIndex={-1} aria-hidden="true"><Image src={asset(`/images/${course.image}`)} alt="" fill sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 33vw"/><span className="course-category">{course.category}</span><span className="image-arrow"><ArrowUpRight size={21}/></span></Link><div className="course-body"><span className="course-duration"><Clock3 size={14}/>{course.duration}</span><h3><Link href={`/cursos/${course.slug}`}>{course.name}</Link></h3><p>{course.description}</p><div className="course-actions"><Link href={`/cursos/${course.slug}`} aria-label={`Saiba mais sobre ${course.name}`}>Saiba mais <ArrowUpRight size={16}/></Link><a href={whatsappUrl(course.name)} aria-label={`Tenho interesse em ${course.name}`}><MessageCircle size={17}/> Tenho interesse</a></div></div></article></Reveal>}
export function Catalog({compact=false}:{compact?:boolean}){
 const [category,setCategory]=useState('Todos');const [search,setSearch]=useState('');const cats=['Todos',...new Set(courses.map(c=>c.category))];
 const normalize=(s:string)=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();const filtered=courses.filter(c=>(category==='Todos'||c.category===category)&&normalize(c.name+' '+c.description).includes(normalize(search)));
 return <><div className="catalog-tools"><div className="filters" aria-label="Filtrar cursos por categoria">{cats.map(c=><button key={c} aria-pressed={category===c} onClick={()=>setCategory(c)}>{c}</button>)}</div>{!compact&&<label className="search-field"><Search size={18}/><span className="sr-only">Buscar curso</span><input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Qual curso você procura?"/></label>}</div><p className="sr-only" role="status">{filtered.length} cursos encontrados</p><div className="course-grid">{filtered.map((c,i)=><CourseCard key={c.slug} course={c} index={i}/>)}</div>{!filtered.length&&<div className="empty-state"><h3>Nenhum curso encontrado</h3><p>Tente outro nome ou veja todos os cursos.</p><button className="button" onClick={()=>{setCategory('Todos');setSearch('');}}>Ver todos os cursos</button></div>}</>;
}
