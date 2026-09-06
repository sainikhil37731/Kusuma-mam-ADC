const pages=document.querySelectorAll('.page'),bar=document.getElementById('bar'),status=document.getElementById('status');
const messages=['Growing a special message...','Preparing environmental lessons...','Planting ideas of sustainability...','Connecting people and nature...','Preparing the final tribute...','Tribute ready.'];
function show(id){pages.forEach(p=>p.classList.remove('active'));document.getElementById(id).classList.add('active');scrollTo({top:0,behavior:'smooth'})}
function start(){let n=0;const t=setInterval(()=>{n+=2;bar.style.width=Math.min(n,100)+'%';status.textContent=messages[Math.min(Math.floor(n/18),messages.length-1)];if(n>=100){clearInterval(t);setTimeout(()=>show('mentor'),700)}},60)}
document.querySelectorAll('[data-next]').forEach(b=>b.onclick=()=>show(b.dataset.next));
document.getElementById('replay').onclick=()=>{bar.style.width='0%';status.textContent=messages[0];show('welcome');start()};
start();