import{d as N,u as s,i as $,o as i,c as l,w as g,a as y,b as f,m as v,n as A,r as k,V as h,e as w,f as m,g as d,h as P,j as T,k as V,t as B,S as K,l as L,_ as M}from"./index-q762oY3o.js";import{E as j,a as G}from"./index-Bqwyt_Tp.js";function I(p){var a,u,r,c;return{flex:(a=p.options)!=null&&a.width?`0 0 ${(u=p.options)==null?void 0:u.width}`:"1",width:(r=p.options)==null?void 0:r.width,minHeight:(c=p.options)==null?void 0:c.height}}const H=N({__name:"row-col",props:{data:{},isActive:{type:Boolean}},setup(p){return(a,u)=>{var _,e,t;const r=j,c=G;return s($)(a.data)?(i(),l(c,{key:0,gutter:(_=a.data.options)==null?void 0:_.rowGutter,justify:(e=a.data.options)==null?void 0:e.rowJustify},{default:g(()=>{var o;return[y(s(f),v({list:(o=a.data.options)==null?void 0:o.components,"component-data":{type:"transition-group"}},{animation:300,group:"design-skeleton-draggable"},{"item-key":"id"}),{item:g(({element:n})=>{var C,O,D,R,S,b,E;return[y(r,{span:(C=n.options)==null?void 0:C.colSpan,xs:(O=n.options)==null?void 0:O.colXs,sm:(D=n.options)==null?void 0:D.colSm,md:(R=n.options)==null?void 0:R.colMd,lg:(S=n.options)==null?void 0:S.colLg,xl:(b=n.options)==null?void 0:b.colXl,class:A({"col-inline":(E=a.data.options)==null?void 0:E.inline})},{default:g(()=>[(i(),l(k(s(h)[n.type]),{data:n,"is-active":s(w)(n.id,s(m)().activeDesignData)},null,8,["data","is-active"]))]),_:2},1032,["span","xs","sm","md","lg","xl","class"])]}),_:1},16,["list"])]}),_:1},8,["gutter","justify"])):(i(),l(s(f),v({key:1,list:(t=a.data.options)==null?void 0:t.components,"component-data":{type:"transition-group"}},{animation:300,group:"design-skeleton-draggable"},{"item-key":"id"}),{item:g(({element:o})=>[d("div",{class:"group-item",style:P(s(I)(o))},[(i(),l(k(s(h)[o.type]),{data:o,"is-active":s(w)(o.id,s(m)().activeDesignData)},null,8,["data","is-active"]))],4)]),_:1},16,["list"]))}}}),z={class:"header"},F={class:"main"},U={class:"footer"},X=N({__name:"design-skeleton",props:{data:{},classList:{},isActive:{type:Boolean},shortcutKeyOptions:{}},setup(p){const a=T();function u(e,t){let o=[];return e&&o.push(e),t&&o.push(t),o}function r(e){if(e.type==="Project")return`${e.label} / ${e.options.name??""}`;if(e.type==="RowCol"){if($(e))return`${e.label}-Row`;{const{designData:t}=m(),o=L(e,t);return`${e.label}-Col-${o+1}`}}return`${e.label}-${e.type}`}function c(e){var t;e.stopPropagation(),(t=a.value)==null||t.classList.add("hover")}function _(e){var t;e.stopPropagation(),(t=a.value)==null||t.classList.remove("hover")}return(e,t)=>{var o;return i(),V("div",{ref_key:"skeletonRef",ref:a,class:A(["design-skeleton",u(e.classList,[{"is-active":e.isActive}])]),onMouseover:c,onMouseout:_},[d("div",z,[d("label",null,B(r(e.data)),1)]),d("div",F,[e.data.type==="RowCol"?(i(),l(H,{key:0,data:e.data,"is-active":e.isActive},null,8,["data","is-active"])):(i(),l(s(f),v({key:1,list:(o=e.data.options)==null?void 0:o.components,"component-data":{type:"transition-group"}},{animation:300,group:"design-skeleton-draggable"},{"item-key":"id"}),{item:g(({element:n})=>[d("div",{class:"group-item",style:P(s(I)(n))},[(i(),l(k(s(h)[n.type]),{data:n,"is-active":s(w)(n.id,s(m)().activeDesignData)},null,8,["data","is-active"]))],4)]),_:1},16,["list"]))]),d("div",U,[y(s(K),{options:e.shortcutKeyOptions,data:e.data},null,8,["options","data"])])],34)}}}),q=M(X,[["__scopeId","data-v-284a439e"]]),Q=[{keys:["Delete"]},{keys:["V","A"]},{keys:["V","D"]}],W=[{keys:["Delete"]},{keys:["V","D"]}];export{Q as S,q as _,W as a};