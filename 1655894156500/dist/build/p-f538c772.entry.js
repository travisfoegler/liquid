import{r as o,c as i,h as a,H as d,g as n}from"./p-e55c60b3.js";import{c as r}from"./p-dfb8e7ac.js";import{g as e}from"./p-891005fd.js";import{t as c}from"./p-d2e5dd6d.js";const t=class{constructor(a){o(this,a),this.ldSidenavAccordionTransitionEnd=i(this,"ldSidenavAccordionTransitionEnd",7),this.transitionsEnabled=!0,this.preserveState=!0,this.onTransitionEnd=o=>{o.target===this.panelRef&&this.ldSidenavAccordionTransitionEnd.emit()}}handleSidenavBreakpointChange(o){o.target===this.sidenav&&(this.sidenavClosable=o.detail,c(this.el,!this.sidenavClosable&&this.sidenav.narrow&&this.sidenavCollapsed))}handleSidenavSliderChange(o){o.target.closest("ld-sidenav")===this.sidenav&&(this.preserveState||(this.sectionRef.expanded=!1,this.expanded=!1),this.transitionsEnabled=!1,setTimeout((()=>{this.transitionsEnabled=!0}),200))}handleSidenavCollapsedChange(o){o.target===this.sidenav&&(this.sidenavCollapsed=o.detail.collapsed,c(this.el,this.sidenav.narrow&&this.sidenavCollapsed),this.sidenavCollapsed?(this.preserveState&&(this.expandOnSidenavExpansion=this.sectionRef.expanded),this.sectionRef.expanded=!1,this.expanded=!1):this.expandOnSidenavExpansion&&(this.sectionRef.expanded=!0,this.expanded=!0))}handleExpandedChange(o){this.sectionRef.expanded=o}componentWillLoad(){this.inAccordion="LD-SIDENAV-ACCORDION"===this.el.parentElement.tagName,this.rounded=!!this.el.querySelector('ld-sidenav-navitem[slot="toggle"][rounded]'),this.noIcon=!!this.el.querySelector('ld-sidenav-navitem[slot="toggle"][mode="secondary"],ld-sidenav-navitem[slot="toggle"][mode="tertiary"]'),this.sidenav=r("ld-sidenav",this.el)}render(){const o=e(["ld-sidenav-accordion",this.noIcon&&"ld-sidenav-accordion--no-icon",this.rounded&&"ld-sidenav-accordion--rounded",this.inAccordion&&"ld-sidenav-accordion--in-accordion",this.transitionsEnabled&&"ld-sidenav-accordion--transitions-enabled",this.sidenavCollapsed&&!this.sidenavClosable&&"ld-sidenav-accordion--collapsed",this.split&&"ld-sidenav-accordion--split"]);return a(d,{class:o},a("ld-accordion",{class:"ld-sidenav-accordion__accordion"},a("ld-accordion-section",{expanded:this.expanded,ref:o=>this.sectionRef=o,class:"ld-sidenav-accordion__accordion-section"},a("ld-accordion-toggle",{labelTag:"div",class:"ld-sidenav-accordion__accordion-toggle",split:this.split,"ld-tabindex":"-1"},a("slot",{name:"toggle"})),a("ld-accordion-panel",{ref:o=>this.panelRef=o,onTransitionEnd:this.onTransitionEnd,class:"ld-sidenav-accordion__accordion-panel"},a("slot",null)))))}get el(){return n(this)}static get watchers(){return{expanded:["handleExpandedChange"]}}};t.style='.ld-sidenav-accordion__accordion{--ld-accordion-bg-col:#0000;--ld-accordion-bg-col-active:var(--ld-thm-primary-alpha-low);--ld-accordion-bg-col-disabled:#0000;--ld-accordion-bg-col-focus:var(--ld-thm-primary-alpha-low);--ld-accordion-panel-border-top-col:#0000;--ld-accordion-padding-x:var(--ld-sidenav-padding-x);--ld-accordion-padding-y:0;--ld-accordion-toggle-indicator-bg-col:#0000;--ld-accordion-toggle-indicator-bg-col-active:var(--ld-thm-primary);--ld-accordion-toggle-indicator-bg-col-hover:var(--ld-col-neutral-100);--ld-accordion-toggle-indicator-bg-col-focus:var(--ld-thm-primary-focus);--ld-accordion-toggle-size:var(--ld-sidenav-navitem-icon-size);--ld-sidenav-navitem-tertiary-indent:calc(var(--ld-sidenav-padding-x)*2 + 0.3125rem);transform:translateY(var(\n      --ld-slider-navitem-move-up-closable,var(--ld-slider-navitem-move-up,0)\n    ));transition:var(--ld-sidenav-stack-to-top-transition)}:host(.ld-sidenav-accordion--collapsed) .ld-sidenav-accordion__accordion{pointer-events:none;transition:transform var(--ld-sidenav-transition-duration-collapse-expand) ease}:host(.ld-sidenav-accordion--in-accordion) .ld-sidenav-accordion__accordion{--ld-accordion-padding-x:0;margin:var(--ld-sp-6) calc(var(--ld-sidenav-padding-x)*-1) var(--ld-sp-6) 0}:host(.ld-sidenav-accordion--in-accordion) .ld-sidenav-accordion__accordion .ld-sidenav-accordion__accordion-panel{padding:0 var(--ld-sidenav-padding-x) 0 0}:host(:not(.ld-sidenav-accordion--transitions-enabled)) .ld-sidenav-accordion__accordion .ld-sidenav-accordion__accordion-panel{--ld-accordion-panel-transition-duration:0.0001s}.ld-sidenav-accordion__accordion-panel{padding:0 var(--ld-sidenav-padding-x)}.ld-sidenav-accordion__accordion-panel::part(content){padding:var(--ld-sidenav-navitem-bg-inset) 0}.ld-sidenav-accordion__accordion-toggle{pointer-events:none}.ld-sidenav-accordion__accordion-toggle::part(toggle):before{display:none}.ld-sidenav-accordion__accordion-toggle::part(label){--ld-accordion-bg-col-hover:#0000;padding-right:var(--ld-sidenav-padding-x)}.ld-sidenav-accordion__accordion-toggle::part(label):before{display:none}@media (hover:hover){.ld-sidenav-accordion__accordion-toggle:where(:hover){--ld-accordion-toggle-indicator-bg-col:var(--ld-col-neutral-100)}}.ld-sidenav-accordion__accordion-toggle::part(trigger){--ld-accordion-bg-col-hover:var(\n      --ld-sidenav-accordion-bg-col-hover,var(--ld-col-neutral-050)\n    );border-radius:var(--ld-sidenav-navitem-border-radius);outline:none;pointer-events:none;right:var(--ld-sp-16);transition:opacity var(--ld-sidenav-transition-duration-collapse-expand) linear,transform var(--ld-sidenav-transition-duration-collapse-expand) ease}.ld-sidenav-accordion__accordion-toggle::part(trigger):before{background-color:var(--ld-accordion-toggle-indicator-bg-col);border-radius:inherit;inset:0;z-index:1}.ld-sidenav-accordion__accordion-toggle::part(trigger):after{background-color:var(--ld-col-wht);border-radius:inherit;content:"";inset:0;position:absolute;visibility:hidden}.ld-sidenav-accordion__accordion-toggle::part(trigger):active{--ld-accordion-toggle-indicator-bg-col:var(\n        --ld-accordion-toggle-indicator-bg-col-active\n      )}.ld-sidenav-accordion__accordion-toggle::part(trigger):active:before{opacity:.3}@media (hover:hover){.ld-sidenav-accordion__accordion-toggle::part(trigger):where(:hover){--ld-accordion-toggle-indicator-bg-col:var(\n          --ld-accordion-toggle-indicator-bg-col-hover\n        )}.ld-sidenav-accordion__accordion-toggle::part(trigger):where(:hover):after{visibility:inherit}}.ld-sidenav-accordion__accordion-toggle::part(trigger):focus:focus-visible{--ld-accordion-toggle-indicator-bg-col:var(\n        --ld-accordion-toggle-indicator-bg-col-focus\n      )}.ld-sidenav-accordion__accordion-toggle::part(trigger):focus:focus-visible:before{opacity:.3}.ld-sidenav-accordion__accordion-toggle::part(trigger):focus:focus-visible:after{visibility:inherit}.ld-sidenav-accordion__accordion-toggle::part(trigger):focus:focus-visible:active{--ld-accordion-toggle-indicator-bg-col:var(\n          --ld-accordion-toggle-indicator-bg-col-active\n        )}.ld-sidenav-accordion__accordion-toggle::part(trigger):focus:focus-visible:active:before{opacity:.3}:host(.ld-sidenav-accordion--rounded) .ld-sidenav-accordion__accordion-toggle::part(trigger){border-radius:var(--ld-br-full)}:host(.ld-sidenav-accordion--no-icon) .ld-sidenav-accordion__accordion-toggle::part(trigger):after,:host(.ld-sidenav-accordion--no-icon) .ld-sidenav-accordion__accordion-toggle::part(trigger):before{transform:scale(.8)}.ld-sidenav-accordion__accordion-toggle::part(trigger-content){transform:none;z-index:2}:host(.ld-sidenav-accordion--collapsed) .ld-sidenav-accordion__accordion-toggle::part(trigger){opacity:0;transform:translateX(var(--ld-sidenav-translate-x-delta));transition:opacity var(--ld-sidenav-transition-duration-collapse-expand) linear,visibility 0s var(--ld-sidenav-transition-duration-collapse-expand) linear,transform var(--ld-sidenav-transition-duration-collapse-expand) ease;visibility:hidden}:host(.ld-sidenav-accordion--split) .ld-sidenav-accordion__accordion-toggle::part(trigger){pointer-events:auto}::slotted(ld-sidenav-navitem){--ld-sidenav-navitem-bg-right-x-delta:var(--ld-accordion-toggle-size);--ld-sidenav-navitem-bg-width:calc(100% + var(--ld-accordion-toggle-size) + var(--ld-sidenav-navitem-bg-inset)*2);position:relative;z-index:1}::slotted(ld-sidenav-navitem:not(:first-of-type)){margin:var(--ld-sp-16) 0}::slotted(ld-sidenav-navitem:last-of-type){margin-bottom:0}';export{t as ld_sidenav_accordion}