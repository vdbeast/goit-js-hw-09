!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),a=document.querySelector("body");function n(){var t="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0));a.style.backgroundColor=t}var d=null;t.addEventListener("click",(function(){t.disabled=!0,e.disabled=!1,d=setInterval((function(){n()}),1e3)})),e.addEventListener("click",(function(){t.disabled=!1,e.disabled=!0,clearInterval(d)}))}();
//# sourceMappingURL=01-color-switcher.b3d52435.js.map