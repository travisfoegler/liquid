import{r as o,h as t}from"./p-e65bc256.js";import{c as i}from"./p-0152332d.js";let l=class{constructor(t){o(this,t)}async copyIdentifier(){await i(this.identifier),dispatchEvent(new CustomEvent("ldNotificationAdd",{detail:{content:`Copied "${this.identifier}" to clipboard.`,type:"info"}}))}render(){return t("ld-tooltip",{arrow:!0,class:"docs-icon__tooltip"},t("button",{class:"docs-icon",onClick:this.copyIdentifier.bind(this),slot:"trigger",type:"button"},t("ld-icon",{name:this.identifier,size:"lg"}),t("p",{class:"docs-icon__name"},this.name)),t("ld-typo",null,'Click to copy "',this.identifier,'" to clipboard.'))}};l.style=".docs-icon{align-items:center;background:var(--ld-col-wht);border:none;border-radius:var(--ld-br-l);color:var(--ld-col-neutral-900);cursor:pointer;display:flex;flex-direction:column;height:100%;padding:var(--ld-sp-24) var(--ld-sp-8) var(--ld-sp-8);width:6rem}.docs-icon__name{font:var(--ld-typo-label-s);margin-top:var(--ld-sp-16);text-align:center}.docs-icon__tooltip{display:contents}.docs-icon__tooltip>.ld-tooltip__trigger{height:100%}";export{l as docs_icon}