(()=>{const e=document.querySelector(".nuevo"),t=document.querySelector(".pedir"),a=document.querySelector(".detener"),c=document.querySelector(".carta-jugador"),n=document.querySelector(".carta-computadora"),o=document.querySelectorAll("span");let r=0,s=0;const d=["C","D","H","S"],l=["A","J","Q","K"];let u=[];const p=()=>{for(i=2;i<=10;i++)for(const e of d){let t=i+e;u.push(t)}for(const e of l)for(const t of d){let a=e+t;u.push(a)}u=_.shuffle(u)},m=()=>{const e=u.pop();g(e);const t=document.createElement("img");t.src=`assets/img/${e}.png`,c.appendChild(t),21===r&&b(r),r>21&&b(r)},g=e=>{const t=e.slice(0,-1);switch(t){case"A":case"J":r+=11;break;case"Q":r+=12;break;case"K":r+=13;break;default:r+=parseInt(t)}o[0].textContent=r},b=t=>{do{const e=u.pop(),t=document.createElement("img");t.src=`assets/img/${e}.png`,n.appendChild(t);const a=e.slice(0,-1);switch(a){case"A":case"J":s+=11;break;case"Q":s+=12;break;case"K":s+=13;break;default:s+=parseInt(a)}o[1].textContent=s}while(t>=s);setTimeout(()=>{f()},500),e.disabled=!1},f=()=>{t.disabled=!0,a.disabled=!0,r>21?alert("computadora gana"):s>21?alert("jugador gana"):r>s?alert("jugador gana"):r<s?alert("computadora gana"):alert("empate")};p(),t.addEventListener("click",e=>{m()}),a.addEventListener("click",e=>{b(r)}),e.addEventListener("click",d=>{a.disabled=!1,t.disabled=!1,e.disabled=!0,c.innerHTML="",n.innerHTML="",r=0,s=0,o.forEach(e=>{e.textContent="0"}),u=[],p()})})();
