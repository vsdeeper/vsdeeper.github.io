import{d as S,G as f,u as w,S as d,aV as B,x as C,o as m,b as c,b5 as D,g as a,w as l,$ as n,i as E,r as M,F,aN as K,p as N,s as _}from"./index-BaHOnCAb.js";const L=S({__name:"d-select",props:f({designData:{}},{modelValue:{},modelModifiers:{}}),emits:f(["change"],["update:modelValue"]),setup(i,{emit:v}){const b=i,g=v,r=w(i,"modelValue"),o=d(()=>b.designData.options),y=d(()=>{var e;return((e=o.value.map)==null?void 0:e.label)??"label"}),u=d(()=>{var e;return((e=o.value.map)==null?void 0:e.value)??"value"}),t=B();C(()=>o.value.defaultValue,e=>{r.value=e},{immediate:!0});function k(e){g("change",e)}function V(e){return e.valueType==="number"?Number(e[u.value]):e[u.value]}return(e,p)=>{const $=N,h=_;return m(),c(h,K({clearable:a(o).clearable??!0,filterable:a(o).filterable??!0},a(o),{modelValue:r.value,"onUpdate:modelValue":p[0]||(p[0]=s=>r.value=s),onChange:k}),D({default:l(()=>[(m(!0),E(F,null,M(a(o).optionData,s=>(m(),c($,{key:s[a(u)],label:s[a(y)],value:V(s)},null,8,["label","value"]))),128))]),_:2},[a(t).header?{name:"header",fn:l(()=>[n(e.$slots,"header")]),key:"0"}:void 0,a(t).footer?{name:"footer",fn:l(()=>[n(e.$slots,"footer")]),key:"1"}:void 0,a(t).prefix?{name:"prefix",fn:l(()=>[n(e.$slots,"prefix")]),key:"2"}:void 0,a(t).empty?{name:"empty",fn:l(()=>[n(e.$slots,"empty")]),key:"3"}:void 0,a(t).tag?{name:"tag",fn:l(()=>[n(e.$slots,"tag")]),key:"4"}:void 0,a(t).loading?{name:"loading",fn:l(()=>[n(e.$slots,"loading")]),key:"5"}:void 0,a(t).label?{name:"label",fn:l(()=>[n(e.$slots,"label")]),key:"6"}:void 0]),1040,["clearable","filterable","modelValue"])}}});export{L as default};
