import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
test('menu mobile mantém foco, fecha por Escape e restaura rolagem ao ampliar',async({page})=>{
 await page.setViewportSize({width:390,height:844});await page.goto('/');
 const toggle=page.getByRole('button',{name:'Abrir menu'});await toggle.click();
 await expect(page.getByRole('navigation',{name:'Navegação principal'})).toBeVisible();
 const last=page.getByRole('navigation',{name:'Navegação principal'}).getByRole('link',{name:'Inscreva-se'});
 await last.focus();await page.keyboard.press('Tab');await expect(page.getByRole('button',{name:'Fechar menu'})).toBeFocused();
 await page.keyboard.press('Shift+Tab');await expect(last).toBeFocused();
 await page.keyboard.press('Escape');await expect(toggle).toBeFocused();
 await toggle.click();await page.setViewportSize({width:1280,height:900});await expect(page.locator('body')).not.toHaveCSS('overflow','hidden');
});
test('hero ocupa a tela e cabeçalho troca contraste ao sair e voltar',async({page})=>{
  await page.setViewportSize({width:1440,height:900});
  await page.goto('/');
  const header=page.locator('.site-header');
  const hero=page.locator('.hero');
  await expect(header).toHaveClass(/hero-active/);
  expect(Math.abs((await hero.boundingBox())!.height-900)).toBeLessThan(2);
  await expect(page.locator('.hero-photo')).toHaveCSS('animation-name','hero-camera');
  await expect(hero.locator('h1')).toHaveCSS('animation-name','hero-enter');
  await page.evaluate(()=>window.scrollTo(0,document.querySelector('.hero')!.getBoundingClientRect().height));
  await expect(header).not.toHaveClass(/hero-active/);
  await expect(header).toHaveCSS('background-color','rgb(255, 255, 255)');
  await page.evaluate(()=>window.scrollTo(0,0));
  await expect(header).toHaveClass(/hero-active/);
  await page.setViewportSize({width:390,height:844});
  expect(Math.abs((await hero.boundingBox())!.height-844)).toBeLessThan(2);
  await page.getByRole('button',{name:'Abrir menu'}).click();
  await expect(header).not.toHaveClass(/hero-active/);
  await expect(header).toHaveCSS('background-color','rgb(255, 255, 255)');
});
test('filtros e busca retornam cursos e recuperam lista vazia',async({page})=>{
 await page.goto('/cursos');await expect(page.locator('.course-card')).toHaveCount(7);
 await page.getByRole('button',{name:'Cuidados pet',exact:true}).click();await expect(page.locator('.course-card')).toHaveCount(1);
 await expect(page.locator('.course-card h3')).toHaveText('Banho e tosa canina');
 await page.getByRole('button',{name:'Todos',exact:true}).click();await page.getByRole('textbox',{name:'Buscar curso'}).fill('inexistente');await expect(page.getByText('Nenhum curso encontrado')).toBeVisible();
 await page.getByRole('button',{name:'Ver todos os cursos'}).click();await expect(page.locator('.course-card')).toHaveCount(7);
});
test('FAQ e carrossel respondem ao visitante',async({page})=>{
 await page.goto('/');const q=page.getByRole('button',{name:'Como funcionam as bolsas?'});await q.click();await expect(q).toHaveAttribute('aria-expanded','true');await expect(page.getByRole('region',{name:'Como funcionam as bolsas?'})).toBeVisible();
 await q.click();await expect(q).toHaveAttribute('aria-expanded','false');
 await page.getByRole('button',{name:'Próxima fotografia'}).click();await expect(page.getByText('2 de 4',{exact:true})).toBeVisible();
});
test('formulário valida e prepara link sem enviar dados',async({page})=>{
 await page.goto('/contato');await page.getByRole('button',{name:'Preparar mensagem'}).click();await expect(page.getByText('Informe seu nome, entre 2 e 100 caracteres.')).toBeVisible();
 await page.getByLabel('Seu nome').fill('Ana Silva');await page.getByLabel('Curso de interesse').selectOption('Cabeleireiro');await page.getByLabel('Sua dúvida').fill('Gostaria de informações sobre bolsas.');await page.getByRole('checkbox').check();
 await page.getByRole('button',{name:'Preparar mensagem'}).click();await expect(page.getByText('Nada foi enviado.',{exact:false})).toBeVisible();
 const href=await page.getByRole('link',{name:'Abrir WhatsApp com minha mensagem'}).getAttribute('href');const url=new URL(href!);expect(url.hostname).toBe('wa.me');expect(url.searchParams.get('text')).toContain('Ana Silva');expect(url.searchParams.get('text')).toContain('Cabeleireiro');
 await page.getByLabel('Seu nome').fill('Outro nome');await expect(page.getByRole('link',{name:'Abrir WhatsApp com minha mensagem'})).toHaveCount(0);
});
test('páginas internas, canonical, imagens e links locais',async({page,request})=>{
 test.setTimeout(120000);
 const routes=['/','/cursos','/nossa-historia','/depoimentos','/duvidas-frequentes','/contato','/politica-de-privacidade','/mapa-do-site',...['cabeleireiro','barbearia','lash-design','sobrancelhas','depilacao','banho-e-tosa','especializacao-5-em-1'].map(s=>'/cursos/'+s)];
 for(const path of routes){const response=await page.goto(path);expect(response?.status(),path).toBe(200);await expect(page.locator('h1')).toHaveCount(1);expect(await page.locator('link[rel=canonical]').getAttribute('href')).toContain(path);}
 expect((await request.get('/sitemap.xml')).status()).toBe(200);expect(await (await request.get('/robots.txt')).text()).toContain('Disallow: /');expect((await request.get('/nao-existe')).status()).toBe(404);
  await page.goto('/');await page.evaluate(async()=>{const images=Array.from(document.images);await Promise.all(images.map(im=>{im.loading='eager';return im.decode().catch(()=>{});}));});expect(await page.locator('img').evaluateAll(imgs=>imgs.filter(i=>getComputedStyle(i).display!=='none'&&!(i as HTMLImageElement).naturalWidth).map(i=>i.getAttribute('src')))).toEqual([]);
  await page.setViewportSize({width:390,height:844});await page.goto('/');await expect(page.locator('.hero-photo-mobile')).toBeVisible();expect(await page.locator('.hero-photo-mobile').evaluate((img:HTMLImageElement)=>img.decode().then(()=>img.naturalWidth))).toBeGreaterThan(0);
 const hrefs=await page.locator('a[href^="/"]').evaluateAll(as=>[...new Set(as.map(a=>a.getAttribute('href')!.split('#')[0]||'/'))]);for(const href of hrefs)expect((await request.get(href)).status(),href).toBe(200);
});
test('sem overflow em 320, 390, 768, 1024 e 1440 pixels e movimento reduzido',async({page})=>{
 test.setTimeout(120000);
 await page.emulateMedia({reducedMotion:'reduce'});
 for(const width of [320,390,768,1024,1440]){await page.setViewportSize({width,height:900});for(const path of ['/','/contato','/cursos/lash-design']){await page.goto(path);expect(await page.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth),`${path} em ${width}`).toBe(true);}}
  await expect(page.locator('html')).toHaveCSS('scroll-behavior','auto');
  await page.goto('/');
  await expect(page.locator('.hero-photo-mobile')).toHaveCSS('animation-name','none');
});
test('acessibilidade automatizada das páginas principais',async({page})=>{
 for(const path of ['/','/cursos','/contato','/cursos/cabeleireiro']){await page.goto(path);const result=await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21aa']).analyze();expect(result.violations.map(v=>({id:v.id,nodes:v.nodes.map(n=>n.target)})),path).toEqual([]);}
});
test('linha do tempo por teclado e mídia carregada somente após clique',async({page})=>{
 await page.goto('/nossa-historia');await expect(page.locator('iframe')).toHaveCount(0);
 const first=page.getByRole('tab',{name:'1992'});await first.focus();await page.keyboard.press('ArrowRight');await expect(page.getByRole('tab',{name:'A formação'})).toHaveAttribute('aria-selected','true');await expect(page.getByRole('tabpanel')).toContainText('Conhecimento que abre caminhos');
  await page.getByRole('button',{name:/Assistir à entrevista de Ivan no Programa do Jô/}).click();await expect(page.locator('iframe')).toHaveAttribute('src',/youtube-nocookie\.com\/embed\/O_u_AF3Am0o/);
 await page.goto('/contato');await expect(page.locator('iframe')).toHaveCount(0);await page.getByRole('button',{name:'Carregar mapa do Google'}).click();await expect(page.locator('iframe')).toHaveAttribute('src',/maps\.google\.com/);
});
test('entrevista em seção própria carrega somente após clique',async({page})=>{
  await page.goto('/');
  await expect(page.locator('iframe')).toHaveCount(0);
  await expect(page.locator('.hero .video-block')).toHaveCount(0);
  const trigger=page.getByRole('button',{name:/Assistir à entrevista de Ivan no Programa do Jô/});
  await expect(page.getByRole('heading',{name:'A história do Tesourinha, contada por Ivan.'})).toBeVisible();
  await trigger.click();
  await expect(page.locator('.interview-section iframe')).toHaveAttribute('src',/youtube-nocookie\.com\/embed\/O_u_AF3Am0o/);
});
