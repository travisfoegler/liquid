import{r as t,c as e,h as a,H as s,g as l}from"./p-5ccb6a7b.js";let i=0;const d=class{constructor(a){t(this,a),this.tabChange=e(this,"tabChange",7),this.idDescriber="ld-tabs-"+i++}updateTabs(t){var e;null===(e=Array.from(this.el.querySelectorAll("ld-tab")).find((t=>t.hasAttribute("selected"))))||void 0===e||e.removeAttribute("selected"),t.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})}updateTabPanels(t){var e,a;const s=Array.from(this.el.querySelectorAll("ld-tabpanel"));null===(e=s.find((t=>!t.hasAttribute("hidden"))))||void 0===e||e.setAttribute("hidden",void 0),null===(a=s.find((e=>e.getAttribute("aria-labelledby")===t)))||void 0===a||a.removeAttribute("hidden")}handleTabSelect(t){t.stopImmediatePropagation();const e=t.target;this.updateTabs(e),this.updateTabPanels(e.id),this.tabChange.emit(e.id)}async switchTab(t){const e="number"==typeof t?this.el.querySelectorAll("ld-tab")[t]:this.el.querySelector(`ld-tab#${t}`);if(!e)throw new Error(`Could not find ld-tab with ${"number"==typeof t?"index":"id"} ${"number"==typeof t?t:`"${t}"`}.`);e.select()}componentDidRender(){let t;this.el.querySelectorAll("ld-tab").forEach(((e,a)=>{e.id=`${this.idDescriber}-tab-${a}`,e.hasAttribute("selected")&&(t=a)})),this.el.querySelectorAll("ld-tabpanel").forEach(((e,a)=>{e.setAttribute("aria-labelledby",`${this.idDescriber}-tab-${a}`),t===a?e.removeAttribute("hidden"):e.setAttribute("hidden","true")}))}render(){return a(s,{onTabSelect:this.handleTabSelect.bind(this),class:"ld-tabs"},a("slot",null))}get el(){return l(this)}};d.style="";export{d as ld_tabs}