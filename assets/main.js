const H=[['h-leao','Best of Show','Leão · antebraço'],['h-dragao','Black & Red','Dragão vermelho · ombro'],['h-newschool','New School','Premiado em Metz'],['h-coracao','Preto e cinza','Peito inteiro'],['h-costas','Cor','Ossos e flores · costas']];
const jan=document.getElementById('janela'),plA=document.getElementById('plA'),plB=document.getElementById('plB');
const hi=H.map(([f],i)=>{const im=new Image();im.src='assets/img/'+f+'.webp';im.alt='';im.decoding='async';if(!i)im.className='on';jan.appendChild(im);return im});
let k=0;setInterval(()=>{hi[k].classList.remove('on');k=(k+1)%H.length;hi[k].classList.add('on');plB.style.opacity=0;setTimeout(()=>{plA.textContent=H[k][1];plB.textContent=H[k][2];plB.style.opacity=1},300)},4200);

const P=[['DQFDa8pDRK-','bg','Leão'],['DAqGn9zOMy3','cor','Gueixa em vermelho'],['DHGtknMNafC','bg','Killer'],['DBdn7zl','cor',''],['DNYaTl4ob45','cor','Caveiras nas mãos'],['DQ4xvXZjaRN','bg','Mandala em pontilhismo'],['CvVD3O1Nr-K','cor','Dragão vermelho'],['DHEh5adOUMs','bg','Self-made'],['DBQ5pqGthH7','cor','Unicórnio'],['DAx-fazu8_E','bg','Leão coroado'],['DJKO1BuN-jE','bg','Vegas'],['Dcty3Z2uPit','cor','Caveira e serpente'],['DAveSS9uzvw','cor','Mulher e flores'],['DP6DwDkDUk0','bg','Faraó'],['DBL17c0tHrc','bg','Palhaço'],['CWLnbqEt0Sv','cor','Costas com ossos'],['DBWEhtTutnZ','bg','Homenagem ao cão'],['CxbCVt0NWYS','bg','Caveira coroada'],['Co2jx0utzrq','bg','Catrina'],['DA0nunJtXEw','bg','Mãos de esqueleto'],['CnPa0RptLbk','bg','Hércules'],['Cyv6-0jNX-s','bg','Lobo'],['CvPTfv0NPS6','bg','Retrato'],['DA3I4EQNYDz','bg','Coluna']].filter(p=>p[0]!=='DBdn7zl');
const g=document.getElementById('grade');
P.forEach(([f,t,a],i)=>{const b=document.createElement('button');b.dataset.t=t;b.dataset.i=i;b.setAttribute('aria-label','Abrir '+a);b.innerHTML=`<img src="assets/img/${f}.webp" alt="${a}, tatuagem de Santana Tattoo">`;g.appendChild(b)});
document.querySelectorAll('.filtros button').forEach(b=>b.onclick=()=>{document.querySelectorAll('.filtros button').forEach(x=>x.classList.toggle('on',x===b));const f=b.dataset.f;g.querySelectorAll('button').forEach(x=>x.hidden=f!=='todos'&&x.dataset.t!==f)});

const lb=document.getElementById('lb'),li=document.getElementById('lbImg');let cur=0;
const vis=()=>[...g.querySelectorAll('button:not([hidden])')];
function abrir(i){cur=i;const v=vis();li.src=v[i].querySelector('img').src;li.alt=v[i].querySelector('img').alt;lb.hidden=false}
g.onclick=e=>{const b=e.target.closest('button');if(b)abrir(vis().indexOf(b))};
document.getElementById('lbX').onclick=()=>lb.hidden=true;
document.getElementById('lbP').onclick=()=>abrir((cur-1+vis().length)%vis().length);
document.getElementById('lbS').onclick=()=>abrir((cur+1)%vis().length);
lb.onclick=e=>{if(e.target===lb)lb.hidden=true};
addEventListener('keydown',e=>{if(lb.hidden)return;if(e.key==='Escape')lb.hidden=true;if(e.key==='ArrowRight')document.getElementById('lbS').click();if(e.key==='ArrowLeft')document.getElementById('lbP').click()});

const bu=document.getElementById('burger'),ga=document.getElementById('gaveta');
bu.onclick=()=>{const o=bu.getAttribute('aria-expanded')!=='true';bu.setAttribute('aria-expanded',o);ga.hidden=!o};
ga.onclick=e=>{if(e.target.tagName==='A'){ga.hidden=true;bu.setAttribute('aria-expanded',false)}};

document.getElementById('form').onsubmit=async e=>{e.preventDefault();const d=new FormData(e.target);
if(!d.get('nome').trim()){document.getElementById('erro').hidden=false;return}document.getElementById('erro').hidden=true;
const m=`Olá Santana! Sou ${d.get('nome').trim()} e quero marcar uma consulta.\n\nEstilo: ${d.get('estilo')}\nZona: ${d.get('zona')||'a definir'}\nTamanho: ${d.get('tamanho')}\nIdeia: ${d.get('ideia')||'conto na conversa'}`;
try{await navigator.clipboard.writeText(m)}catch(_){}
document.getElementById('ok').hidden=false;window.open('https://wa.me/message/GEF4HMKCGIW6K1','_blank')};
