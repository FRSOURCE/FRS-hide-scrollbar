function e(){return(e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}const t=window.FRSHideScrollbar&&window.FRSHideScrollbar.FRSHideScrollbar,n=Object.assign({className:"frs-hide-scroll",wrapperClassName:"frs-hide-scroll-wrapper",autoInit:!0},t&&t.config||{}),o={refreshScrollWidth:function(){const e=r("div",document.body);e.style.position="absolute",e.style["z-index"]="-1",e.style.width="100px",e.style.overflow="scroll";const t=e.offsetWidth-e.clientWidth;document.body.removeChild(e),t!==n.scrollWidth&&(n.scrollWidth=t,o.update())},update:function(t=n,o=l){if(o){const e=o.styleElement,t=e.textContent.lastIndexOf("."+o.wrapperClassName+"{overflow:hidden;height:100%}");e.textContent=e.textContent.substring(0,t)}Object.assign(n,t);let r="height:";const s=n.scrollWidth;r+=0===s?"100%":"calc(100% + "+s+"px);margin-right:-"+(s+.5)+"px",l=e({},n),n.styleElement.textContent+="."+n.wrapperClassName+"{overflow:hidden;height:100%}."+n.className+"{overflow:scroll;"+r+"}"},config:n};n.styleElement=n.styleElement||r("style",document.head);let l=e({},n);function r(e,t){return t.appendChild(document.createElement(e))}n.autoInit&&function(){const e=function(){return o.refreshScrollWidth()};document.readyState&&"loading"!==document.readyState?e():window.addEventListener("load",e,{passive:!0}),window.addEventListener("resize",e,{passive:!0})}();export{o as FRSHideScrollbar};
//# sourceMappingURL=FRS-hide-scrollbar.modern.js.map
