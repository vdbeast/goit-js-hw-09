function e(e,t){return new Promise(((o,n)=>{setTimeout((()=>{Math.random()>.3?o({position:e,delay:t}):n({position:e,delay:t})}),t)}))}document.querySelector(".form").addEventListener("submit",(function(t){t.preventDefault();const o=document.querySelector('input[name="delay"]'),n=document.querySelector('input[name="step"]'),u=document.querySelector('input[name="amount"]');let i=Number(o.value);const l=Number(n.value),r=Number(u.value);for(let t=0;t<r;t++)e(t+1,i).then((({position:e,delay:t})=>{console.log(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{console.log(`❌ Rejected promise ${e} in ${t}ms`)})),i+=l}));
//# sourceMappingURL=03-promises.0f8af3a0.js.map
