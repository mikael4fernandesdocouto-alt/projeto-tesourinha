import test from 'node:test';
import assert from 'node:assert/strict';
import { whatsappUrl, validateInquiry } from '../src/lib/contact.mjs';
test('WhatsApp mantém acentos e caracteres especiais na mensagem de um curso',()=>{
 const u=new URL(whatsappUrl('Design de Sobrancelhas & Henna'));
 assert.equal(u.hostname,'wa.me'); assert.equal(u.pathname,'/5511999795965');
 assert.match(u.searchParams.get('text'),/Design de Sobrancelhas & Henna/);
});
test('não aceita campos vazios nem consentimento ausente',()=>{
 assert.deepEqual(Object.keys(validateInquiry({name:' ',course:'',message:'',consent:false,website:''})).sort(),['consent','course','name']);
});
test('bloqueia preenchimento do campo antispam e mensagem longa',()=>{
 assert.ok(validateInquiry({name:'Ana',course:'Cabeleireiro',message:'x'.repeat(1001),consent:true,website:'bot'}).form);
 assert.ok(validateInquiry({name:'Ana',course:'Cabeleireiro',message:'x'.repeat(1001),consent:true,website:''}).message);
});
test('aceita interesse válido sem exigir email ou telefone',()=>{
 assert.deepEqual(validateInquiry({name:'Ana Silva',course:'Cabeleireiro',message:'Quero saber sobre bolsas.',consent:true,website:''}),{});
});
