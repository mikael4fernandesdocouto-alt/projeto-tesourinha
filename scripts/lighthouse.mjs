import { chromium } from '@playwright/test';
import lighthouse from 'lighthouse';
import fs from 'node:fs/promises';
import path from 'node:path';
const browser=await chromium.launch({channel:'msedge',headless:true,args:['--remote-debugging-port=9222']});
try {
 for(const device of ['mobile','desktop']){
  const result=await lighthouse('http://127.0.0.1:3000/',{port:9222,output:['html','json'],onlyCategories:['performance','accessibility','best-practices','seo'],...(device==='desktop'?{preset:'desktop'}:{}),logLevel:'error'});
  await fs.writeFile(path.resolve(`../lighthouse-${device}.html`),result.report[0]);
  await fs.writeFile(path.resolve(`../lighthouse-${device}.json`),result.report[1]);
  console.log(device,JSON.stringify(Object.fromEntries(Object.entries(result.lhr.categories).map(([k,v])=>[k,v.score*100]))));
  console.log('audits',JSON.stringify(Object.values(result.lhr.audits).filter(a=>a.score!==null&&a.score<0.9).map(a=>({id:a.id,score:a.score,title:a.title,value:a.displayValue}))));
 }
} finally {await browser.close();}
