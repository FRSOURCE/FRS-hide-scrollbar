var e=window.FRSHideScrollbar&&window.FRSHideScrollbar.FRSHideScrollbar,t=Object.assign({className:"frs-hide-scroll",wrapperClassName:"frs-hide-scroll-wrapper",autoInit:!0},e&&e.config||{}),l={refreshScrollWidth:function(){var e=r("div",document.body);e.style.position="absolute",e.style["z-index"]="-1",e.style.width="100px",e.style.overflow="scroll";var n=e.offsetWidth-e.clientWidth;document.body.removeChild(e),n!==t.scrollWidth&&(t.scrollWidth=n,l.update())},update:function(e,l){if(void 0===e&&(e=t),void 0===l&&(l=o),l){var n=l.styleElement,r=n.textContent.lastIndexOf("."+l.wrapperClassName+"{overflow:hidden;height:100%}");n.textContent=n.textContent.substring(0,r)}Object.assign(t,e);var i="height:",s=t.scrollWidth;i+=0===s?"100%":"calc(100% + "+s+"px);margin-right:-"+(s+.5)+"px",o=Object.assign({},t),t.styleElement.textContent+="."+t.wrapperClassName+"{overflow:hidden;height:100%}."+t.className+"{overflow:scroll;"+i+"}"},config:t};t.styleElement=t.styleElement||r("style",document.head);var n,o=Object.assign({},t);function r(e,t){return t.appendChild(document.createElement(e))}t.autoInit&&(n=function(){return l.refreshScrollWidth()},document.readyState&&"loading"!==document.readyState?n():window.addEventListener("load",n,{passive:!0}),window.addEventListener("resize",n,{passive:!0}));export{l as FRSHideScrollbar};
//# sourceMappingURL=FRS-hide-scrollbar.mjs.map
