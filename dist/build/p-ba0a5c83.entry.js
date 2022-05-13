import{r as a,c as o,h as d,H as l,g as i}from"./p-24a1cdec.js";import{g as r}from"./p-891005fd.js";const t=class{constructor(d){a(this,d),this.ldmodalopening=o(this,"ldmodalopening",7),this.ldmodalopened=o(this,"ldmodalopened",7),this.ldmodalclosing=o(this,"ldmodalclosing",7),this.ldmodalclosed=o(this,"ldmodalclosed",7),this.cancelable=!0,this.blurryBackdrop=!1,this.handleClose=()=>{this.open=!1},this.handleCancel=a=>{this.cancelable||a.preventDefault()},this.handleClick=a=>{this.cancelable&&"DIALOG"===a.target.tagName&&this.close()},this.handleTransitionEnd=()=>{this.open?this.ldmodalopened.emit():this.ldmodalclosed.emit()}}async showModal(){this.open=!0}async close(){this.open=!1}handleKeyDown(a){"Escape"===a.key&&this.cancelable&&(this.open=!1)}onOpenChange(a){a?(this.dialogRef.showModal(),this.ldmodalopening.emit()):(this.dialogRef.close(),this.ldmodalclosing.emit())}componentDidLoad(){this.dialogRef.addEventListener("cancel",this.handleCancel)}disconnectedCallback(){this.dialogRef.removeEventListener("cancel",this.handleCancel)}render(){const a=r(["ld-modal",this.blurryBackdrop&&"ld-modal--blurry-backdrop"]);return d(l,{class:a},d("dialog",{onClick:this.handleClick,onClose:this.handleClose,onTransitionEnd:this.handleTransitionEnd,open:this.open,ref:a=>this.dialogRef=a},d("header",{class:"ld-modal__header",part:"header"},d("slot",{name:"header"}),this.cancelable&&d("button",{class:"ld-modal__x","aria-label":"Dismiss",onClick:this.close.bind(this)})),d("div",{class:"ld-modal__content",part:"content"},d("slot",null)),d("footer",{class:"ld-modal__footer",part:"footer"},d("slot",{name:"footer"}))))}get el(){return i(this)}static get watchers(){return{open:["onOpenChange"]}}};t.style=':host{display:contents}@keyframes ld-modal-in{0%{transform:translateY(2rem)}to{transform:translateY(0)}}@keyframes ld-modal-out{0%{transform:scale(1)}to{transform:scale(.9)}}@keyframes ld-modal-out-mobile{0%{transform:translateY(0)}to{transform:translateY(2rem)}}:host dialog,dialog.ld-modal{--ld-modal-bg-col:var(--ld-col-wht);--ld-modal-fixed-padding-x:var(--ld-sp-16);--ld-modal-fixed-padding-y:var(--ld-sp-16);--ld-modal-padding-x:var(--ld-sp-16);--ld-modal-padding-y:var(--ld-sp-24);--ld-modal-fixed-bg-col:var(--ld-col-neutral-010);--ld-modal-transition-duration:0.001s;--ld-modal-max-inline-size:30rem;--ld-modal-max-block-size:70rem;--ld-modal-min-inline-size:18rem}@media (prefers-reduced-motion:no-preference){:host dialog,dialog.ld-modal{--ld-modal-transition-duration:0.2s}}:host dialog,dialog.ld-modal{animation:ld-modal-in var(--ld-modal-transition-duration) ease-out forwards;border:0;border-radius:var(--ld-br-l);box-shadow:var(--ld-shadow-active);display:flex;flex-direction:column;inset:0;margin:auto;max-block-size:min(calc(100% - var(--ld-sp-24) - var(--ld-sp-40)),var(--ld-modal-max-block-size));max-inline-size:min(calc(100% - var(--ld-sp-32)),var(--ld-modal-max-inline-size));min-inline-size:var(--ld-modal-min-inline-size);overflow:visible;padding:0;position:fixed;transition:opacity var(--ld-modal-transition-duration) linear,transform var(--ld-modal-transition-duration) ease;z-index:2147483647}@media (max-width:32rem){:host dialog,dialog.ld-modal{margin-bottom:var(--ld-sp-40)}}:host dialog:not([open]),dialog.ld-modal:not([open]){animation:ld-modal-out var(--ld-modal-transition-duration) ease-in forwards;opacity:0;pointer-events:none;transition:opacity var(--ld-modal-transition-duration) linear,visibility 0s var(--ld-modal-transition-duration) linear,transform var(--ld-modal-transition-duration) ease;visibility:hidden}@media (max-width:32rem){:host dialog:not([open]),dialog.ld-modal:not([open]){animation-name:ld-modal-out-mobile}}:host dialog:after,dialog.ld-modal:after{background-color:var(--ld-modal-bg-col);border-radius:inherit;content:"";inset:0;position:absolute;z-index:-1}:host dialog:before,dialog.ld-modal:before{background-color:var(--ld-thm-primary-active);content:"";inset:0;opacity:.3;position:fixed;transform:scale(99);z-index:-2}:host(.ld-modal--blurry-backdrop) dialog::-webkit-backdrop,dialog.ld-modal--blurry-backdrop::-webkit-backdrop{-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px)}:host(.ld-modal--blurry-backdrop) dialog::backdrop,dialog.ld-modal--blurry-backdrop::backdrop{-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px)}.ld-modal__x{align-self:flex-start;-webkit-appearance:none;appearance:none;aspect-ratio:1;background-color:initial;border:var(--ld-sp-8) solid #0000;box-sizing:border-box;cursor:pointer;display:inline-flex;justify-self:flex-end;margin:var(--ld-sp-8) calc(var(--ld-sp-8)*-1) var(--ld-sp-8) auto;position:relative;width:var(--ld-sp-32)}.ld-modal__x:after,.ld-modal__x:before{background-color:var(--ld-col-neutral-900);border-radius:1rem;content:"";display:block;height:125%;left:50%;position:absolute;top:50%;width:.15rem}.ld-modal__x:before{transform:translateX(-50%) translateY(-50%) rotate(45deg)}.ld-modal__x:after{transform:translateX(-50%) translateY(-50%) rotate(-45deg)}.ld-modal__content{flex-grow:1;overflow-x:hidden;overflow-y:auto;overflow:hidden auto;overscroll-behavior:none;padding:var(--ld-modal-padding-y) var(--ld-modal-padding-x)}.ld-modal__footer,.ld-modal__header{align-items:center;background-color:var(--ld-modal-fixed-bg-col);display:grid;gap:var(--ld-modal-fixed-padding-x);grid-auto-flow:column;padding:0 var(--ld-modal-fixed-padding-x)}.ld-modal__header{border-radius:var(--ld-br-l) var(--ld-br-l) 0 0}.ld-modal__header>::slotted(:not(.ld-modal__x)),.ld-modal__header>:not(.ld-modal__x){padding:var(--ld-sp-12) 0}.ld-modal__footer{border-radius:0 0 var(--ld-br-l) var(--ld-br-l);justify-content:flex-end}.ld-modal__footer>*,.ld-modal__footer>::slotted(*){margin:var(--ld-modal-fixed-padding-y) 0}';export{t as ld_modal}