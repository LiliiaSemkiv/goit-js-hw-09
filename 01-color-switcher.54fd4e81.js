const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");let a=0;t.addEventListener("click",(function(){a||(a=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3),t.disabled=!0)})),e.addEventListener("click",(function(){clearInterval(a),a=0,t.disabled=!1}));
//# sourceMappingURL=01-color-switcher.54fd4e81.js.map