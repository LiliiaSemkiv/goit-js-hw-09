const e=document.querySelector(".form"),t=(document.querySelector('[type="submit"]'),document.querySelector('[name="delay"]')),o=document.querySelector('[name="step"]'),n=document.querySelector('[name="amount"]');function r(e,t){const o=Math.random()>.3;return new Promise(((n,r)=>{setTimeout((()=>{o?n({position:e,delay:t}):r({position:e,delay:t})}),t)}))}e.addEventListener("submit",(function(e){e.preventDefault();const l=parseInt(t.value),s=parseInt(o.value),u=parseInt(n.value);for(let e=1;e<=u;e+=1){r(e,l+(e-1)*s).then((({position:e,delay:t})=>{console.log(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{console.log(`❌ Rejected promise ${e} in ${t}ms`)}))}}));
//# sourceMappingURL=03-promises.7c91e91a.js.map