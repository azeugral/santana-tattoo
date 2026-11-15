// HERO: quadros que pousam e trocam de peça com tinta, em onda (molde Veríssimo)
(function(){
  const SEQ=[
    ['DKxQShKtDLS','DTyGClnDf9P','DRFJSr8jWR-','DAqGn9zOMy3','DNYaTl4ob45','DBdn7zluD7J'],
    ['DQFDa8pDRK-','DBQ5pqGthH7','DHGtknMNafC','DAveSS9uzvw'],
    ['Dcty3Z2uPit','DAx-fazu8_E','CvVD3O1Nr-K','DJKO1BuN-jE'],
    ['DQ4xvXZjaRN','DBTe1QvOO7L','DBL17c0tHrc','DA_fN1YONoB'],
    ['CWLnbqEt0Sv','DHEh5adOUMs','DBWEhtTutnZ','Cyv6-0jNX-s']];
  const src=f=>'assets/img/p/'+f+'.webp';
  const qs=[...document.querySelectorAll('.q')].map((q,i)=>{const ob=q.querySelector('.q-ob');const im=new Image();im.src=src(SEQ[i][0]);im.alt='';ob.appendChild(im);return{ob,k:0}});
  SEQ.flat().forEach(f=>{const i=new Image();i.src=src(f)});
  ["c","k","aro","brilho"].forEach(n=>{const i=new Image();i.src="assets/img/tinta-"+n+".png"});
  function troca(i){const q=qs[i];q.k=(q.k+1)%SEQ[i].length;const f=src(SEQ[i][q.k]);
    const mx=(30+Math.random()*40)+'%',my=(30+Math.random()*35)+'%';
    const mk=(tag,cls)=>{const e=document.createElement(tag);e.className=cls;if(tag==='img'){e.src=f;e.alt=''}e.style.setProperty('--mx',mx);e.style.setProperty('--my',my);q.ob.appendChild(e);return e};
    const cz=mk('img','cv cz'),aro=mk('i','aro'),bri=mk('i','bri'),kr=mk('img','cv kr');
    kr.addEventListener('animationend',()=>{[...q.ob.children].forEach(x=>{if(x!==kr)x.remove()});kr.className='';kr.removeAttribute('style')},{once:true})}
  const reduz=matchMedia('(prefers-reduced-motion: reduce)').matches;
  let t=null;const onda=()=>{[0,1,2,3,4].forEach((i,n)=>setTimeout(()=>troca(i),n*520))};
  function liga(){if(!t&&!reduz)t=setInterval(onda,9000)}function desliga(){clearInterval(t);t=null}
  setTimeout(()=>{onda();liga()},2400);
  new IntersectionObserver(e=>e[0].isIntersecting?liga():desliga()).observe(document.getElementById('cena'));
  document.addEventListener('visibilitychange',()=>document.hidden?desliga():liga());
})();

// PORTFOLIO
const NOMES={'DQFDa8pDRK-':'Leão','DAqGn9zOMy3':'Black & red','DHGtknMNafC':'Killer','DNYaTl4ob45':'Caveiras nas mãos','DQ4xvXZjaRN':'Mandala','CvVD3O1Nr-K':'Dragão em traço','DHEh5adOUMs':'Self-made','DBQ5pqGthH7':'Unicórnio','DAx-fazu8_E':'Leão coroado','DJKO1BuN-jE':'Vegas','Dcty3Z2uPit':'Caveira e serpente','DAveSS9uzvw':'Mulher e flores','DP6DwDkDUk0':'Faraó','DBL17c0tHrc':'Smile now, cry later','CWLnbqEt0Sv':'Ossos e flores','DBWEhtTutnZ':'Homenagem ao cão','CxbCVt0NWYS':'Caveira coroada','Co2jx0utzrq':'Catrina','DA0nunJtXEw':'Mãos de esqueleto','CnPa0RptLbk':'Hércules','DKxQShKtDLS':'Dragão','DKurNU-NZxR':'Dragão, 1.ª sessão','DTyGClnDf9P':'Leão','DRFJSr8jWR-':'Peito inteiro','DBdn7zluD7J':'New school','DBi4vJytidT':'New school premiado','DA3I4EQNYDz':'Coluna','DAspkW_Oedy':'Ossos e flores','DBTe1QvOO7L':'Love cake','DBOS8YhNTbT':'Sweet love cake','DA6aGuyOCB5':'Kokeshi','DA_fN1YONoB':'Mãe e filho','DBgRYAoNTwE':'Pink Floyd dog','DBJKoV2u7U5':'Homenagem ao filho','DBBcJKOO-cM':'Chicana','DAWoq-9uhXU':'Serpente e punhal','DAZKrQeuqGb':'Mangual','DAc_-FdO9eS':'Dragão e mandala','DJMTM5Zthky':'Vegas','DBYsGUYN0Ta':'Flor','DBbKPHXNRwt':'Vitória'};
const P=window.PECAS,g=document.getElementById('grade'),MOSTRA=24;
P.forEach(([f,t,c],i)=>{const a=NOMES[f]||(t==='cor'?'A cores':'Preto e cinza');const b=document.createElement('button');b.dataset.t=t;if(i>=MOSTRA)b.classList.add('oc');b.setAttribute('aria-label','Abrir '+a);b.innerHTML=`<img src="assets/img/p/${f}.webp" alt="${a}, tatuagem de Santana Tattoo" decoding="async"><span class="tag"><b>${a}</b><i>${c}</i></span>`;b.dataset.cap=a+' · '+c;g.appendChild(b)});
const mais=document.getElementById('mais');mais.onclick=()=>{g.querySelectorAll('.oc').forEach(x=>x.classList.remove('oc'));mais.parentNode.remove()};
document.querySelectorAll('.filtros button').forEach(b=>b.onclick=()=>{document.querySelectorAll('.filtros button').forEach(x=>x.classList.toggle('on',x===b));const f=b.dataset.f;if(f!=='todos'&&document.getElementById('mais'))mais.click();g.querySelectorAll('button').forEach(x=>x.hidden=f!=='todos'&&x.dataset.t!==f)});

const lb=document.getElementById('lb'),li=document.getElementById('lbImg'),lc=document.getElementById('lbCap');let cur=0;
const vis=()=>[...g.querySelectorAll('button:not([hidden])')];
function abrir(i){cur=i;const v=vis()[i];li.src=v.querySelector('img').src;li.alt=v.querySelector('img').alt;lc.textContent=v.dataset.cap;lb.hidden=false}
g.onclick=e=>{const b=e.target.closest('button');if(b)abrir(vis().indexOf(b))};
document.getElementById('lbX').onclick=()=>lb.hidden=true;
document.getElementById('lbP').onclick=()=>abrir((cur-1+vis().length)%vis().length);
document.getElementById('lbS').onclick=()=>abrir((cur+1)%vis().length);
lb.onclick=e=>{if(e.target===lb)lb.hidden=true};
addEventListener('keydown',e=>{if(lb.hidden)return;if(e.key==='Escape')lb.hidden=true;if(e.key==='ArrowRight')document.getElementById('lbS').click();if(e.key==='ArrowLeft')document.getElementById('lbP').click()});

// MENU
const bu=document.getElementById('burger'),ga=document.getElementById('gaveta');
bu.onclick=()=>{const o=bu.getAttribute('aria-expanded')!=='true';bu.setAttribute('aria-expanded',o);ga.hidden=!o};
ga.onclick=e=>{if(e.target.closest('a')){ga.hidden=true;bu.setAttribute('aria-expanded',false)}};

// linha de agulha e entradas suaves (sem esconder imagens)
document.querySelectorAll('.pr-lead,.pulseiras li,.art-txt,.passe').forEach(el=>el.classList.add('rv'));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('vis');io.unobserve(e.target)}}),{threshold:.15});
document.querySelectorAll('.sec,.rv').forEach(el=>io.observe(el));

// PASSE
const n=String(Math.floor(Math.random()*9000)+1000);document.getElementById('nPasse').textContent='Nº '+n;
document.getElementById('form').onsubmit=async e=>{e.preventDefault();const d=new FormData(e.target);
if(!d.get('nome').trim()){document.getElementById('erro').hidden=false;return}document.getElementById('erro').hidden=true;
const m=`Olá Santana! Sou ${d.get('nome').trim()} e quero marcar uma consulta.\n\nEstilo: ${d.get('estilo')}\nZona: ${d.get('zona')||'a definir'}\nTamanho: ${d.get('tamanho')}\nIdeia: ${d.get('ideia')||'conto na conversa'}`;
try{await navigator.clipboard.writeText(m)}catch(_){}
document.getElementById('ok').hidden=false;window.open('https://wa.me/message/GEF4HMKCGIW6K1','_blank')};
