var t,n;!function(t){t.open="NAV_OPEN",t.close="NAV_CLOSE"}(t||(t={})),function(t){t.open="SEARCH_OPEN",t.close="SEARCH_CLOSE"}(n||(n={}));const e=new class{constructor(t=""){this.eventTarget=document.appendChild(document.createComment(t))}on(t,n){this.eventTarget.addEventListener(t,n)}once(t,n){this.eventTarget.addEventListener(t,n,{once:!0})}off(t,n){this.eventTarget.removeEventListener(t,n)}emit(t,n){return this.eventTarget.dispatchEvent(new CustomEvent(t,{detail:n}))}}("event bus");export{t as N,n as S,e}