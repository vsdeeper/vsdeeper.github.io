import{d as x,u as k,r as E,w as C,o as g,c as D,e as a,C as l,J as m,b as r,bR as q,ay as w,E as U,bS as I,q as T,au as y,bT as F,aT as N,aC as R,bU as h,aF as A}from"./index-BySsZVVZ.js";import{_ as B}from"./OptionsConfig-B_zrG_b_.js";import"./index-BsJF6J-d.js";const M=x({__name:"CheckboxDesigner",props:{modelValue:{default:()=>({})},modelModifiers:{}},emits:["update:modelValue"],setup(_){const o=k(_,"modelValue"),p=E();return C([p,()=>o.value.options.optionData],i=>{const[e,u]=i,t=u==null?void 0:u.map(s=>s.valueType==="number"?Number(s.value):s.value),d=e==null?void 0:e.filter(s=>t==null?void 0:t.includes(s));d!=null&&d.length?o.value.options.defaultValue=d:o.value.options.defaultValue=void 0},{deep:!0}),(i,e)=>{const u=U,t=I,d=T,s=y,f=F,c=N,v=B,b=R,V=h;return g(),D(V,{model:o.value,ref:"formRef","label-width":"100px"},{default:a(()=>[l(t,{label:"唯一标识",prop:"id",rules:[{required:!0,message:"必填项"}]},{default:a(()=>[l(u,{"model-value":o.value.id,placeholder:"请输入",disabled:""},null,8,["model-value"])]),_:1}),l(t,{prop:"idAlias"},{label:a(()=>[e[5]||(e[5]=m(" ID别名 ")),l(s,{content:"表单的 value 值对应的 key，默认为唯一标识",placement:"top",effect:"dark"},{default:a(()=>[l(d,null,{default:a(()=>[l(r(q))]),_:1})]),_:1})]),default:a(()=>[l(u,{modelValue:o.value.idAlias,"onUpdate:modelValue":e[0]||(e[0]=n=>o.value.idAlias=n),placeholder:"请输入"},null,8,["modelValue"])]),_:1}),l(t,{label:"标签名称",prop:"options.label"},{default:a(()=>[l(u,{modelValue:o.value.options.label,"onUpdate:modelValue":e[1]||(e[1]=n=>o.value.options.label=n),placeholder:"请输入"},null,8,["modelValue"])]),_:1}),l(t,{label:"必填",prop:"options.required"},{default:a(()=>[l(f,{modelValue:o.value.options.required,"onUpdate:modelValue":e[2]||(e[2]=n=>o.value.options.required=n),"active-value":!0,"inactive-value":!1},null,8,["modelValue"])]),_:1}),l(t,{prop:"options.optionData","label-position":"top",class:"option-data"},{label:a(()=>[l(c,{direction:"horizontal"},{default:a(()=>e[6]||(e[6]=[m("选项配置")])),_:1})]),default:a(()=>[l(b,{modelValue:r(p),"onUpdate:modelValue":e[4]||(e[4]=n=>w(p)?p.value=n:null)},{default:a(()=>[l(v,{modelValue:o.value.options.optionData,"onUpdate:modelValue":e[3]||(e[3]=n=>o.value.options.optionData=n),type:"checkbox"},null,8,["modelValue"])]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model"])}}}),J=A(M,[["__scopeId","data-v-f683288f"]]);export{J as default};