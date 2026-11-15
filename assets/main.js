// PORTFOLIO
const P=[['DQFDa8pDRK-','bg','Leão','Luxemburgo'],['DAqGn9zOMy3','cor','Black & red','Luxemburgo'],['DHGtknMNafC','bg','Killer','Luxemburgo'],['DNYaTl4ob45','cor','Caveiras nas mãos','Londres'],['DQ4xvXZjaRN','bg','Mandala','Luxemburgo'],['CvVD3O1Nr-K','cor','Dragão vermelho','Luxemburgo'],['DHEh5adOUMs','bg','Self-made','Luxemburgo'],['DBQ5pqGthH7','cor','Unicórnio','Londres'],['DAx-fazu8_E','bg','Leão coroado','Luxemburgo'],['DJKO1BuN-jE','bg','Vegas','Luxemburgo'],['Dcty3Z2uPit','cor','Caveira e serpente','Braga'],['DAveSS9uzvw','cor','Mulher e flores','Luxemburgo'],['DP6DwDkDUk0','bg','Faraó','Luxemburgo'],['DBL17c0tHrc','bg','Smile now, cry later','Luxemburgo'],['CWLnbqEt0Sv','cor','Ossos e flores','Barreiro'],['DBWEhtTutnZ','bg','Homenagem ao cão','Luxemburgo'],['CxbCVt0NWYS','bg','Caveira coroada','Tétange'],['Co2jx0utzrq','bg','Catrina','Luxemburgo'],['DA0nunJtXEw','bg','Mãos de esqueleto','Luxemburgo'],['CnPa0RptLbk','bg','Hércules','Luxemburgo']];
const g=document.getElementById('grade');
P.forEach(([f,t,a,c])=>{const b=document.createElement('button');b.dataset.t=t;b.setAttribute('aria-label','Abrir '+a);b.innerHTML=`<img src="assets/img/${f}.webp" alt="${a}, tatuagem de Santana Tattoo"><span class="tag"><b>${a}</b><i>${c}</i></span>`;b.dataset.cap=a+' · '+c;g.appendChild(b)});
document.querySelectorAll('.filtros button').forEach(b=>b.onclick=()=>{document.querySelectorAll('.filtros button').forEach(x=>x.classList.toggle('on',x===b));const f=b.dataset.f;g.querySelectorAll('button').forEach(x=>x.hidden=f!=='todos'&&x.dataset.t!==f)});

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
