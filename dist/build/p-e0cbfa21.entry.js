import{r as l,c as t,h as o,H as d,g as e}from"./p-e55c60b3.js";import{g as i}from"./p-891005fd.js";import{c as a}from"./p-0c5b1c57.js";import{r as n}from"./p-20ac0292.js";const r=class{constructor(o){l(this,o),this.ldmodalopening=t(this,"ldmodalopening",7),this.ldmodalopened=t(this,"ldmodalopened",7),this.ldmodalclosing=t(this,"ldmodalclosing",7),this.ldmodalclosed=t(this,"ldmodalclosed",7),this.cancelable=!0,this.blurryBackdrop=!1,this.handleClose=()=>{this.open=!1},this.handleCancel=l=>{this.cancelable||l.preventDefault()},this.handleClick=l=>{this.cancelable&&"DIALOG"===l.target.tagName&&this.close()},this.handleTransitionEnd=()=>{this.open?this.ldmodalopened.emit():this.ldmodalclosed.emit()}}async showModal(){this.open=!0}async close(){this.open=!1}handleKeyDown(l){"Escape"===l.key&&this.cancelable&&(this.open=!1)}onOpenChange(l){l?(this.dialogRef.showModal(),this.ldmodalopening.emit()):(this.dialogRef.close(),this.ldmodalclosing.emit())}componentDidLoad(){this.dialogRef.addEventListener("cancel",this.handleCancel)}disconnectedCallback(){this.dialogRef.removeEventListener("cancel",this.handleCancel)}render(){const l=i(["ld-modal",this.blurryBackdrop&&"ld-modal--blurry-backdrop"]);return o(d,{class:l},o("dialog",{onClick:this.handleClick,onClose:this.handleClose,onTransitionEnd:this.handleTransitionEnd,open:this.open,part:"dialog",ref:l=>this.dialogRef=l},o("header",{class:"ld-modal__header",part:"header"},o("slot",{name:"header"}),this.cancelable&&o("button",{class:"ld-modal__x","aria-label":"Dismiss",onClick:this.close.bind(this)})),o("div",{class:"ld-modal__content",part:"content"},o("slot",null)),o("footer",{class:"ld-modal__footer",part:"footer"},o("slot",{name:"footer"}))))}get el(){return e(this)}static get watchers(){return{open:["onOpenChange"]}}};r.style=':host{display:contents}@keyframes ld-modal-in{0%{transform:translateY(2rem)}to{transform:translateY(0)}}@keyframes ld-modal-out{0%{transform:scale(1)}to{transform:scale(.9)}}@keyframes ld-modal-out-mobile{0%{transform:translateY(0)}to{transform:translateY(2rem)}}:host,dialog.ld-modal{--ld-modal-bg-col:var(--ld-col-wht);--ld-modal-fixed-padding-x:var(--ld-sp-16);--ld-modal-fixed-padding-y:var(--ld-sp-16);--ld-modal-padding-x:var(--ld-sp-16);--ld-modal-padding-y:var(--ld-sp-24);--ld-modal-fixed-bg-col:var(--ld-col-neutral-010);--ld-modal-transition-duration:0.001s;--ld-modal-max-inline-size:30rem;--ld-modal-max-block-size:70rem;--ld-modal-min-inline-size:18rem}@media (prefers-reduced-motion:no-preference){:host,dialog.ld-modal{--ld-modal-transition-duration:0.2s}}:host dialog,dialog.ld-modal{animation:ld-modal-in var(--ld-modal-transition-duration) ease-out forwards;border:0;border-radius:var(--ld-br-l);box-shadow:var(--ld-shadow-active);color:var(--ld-col-neutral-900);color-scheme:var(--ld-modal-color-scheme,none);display:flex;flex-direction:column;inset:0;margin:auto;max-block-size:min(calc(100% - var(--ld-sp-24) - var(--ld-sp-40)),var(--ld-modal-max-block-size));max-inline-size:min(calc(100% - var(--ld-sp-32)),var(--ld-modal-max-inline-size));min-inline-size:var(--ld-modal-min-inline-size);overflow:visible;padding:0;position:fixed;transition:opacity var(--ld-modal-transition-duration) linear,transform var(--ld-modal-transition-duration) ease;z-index:2147483647}@media (max-width:32rem){:host dialog,dialog.ld-modal{margin-bottom:var(--ld-sp-40)}}:host dialog:not([open]),dialog.ld-modal:not([open]){animation:ld-modal-out var(--ld-modal-transition-duration) ease-in forwards;opacity:0;pointer-events:none;transition:opacity var(--ld-modal-transition-duration) linear,visibility 0s var(--ld-modal-transition-duration) linear,transform var(--ld-modal-transition-duration) ease;visibility:hidden}@media (max-width:32rem){:host dialog:not([open]),dialog.ld-modal:not([open]){animation-name:ld-modal-out-mobile}}:host dialog:after,dialog.ld-modal:after{background-color:var(--ld-modal-bg-col);border-radius:inherit;content:"";inset:0;position:absolute;z-index:-1}:host dialog:before,dialog.ld-modal:before{background-color:var(--ld-thm-primary-active);content:"";inset:0;opacity:.3;position:fixed;transform:scale(99);z-index:-2}:host(.ld-modal--blurry-backdrop) dialog::-webkit-backdrop,dialog.ld-modal--blurry-backdrop::-webkit-backdrop{-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px)}:host(.ld-modal--blurry-backdrop) dialog::backdrop,dialog.ld-modal--blurry-backdrop::backdrop{-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px)}.ld-modal__x{align-self:flex-start;-webkit-appearance:none;appearance:none;background-color:initial;border:var(--ld-sp-8) solid #0000;box-sizing:border-box;cursor:pointer;display:inline-flex;height:3rem;justify-self:flex-end;margin:auto calc(var(--ld-sp-16)*-1) auto auto;overflow:hidden;position:relative;width:3rem}.ld-modal__x:after,.ld-modal__x:before{background-color:var(--ld-col-neutral-900);border-radius:1rem;content:"";display:block;height:1.25rem;left:50%;position:absolute;top:50%;width:.15rem}.ld-modal__x:before{transform:translateX(-50%) translateY(-50%) rotate(45deg)}.ld-modal__x:after{transform:translateX(-50%) translateY(-50%) rotate(-45deg)}.ld-modal__content{flex-grow:1;overflow-x:hidden;overflow-y:auto;overflow:hidden auto;overscroll-behavior:none;padding:var(--ld-modal-padding-y) var(--ld-modal-padding-x)}.ld-modal__footer,.ld-modal__header{align-items:center;background-color:var(--ld-modal-fixed-bg-col);display:grid;gap:var(--ld-modal-fixed-padding-x);grid-auto-flow:column;padding:0 var(--ld-modal-fixed-padding-x)}.ld-modal__header{border-radius:var(--ld-br-l) var(--ld-br-l) 0 0}.ld-modal__header>::slotted(:not(.ld-modal__x)),.ld-modal__header>:not(.ld-modal__x){padding:var(--ld-sp-12) 0}.ld-modal__footer{border-radius:0 0 var(--ld-br-l) var(--ld-br-l);justify-content:flex-end}.ld-modal__footer>*,.ld-modal__footer>::slotted(*){margin:var(--ld-modal-fixed-padding-y) 0}';const s=class{constructor(o){l(this,o),this.ldchange=t(this,"ldchange",7),this.ldinput=t(this,"ldinput",7),this.checked=!1,this.handleChange=l=>{this.el.dispatchEvent(new InputEvent("change",l)),this.ldchange.emit(this.checked)},this.handleClick=l=>{this.ariaDisabled?l.preventDefault():(this.checked=!this.checked,l.isTrusted||(this.el.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.handleInput(),this.el.dispatchEvent(new InputEvent("change",{bubbles:!0})),this.ldchange.emit(this.checked)))},this.handleInput=()=>{this.ldinput.emit(this.checked)}}async focusInner(){void 0!==this.input&&this.input.focus()}updateHiddenInput(){const l=this.el.closest("form");if(!this.hiddenInput&&this.name&&(l||this.form)&&this.createHiddenInput(),this.hiddenInput){if(!this.name)return this.hiddenInput.remove(),void(this.hiddenInput=void 0);this.hiddenInput.name=this.name,this.hiddenInput.checked=this.checked,this.value?this.hiddenInput.value=this.value:this.hiddenInput.removeAttribute("value"),this.form?this.hiddenInput.setAttribute("form",this.form):this.hiddenInput.getAttribute("form")&&(l?this.hiddenInput.removeAttribute("form"):(this.hiddenInput.remove(),this.hiddenInput=void 0))}}createHiddenInput(){this.hiddenInput=document.createElement("input"),this.hiddenInput.type="checkbox",this.hiddenInput.style.visibility="hidden",this.hiddenInput.style.position="absolute",this.hiddenInput.style.pointerEvents="none",this.el.appendChild(this.hiddenInput)}componentWillLoad(){this.attributesObserver=a.call(this,["size"]),this.hasIcons=!!this.el.querySelector('[slot="icon-start"]')||!!this.el.querySelector('[slot="icon-end"]');const l=this.el.closest("form");this.name&&(l||this.form)&&(this.createHiddenInput(),this.hiddenInput.checked=this.checked,this.hiddenInput.name=this.name,this.form&&this.hiddenInput.setAttribute("form",this.form),this.value&&(this.hiddenInput.value=this.value)),n(this.autofocus)}disconnectedCallback(){var l;null===(l=this.attributesObserver)||void 0===l||l.disconnect()}render(){return o(d,{class:i(["ld-toggle","lg"===this.size&&"ld-toggle--lg",this.hasIcons&&"ld-toggle--with-icons"]),onClick:this.handleClick},o("input",Object.assign({},this.clonedAttributes,{"aria-disabled":this.ariaDisabled,checked:this.checked,disabled:this.disabled,onChange:this.handleChange,onInput:this.handleInput,part:"input focusable",ref:l=>this.input=l,required:this.required,tabIndex:this.ldTabindex,type:"checkbox",value:this.value})),o("span",{class:"ld-toggle__knob",part:"knob"}),this.hasIcons&&o("div",{class:"ld-toggle__icon-start",part:"icon-wrapper icon-wrapper-start"},o("slot",{name:"icon-start"})),this.hasIcons&&o("div",{class:"ld-toggle__icon-end",part:"icon-wrapper icon-wrapper-end"},o("slot",{name:"icon-end"})))}get el(){return e(this)}static get watchers(){return{checked:["updateHiddenInput"],name:["updateHiddenInput"],value:["updateHiddenInput"]}}};s.style=".ld-toggle,:host{--ld-toggle-height:2rem;--ld-toggle-width:3.375rem;--ld-toggle-inner-space:0.125rem;--ld-toggle-with-icons-width:4.5rem;--ld-toggle-lg-height:2.5rem;--ld-toggle-lg-width:4.1875rem;--ld-toggle-lg-inner-space:0.1875rem;--ld-toggle-lg-with-icons-width:6rem;--ld-toggle-border-radius:var(--ld-br-full);--ld-toggle-knob-border-radius:var(--ld-br-full);--ld-toggle-input-bg-col:var(--ld-col-neutral-600);--ld-toggle-icon-start-col:var(--ld-col-wht);--ld-toggle-icon-end-col:var(--ld-col-neutral-900);--ld-toggle-knob-bg-col:var(--ld-col-wht);--ld-toggle-checked-icon-start-col:var(--ld-col-neutral-900);--ld-toggle-checked-icon-end-col:var(--ld-col-wht);--ld-toggle-disabled-input-bg-col:var(--ld-col-neutral-050);--ld-toggle-disabled-icon-col:var(--ld-col-neutral-200);--ld-toggle-disabled-knob-bg-col:var(--ld-col-wht);--ld-toggle-with-icons-input-bg-col:var(--ld-col-neutral-100);--ld-toggle-with-icons-disabled-input-bg-col:var(--ld-col-neutral-050);--ld-toggle-checked-bg-col:var(--ld-thm-primary);--ld-toggle-invalid-input-bg-col:var(--ld-thm-error);--ld-toggle-invalid-knob-bg-col:var(--ld-thm-error);--ld-toggle-with-icons-knob-col:var(--ld-thm-primary);align-items:center;display:flex;height:var(--ld-toggle-height);min-width:auto!important;position:relative;width:var(--ld-toggle-width)}.ld-toggle input,:host input{-webkit-appearance:none;appearance:none;background-color:var(--ld-toggle-input-bg-col);border-radius:var(--ld-toggle-border-radius);height:100%;margin:0;position:absolute;transition:background-color .2s ease-in-out;width:100%;z-index:0}.ld-toggle input:not(:disabled):not([aria-disabled=true]),:host input:not(:disabled):not([aria-disabled=true]){cursor:pointer}.ld-toggle input:checked,:host input:checked{background-color:var(--ld-toggle-checked-bg-col)}.ld-toggle input:checked:disabled,.ld-toggle input:checked[aria-disabled=true],:host input:checked:disabled,:host input:checked[aria-disabled=true]{background-color:var(--ld-toggle-disabled-input-bg-col)}.ld-toggle input:checked~.ld-toggle__knob,:host input:checked~.ld-toggle__knob{transform:translateX(calc(var(--ld-toggle-width) - var(--ld-toggle-height)))}.ld-toggle input:checked~.ld-toggle__icon-start,:host input:checked~.ld-toggle__icon-start{color:var(--ld-toggle-checked-icon-start-col)}.ld-toggle input:checked~.ld-toggle__icon-end,:host input:checked~.ld-toggle__icon-end{color:var(--ld-toggle-checked-icon-end-col)}.ld-toggle input:disabled,.ld-toggle input[aria-disabled=true],:host input:disabled,:host input[aria-disabled=true]{background-color:var(--ld-toggle-disabled-input-bg-col)}.ld-toggle input:disabled:checked~.ld-toggle__icon-end,.ld-toggle input:disabled:checked~.ld-toggle__icon-start,.ld-toggle input[aria-disabled=true]:checked~.ld-toggle__icon-end,.ld-toggle input[aria-disabled=true]:checked~.ld-toggle__icon-start,:host input:disabled:checked~.ld-toggle__icon-end,:host input:disabled:checked~.ld-toggle__icon-start,:host input[aria-disabled=true]:checked~.ld-toggle__icon-end,:host input[aria-disabled=true]:checked~.ld-toggle__icon-start{color:var(--ld-toggle-disabled-icon-col)}.ld-toggle input:disabled:not(:checked)~.ld-toggle__icon-end,.ld-toggle input:disabled:not(:checked)~.ld-toggle__icon-start,.ld-toggle input[aria-disabled=true]:not(:checked)~.ld-toggle__icon-end,.ld-toggle input[aria-disabled=true]:not(:checked)~.ld-toggle__icon-start,:host input:disabled:not(:checked)~.ld-toggle__icon-end,:host input:disabled:not(:checked)~.ld-toggle__icon-start,:host input[aria-disabled=true]:not(:checked)~.ld-toggle__icon-end,:host input[aria-disabled=true]:not(:checked)~.ld-toggle__icon-start{color:var(--ld-toggle-disabled-icon-col)}.ld-toggle .ld-toggle__knob,:host .ld-toggle__knob{background-color:var(--ld-toggle-knob-bg-col);border-radius:var(--ld-toggle-knob-border-radius);display:block;height:calc(var(--ld-toggle-height) - var(--ld-toggle-inner-space)*2);margin:var(--ld-toggle-inner-space);pointer-events:none;transition:transform .2s ease-in-out;width:calc(var(--ld-toggle-height) - var(--ld-toggle-inner-space)*2);z-index:1}.ld-toggle input:where(:not(:disabled):not([aria-disabled=true])):invalid,:host input:where(:not(:disabled):not([aria-disabled=true])):invalid{background-color:var(--ld-toggle-invalid-input-bg-col)}.ld-toggle--lg,:host(.ld-toggle--lg){--ld-toggle-height:var(--ld-toggle-lg-height);--ld-toggle-width:var(--ld-toggle-lg-width);--ld-toggle-inner-space:var(--ld-toggle-lg-inner-space)}.ld-toggle--lg.ld-toggle--with-icons,:host(.ld-toggle--lg.ld-toggle--with-icons){--ld-toggle-width:var(--ld-toggle-lg-with-icons-width)}.ld-toggle--lg.ld-toggle--with-icons .ld-toggle__icon-end,.ld-toggle--lg.ld-toggle--with-icons .ld-toggle__icon-start,:host(.ld-toggle--lg.ld-toggle--with-icons) .ld-toggle__icon-end,:host(.ld-toggle--lg.ld-toggle--with-icons) .ld-toggle__icon-start{margin:auto .75rem}.ld-toggle--with-icons,:host(.ld-toggle--with-icons){--ld-toggle-width:var(--ld-toggle-with-icons-width)}.ld-toggle--with-icons input:not(:disabled),:host(.ld-toggle--with-icons) input:not(:disabled){background-color:var(--ld-toggle-with-icons-input-bg-col)}.ld-toggle--with-icons input:invalid~.ld-toggle__knob,:host(.ld-toggle--with-icons) input:invalid~.ld-toggle__knob{background-color:var(--ld-toggle-invalid-knob-bg-col)}.ld-toggle--with-icons input:disabled,.ld-toggle--with-icons input[aria-disabled=true],:host(.ld-toggle--with-icons) input:disabled,:host(.ld-toggle--with-icons) input[aria-disabled=true]{background-color:var(--ld-toggle-with-icons-disabled-input-bg-col)}.ld-toggle--with-icons input:disabled~.ld-toggle__knob,.ld-toggle--with-icons input[aria-disabled=true]~.ld-toggle__knob,:host(.ld-toggle--with-icons) input:disabled~.ld-toggle__knob,:host(.ld-toggle--with-icons) input[aria-disabled=true]~.ld-toggle__knob{background-color:var(--ld-toggle-disabled-knob-bg-col)}.ld-toggle--with-icons .ld-toggle__knob,:host(.ld-toggle--with-icons) .ld-toggle__knob{background-color:var(--ld-toggle-with-icons-knob-col)}.ld-toggle--with-icons .ld-toggle__icon-end,.ld-toggle--with-icons .ld-toggle__icon-start,:host(.ld-toggle--with-icons) .ld-toggle__icon-end,:host(.ld-toggle--with-icons) .ld-toggle__icon-start{margin:auto .5rem}.ld-toggle__icon-end,.ld-toggle__icon-start{align-items:center;display:flex;pointer-events:none;position:absolute;transition:color .2s ease-in-out;z-index:1}.ld-toggle__icon-end:empty,.ld-toggle__icon-start:empty{display:none}.ld-toggle__icon-start{color:var(--ld-toggle-icon-start-col);left:0}.ld-toggle__icon-end{color:var(--ld-toggle-icon-end-col);right:0}";export{r as ld_modal,s as ld_toggle}