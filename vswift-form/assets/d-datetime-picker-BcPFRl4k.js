import{d as c,G as s,u as f,S as g,o as V,b as _,aN as k,g as m}from"./index-BaHOnCAb.js";import{E as v}from"./index-vAp6cOBT.js";import"./panel-time-pick-Abev_HwS.js";import"./arrays-D7PH7fAW.js";const h=c({__name:"d-datetime-picker",props:s({designData:{}},{modelValue:{},modelModifiers:{}}),emits:s(["change"],["update:modelValue"]),setup(e,{emit:l}){const d=e,p=l,o=f(e,"modelValue"),t=g(()=>d.designData.options);function r(a){p("change",a)}return(a,n)=>{const i=v;return V(),_(i,k({type:m(t).type??"datetime","value-format":"x"},m(t),{modelValue:o.value,"onUpdate:modelValue":n[0]||(n[0]=u=>o.value=u),onChange:r}),null,16,["type","modelValue"])}}});export{h as default};
