function t(t){return null==t||"false"===t}function s(s=[]){const e=new Set(["style","id","class","slot","part",...s]),i={};for(const s of this.el.attributes)e.has(s.name)||t(s.value)||(i[s.name]=""===s.value||s.value);this.clonedAttributes=i;const n=new MutationObserver((s=>{for(const i of s){const{attributeName:s}=i;if(!e.has(s)){const e=this.el.getAttribute(s);t(e)?delete this.clonedAttributes[s]:this.clonedAttributes[s]=e}}this.clonedAttributes=Object.assign({},this.clonedAttributes)}));return n.observe(this.el,{subtree:!1,childList:!1,attributes:!0}),n}export{s as c}