import{a as s,r as e,h as t,H as i,g as o}from"./p-e65bc256.js";import{g as l}from"./p-891005fd.js";const n={},r={};let d=class{constructor(s){e(this,s),this.name=null}async loadIconPathData(){if(!this.name)return;const e=document.createElement("div"),t=await async function(e){if(n[e])return n[e];r[e]||(r[e]=fetch(s(`./assets/${e}.svg`)).then((s=>s.text())).catch((s=>(console.error(`"${e}" is not a valid name`,s),""))));const t=await r[e];return n[e]=t,t}(this.name);e.innerHTML=t.replace("<svg",'<svg part="icon"'),this.element.shadowRoot.innerHTML="",this.element.shadowRoot.appendChild(e.firstChild)}async componentWillLoad(){this.loadIconPathData()}render(){return t(i,{class:l(["ld-icon",this.size&&`ld-icon--${this.size}`]),role:"presentation"},!this.name&&t("slot",null))}static get assetsDirs(){return["assets"]}get element(){return o(this)}static get watchers(){return{name:["loadIconPathData"]}}};d.style=":host,:where(.ld-icon){--ld-icon-size-sm:1rem;--ld-icon-size-md:1.25rem;--ld-icon-size-lg:1.5rem;display:inline-flex;justify-content:center;align-items:center;width:var(--ld-icon-size-md);height:var(--ld-icon-size-md)}:host ::slotted(svg),:host :where(svg),:where(.ld-icon) ::slotted(svg),:where(.ld-icon) :where(svg){width:var(--ld-icon-size-md);height:var(--ld-icon-size-md);flex-shrink:0}:host(.ld-icon--sm),:host(.ld-icon--sm) ::slotted(svg),:host(.ld-icon--sm) :where(svg),:where(.ld-icon--sm),:where(.ld-icon--sm) ::slotted(svg),:where(.ld-icon--sm) :where(svg){width:var(--ld-icon-size-sm);height:var(--ld-icon-size-sm)}:host(.ld-icon--lg),:host(.ld-icon--lg) ::slotted(svg),:host(.ld-icon--lg) :where(svg),:where(.ld-icon--lg),:where(.ld-icon--lg) ::slotted(svg),:where(.ld-icon--lg) :where(svg){width:var(--ld-icon-size-lg);height:var(--ld-icon-size-lg)}";let c=class{constructor(s){e(this,s)}render(){return t(i,{class:"ld-sr-only"},t("slot",null))}};c.style=".ld-sr-only,:host{position:absolute;width:var(--ld-sp-1);height:var(--ld-sp-1);padding:0;overflow:hidden;clip:rect(0,0,0,0);border-width:0}";export{d as ld_icon,c as ld_sr_only}