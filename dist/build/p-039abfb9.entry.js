import{r as e,h as r,H as t,g as a}from"./p-e55c60b3.js";import{g as i}from"./p-891005fd.js";const d=class{constructor(r){e(this,r),this.shadow="stacked"}componentWillLoad(){"LD-CARD-STACK"===this.el.parentElement.tagName&&this.el.setAttribute("role","listitem")}render(){const e=i(["ld-card",this.size&&`ld-card--${this.size}`,this.shadow&&`ld-card--${this.shadow}`,this.shadowInteractive&&`ld-card--interactive-${this.shadowInteractive}`]);return r(t,{class:e},r("slot",null))}get el(){return a(this)}};d.style='.ld-card,:host{--ld-card-bg-col:var(--ld-col-wht);--ld-card-border-radius:var(--ld-br-l);--ld-card-padding:var(--ld-sp-32);--ld-card-padding-sm:var(--ld-sp-16);-webkit-appearance:none;appearance:none;background-color:var(--ld-card-bg-col);border:none;border-radius:var(--ld-card-border-radius);box-sizing:border-box;color:inherit;display:inline-grid;justify-items:flex-start;list-style:none;padding:var(--ld-card-padding);position:relative;text-decoration:none}.ld-card:after,.ld-card:before,:host:after,:host:before{border-radius:inherit;box-shadow:var(--ld-shadow-stacked);content:"";inset:0;pointer-events:none;position:absolute;transition:opacity .2s ease-out}.ld-card:after,:host:after{opacity:0}.ld-card--interactive-sticky:after,.ld-card--sticky:before,:host(.ld-card--interactive-sticky):after,:host(.ld-card--sticky):before{box-shadow:var(--ld-shadow-sticky)}.ld-card--hover:before,.ld-card--interactive-hover:after,:host(.ld-card--hover):before,:host(.ld-card--interactive-hover):after{box-shadow:var(--ld-shadow-hover)}.ld-card--active:before,.ld-card--interactive-active:after,:host(.ld-card--active):before,:host(.ld-card--interactive-active):after{box-shadow:var(--ld-shadow-active)}.ld-card--interactive-active:focus-within:before,.ld-card--interactive-active:hover:before,.ld-card--interactive-hover:focus-within:before,.ld-card--interactive-hover:hover:before,.ld-card--interactive-stacked:focus-within:before,.ld-card--interactive-stacked:hover:before,.ld-card--interactive-sticky:focus-within:before,.ld-card--interactive-sticky:hover:before,:host(.ld-card--interactive-active:focus-within):before,:host(.ld-card--interactive-active:hover):before,:host(.ld-card--interactive-hover:focus-within):before,:host(.ld-card--interactive-hover:hover):before,:host(.ld-card--interactive-stacked:focus-within):before,:host(.ld-card--interactive-stacked:hover):before,:host(.ld-card--interactive-sticky:focus-within):before,:host(.ld-card--interactive-sticky:hover):before{opacity:0}.ld-card--interactive-active:focus-within:after,.ld-card--interactive-active:hover:after,.ld-card--interactive-hover:focus-within:after,.ld-card--interactive-hover:hover:after,.ld-card--interactive-stacked:focus-within:after,.ld-card--interactive-stacked:hover:after,.ld-card--interactive-sticky:focus-within:after,.ld-card--interactive-sticky:hover:after,:host(.ld-card--interactive-active:focus-within):after,:host(.ld-card--interactive-active:hover):after,:host(.ld-card--interactive-hover:focus-within):after,:host(.ld-card--interactive-hover:hover):after,:host(.ld-card--interactive-stacked:focus-within):after,:host(.ld-card--interactive-stacked:hover):after,:host(.ld-card--interactive-sticky:focus-within):after,:host(.ld-card--interactive-sticky:hover):after{opacity:1}.ld-card--sm,:host(.ld-card--sm){padding:var(--ld-card-padding-sm)}';export{d as ld_card}