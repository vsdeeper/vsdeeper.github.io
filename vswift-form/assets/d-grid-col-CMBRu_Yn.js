import{a7 as N,a8 as n,b2 as r,d as m,R as w,S as c,M as v,b3 as g,b4 as x,o as p,b as h,w as $,$ as C,V as j,g as f,aE as L,b1 as D,N as E,an as O,i as k,r as B,J as y,e as S,aQ as V,F,_ as I}from"./index-BaHOnCAb.js";import{r as K}from"./constants-0YSy3Igo.js";const P=N({tag:{type:String,default:"div"},span:{type:Number,default:24},offset:{type:Number,default:0},pull:{type:Number,default:0},push:{type:Number,default:0},xs:{type:n([Number,Object]),default:()=>r({})},sm:{type:n([Number,Object]),default:()=>r({})},md:{type:n([Number,Object]),default:()=>r({})},lg:{type:n([Number,Object]),default:()=>r({})},xl:{type:n([Number,Object]),default:()=>r({})}}),R=m({name:"ElCol"}),U=m({...R,props:P,setup(u){const s=u,{gutter:o}=w(K,{gutter:c(()=>0)}),a=v("col"),_=c(()=>{const e={};return o.value&&(e.paddingLeft=e.paddingRight=`${o.value/2}px`),e}),d=c(()=>{const e=[];return["span","offset","pull","push"].forEach(t=>{const l=s[t];g(l)&&(t==="span"?e.push(a.b(`${s[t]}`)):l>0&&e.push(a.b(`${t}-${s[t]}`)))}),["xs","sm","md","lg","xl"].forEach(t=>{g(s[t])?e.push(a.b(`${t}-${s[t]}`)):x(s[t])&&Object.entries(s[t]).forEach(([l,b])=>{e.push(l!=="span"?a.b(`${t}-${l}-${b}`):a.b(`${t}-${b}`))})}),o.value&&e.push(a.is("guttered")),[a.b(),e]});return(e,i)=>(p(),h(D(e.tag),{class:j(f(d)),style:L(f(_))},{default:$(()=>[C(e.$slots,"default")]),_:3},8,["class","style"]))}});var G=E(U,[["__file","col.vue"]]);const J=O(G),M={class:"col-inner"},Q={class:"col-widget"},T=m({__name:"d-grid-col",props:{formData:{},designData:{}},setup(u){const s=u,o=c(()=>s.formData);return(a,_)=>{const d=J;return p(!0),k(F,null,B(a.designData,e=>(p(),h(d,{class:"my-col",key:e.id},{default:$(()=>[y("div",M,[y("div",Q,[S(V,{widgetList:e.widgetList,"onUpdate:widgetList":i=>e.widgetList=i,"form-data":f(o),where:"grid-col"},null,8,["widgetList","onUpdate:widgetList","form-data"])])])]),_:2},1024))),128)}}}),W=I(T,[["__scopeId","data-v-20dc70e7"]]);export{W as default};
