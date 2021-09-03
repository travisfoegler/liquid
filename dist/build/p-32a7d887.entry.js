import{r as o,h as a,H as s}from"./p-694e6e18.js";import{e as d,N as c}from"./p-952a4d76.js";const n=class{constructor(a){o(this,a),this.isNavOpen=!1}onNavOpen(){this.isNavOpen=!0,document.getElementById("main").setAttribute("inert","true")}onNavClose(){this.isNavOpen=!1,document.getElementById("main").removeAttribute("inert")}handleResize(){window.matchMedia("(max-width: 48rem)").matches?this.isNavOpen&&document.getElementById("main").setAttribute("inert","true"):document.getElementById("main").removeAttribute("inert")}handleClick(o){const a=o.target.closest("a");a&&(window.location.href=a.href)}componentDidLoad(){d.on(c.open,this.onNavOpen.bind(this)),d.on(c.close,this.onNavClose.bind(this))}render(){return a(s,{class:"docs-nav",id:"sidenav-open"},a("div",{class:"docs-nav__content"},a("div",{class:"docs-nav__section"},a("docs-switch-dark-light",null),a("docs-btn-search",null)),a("div",{class:"docs-nav__section"},a("nav",{class:"docs-nav__nav",role:"navigation"},a("slot",null)))))}static get assetsDirs(){return["assets"]}};n.style='.docs-nav__content{box-shadow:var(--ld-sp-1) 0 0 0 var(--ld-col-rblck1)}.docs-nav:before,.docs-nav__content{background-color:var(--ld-col-bg-lg)}.docs-nav__section{border-bottom-color:var(--ld-col-rblck1)}.docs-nav__li .docs-nav__li{color:var(--ld-col-rblck4)}.docs-nav__li .docs-nav__li.docs-nav__li--active,.docs-nav__li .docs-nav__li:hover{color:var(--ld-col-rblck-default)}@media (prefers-color-scheme:dark){.docs-nav__content{box-shadow:var(--ld-sp-1) 0 0 0 var(--ld-col-rblck4)}.docs-nav:before,.docs-nav__content{background-color:var(--ld-col-rblck-default)}.docs-nav__section{border-bottom-color:var(--ld-col-rblck5)}.docs-nav__li .docs-nav__li{color:var(--ld-col-rblck1)}.docs-nav__li .docs-nav__li.docs-nav__li--active,.docs-nav__li .docs-nav__li:hover{color:var(--ld-col-wht)}}.docs-ui-dark .docs-nav__content{box-shadow:var(--ld-sp-1) 0 0 0 var(--ld-col-rblck4)}.docs-ui-dark .docs-nav:before,.docs-ui-dark .docs-nav__content{background-color:var(--ld-col-rblck-default)}.docs-ui-dark .docs-nav__section{border-bottom-color:var(--ld-col-rblck5)}.docs-ui-dark .docs-nav__li .docs-nav__li{color:var(--ld-col-rblck1)}.docs-ui-dark .docs-nav__li .docs-nav__li.docs-nav__li--active,.docs-ui-dark .docs-nav__li .docs-nav__li:hover{color:var(--ld-col-wht)}.docs-ui-light .docs-nav__content{box-shadow:var(--ld-sp-1) 0 0 0 var(--ld-col-rblck1)}.docs-ui-light .docs-nav:before,.docs-ui-light .docs-nav__content{background-color:var(--ld-col-bg-lg)}.docs-ui-light .docs-nav__section{border-bottom-color:var(--ld-col-rblck1)}.docs-ui-light .docs-nav__li .docs-nav__li{color:var(--ld-col-rblck4)}.docs-ui-light .docs-nav__li .docs-nav__li.docs-nav__li--active,.docs-ui-light .docs-nav__li .docs-nav__li:hover{color:var(--ld-col-rblck-default)}.docs-nav{font:var(--ld-typo-body-s);overscroll-behavior:contain;overflow-x:hidden;overflow-y:auto;overflow:hidden auto;z-index:2;flex-shrink:0}.docs-nav:before{content:"";position:fixed;height:100%;left:0;z-index:-1;display:block;width:calc(50vw - var(--docs-max-width)/2 + 2rem)}.docs-nav ul{list-style:none}.docs-nav details[open] summary:after{transform:rotate(90deg)}.docs-nav .docs-switch-dark-light{margin-bottom:var(--ld-sp-32);display:block}.docs-nav__content{width:var(--docs-nav-width);position:fixed;height:calc(100% - var(--docs-topbar-height));overflow-x:hidden;overflow-y:auto;overflow:hidden auto;overscroll-behavior:contain;padding:var(--ld-sp-24) var(--ld-sp-24) var(--ld-sp-24) var(--ld-sp-32)}@media (max-width:48rem){.docs-nav__content{position:fixed}}.docs-nav__section{padding:var(--ld-sp-24) var(--ld-sp-8) var(--ld-sp-24) 0;border-bottom-style:solid;border-bottom-width:var(--ld-sp-1)}.docs-nav__section:first-of-type{padding-top:0}.docs-nav__section:last-of-type{padding-bottom:0;border-bottom:0}.docs-nav__nav{padding-left:var(--ld-sp-40)}.docs-nav__nav>ul>li:first-of-type{margin-top:0}.docs-nav__summary{position:relative;font:var(--ld-typo-label-s);cursor:pointer;text-transform:uppercase;font-weight:700;display:inline-block;margin:var(--ld-sp-24) 0 var(--ld-sp-6);width:100%;-webkit-user-select:none;user-select:none;outline:none}.docs-nav__summary::-webkit-details-marker,.docs-nav__summary::marker{display:none}.docs-nav__summary:after{right:0;top:calc(var(--ld-sp-1)*-1);background-image:url(dist/build/assets/chevron.svg);background-repeat:no-repeat;background-position:50%;width:.8rem;height:1rem;display:inline-flex;align-items:center;justify-content:center}.docs-nav__summary:after,.docs-nav__summary:before{content:"";position:absolute}.docs-nav__summary:before{width:var(--ld-sp-24);height:var(--ld-sp-24);transform:translate(-170%,-15%);outline:none;opacity:.5}.docs-nav__li--active .docs-nav__summary:before{opacity:1}body:not(.safari) .docs-nav__summary:focus:focus-visible{outline:auto;outline:5px auto -webkit-focus-ring-color}.docs-nav__summary--introduction:before{background-image:url(dist/build/assets/introduction.svg)}.docs-nav__summary--components:before{background-image:url(dist/build/assets/components.svg)}.docs-nav__summary--global:before,.docs-nav__summary--globals:before{background-image:url(dist/build/assets/global.svg)}.docs-nav__li{margin-top:var(--ld-sp-12)}.docs-nav__li--active>a{font-weight:700}';export{n as docs_nav}