import{d as m,o as p,c as _,w as s,q as i,C as g,e as n,u as r,E as x,F as E}from"./index-DhSvsdrQ.js";import{E as C,_ as V}from"./constants-CQ5zuKiP.js";const k=m({__name:"responsive-col",props:{xs:{},sm:{},md:{default:12},lg:{default:8},xl:{default:6}},setup(l){return(e,o)=>{const a=C;return p(),_(a,{span:24,xs:e.xs,sm:e.sm,md:e.md,lg:e.lg,xl:e.xl},{default:s(()=>[i(e.$slots,"default")]),_:3},8,["xs","sm","md","lg","xl"])}}}),q=m({__name:"id-editor",props:{formData:{}},setup(l){const o=g(l,"formData");return(a,t)=>{const d=V,u=x,c=E;return p(),_(c,{prop:"id",rules:[{required:!0,message:"必填项"}]},{label:s(()=>[n(d,{label:"唯一标识符"})]),default:s(()=>[n(u,{modelValue:r(o).id,"onUpdate:modelValue":t[0]||(t[0]=f=>r(o).id=f),readonly:""},null,8,["modelValue"])]),_:1})}}});export{k as _,q as a};
