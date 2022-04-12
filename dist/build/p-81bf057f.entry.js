import{r as i,c as s,h as t,H as a,g as n}from"./p-4bb69ba2.js";import{g as e}from"./p-891005fd.js";import{c as d}from"./p-dfb8e7ac.js";let h=class{constructor(t){i(this,t),this.ldSidenavSliderChange=s(this,"ldSidenavSliderChange",7),this.activeSubnavs=[],this.isFirstLevelHidden=!1,this.updateActiveBeforeTransition=()=>{this.el.querySelectorAll("ld-sidenav-subnav").forEach((i=>{i.activeBeforeTransition=!1})),this.activeSubnavs.forEach((i=>{i.activeBeforeTransition=!0}))},this.updateActive=()=>{this.el.querySelectorAll("ld-sidenav-subnav").forEach((i=>{i.active=!1})),this.activeSubnavs.forEach((i=>{i.active=!0}))},this.updateAncestor=()=>{this.el.querySelectorAll("ld-sidenav-subnav").forEach((i=>{i.ancestor=!1})),this.activeSubnavs.forEach(((i,s)=>{i.ancestor=s<this.activeSubnavs.length-1}))},this.updateFirstLevelHidden=()=>{this.isFirstLevelHidden=this.currentNavLevel>0},this.scrollInactiveToTop=()=>{Array.from(this.el.querySelectorAll("ld-sidenav-subnav")).forEach((i=>{i.active||i.scrollToTop()}))},this.onTransitionEnd=i=>{i.target===this.el&&(this.updateActive(),this.updateAncestor(),this.updateFirstLevelHidden(),this.scrollInactiveToTop())},this.toggleVisibilityOnHidableContent=i=>{Array.from(this.el.children).forEach((s=>{["LD-SIDENAV-SEPARATOR","LD-SIDENAV-NAVITEM","LD-SIDENAV-SUBNAV"].includes(s.tagName)||s.classList.toggle("ld-sidenav-slider__hidden",!i)}))}}navigateToSubnav(){let i,s=this.currentSubnav;for(this.activeSubnavs=[];s;){const t=document.querySelector(`#${s}`);t?(t.active=!0,i=t.closest(`ld-sidenav-subnav:not(#${s})`),this.activeSubnavs.unshift(t),s=i?i.id:void 0):s=void 0}if(this.activeSubnavs.length!==this.currentNavLevel){let i=!1;(void 0===this.currentNavLevel||this.currentNavLevel>this.activeSubnavs.length)&&(i=!0,this.updateAncestor()),this.currentNavLevel=this.activeSubnavs.length,i&&this.updateFirstLevelHidden(),this.updateActiveBeforeTransition()}else this.activeSubnavs.length>0&&(this.updateActive(),this.updateAncestor(),this.updateFirstLevelHidden(),this.scrollInactiveToTop())}handleSubnavChange(){this.navigateToSubnav(),this.emitChange()}slideToHandler(i){this.currentSubnav=i.detail.id}handleSidenavCollapsedChange(i){i.target===this.sidenav&&(i.detail?(this.scrollerRef.scrollToTop(!0),this.toggleVisibilityOnHidableContent(!1)):this.toggleVisibilityOnHidableContent(!0))}async navigateBack(){if(this.currentNavLevel>0){const i=this.activeSubnavs[this.activeSubnavs.length-2];this.currentSubnav=(null==i?void 0:i.id)||""}}emitChange(){const i=this.activeSubnavs[this.activeSubnavs.length-1];i?this.ldSidenavSliderChange.emit({id:i.id,label:(this.activeSubnavs[this.activeSubnavs.length-2]||this.el).label}):this.currentSubnav||this.ldSidenavSliderChange.emit()}componentWillLoad(){this.sidenav=d("ld-sidenav",this.el),this.currentSubnav&&this.handleSubnavChange(),void 0===this.currentNavLevel&&(this.currentNavLevel=0)}render(){const i=e(["ld-sidenav-slider",this.currentNavLevel>0&&"ld-sidenav-slider--subnav-active"]);return t(a,{onTransitionEnd:this.onTransitionEnd,class:i,style:{transform:`translateX(-${this.currentNavLevel}00%)`,visibility:this.isFirstLevelHidden?"hidden":"inherit"}},t("ld-sidenav-scroller-internal",{part:"scroll-container",ref:i=>this.scrollerRef=i},t("slot",null)))}get el(){return n(this)}static get watchers(){return{currentSubnav:["handleSubnavChange"]}}};h.style=":host{transition:transform var(--ld-sidenav-transition-duration) ease;display:block;height:100%;width:100%;position:absolute}:host.ld-sidenav-slider--subnav-active{visibility:hidden}:host ::slotted(:where(:not(ld-sidenav-separator):not(ld-sidenav-navitem):not(ld-sidenav-subnav))){margin-top:var(--ld-sidenav-padding-y);transition:opacity var(--ld-sidenav-transition-duration-collapse-expand) var(--ld-sidenav-transition-delay-collapse-expand) linear,transform var(--ld-sidenav-transition-duration-collapse-expand) ease;will-change:opacity,transform}:host ::slotted(.ld-sidenav-slider__hidden){transition:opacity var(--ld-sidenav-transition-duration-collapse-expand) linear,visibility 0s var(--ld-sidenav-transition-duration-collapse-expand) linear,transform var(--ld-sidenav-transition-duration-collapse-expand) ease;opacity:0;visibility:hidden;transform:translateX(var(--ld-sidenav-translate-x-delta))}";export{h as ld_sidenav_slider}