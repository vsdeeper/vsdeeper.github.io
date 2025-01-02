import{d as k,u as I,o as i,b as s,w as a,e as l,f,g as r,q as v,i as U,r as T,F as A,B as V,C as w,E as M,j as S,k as y,l as F,n as O,p as W,s as q,D as C,t as D}from"./index-Cb27ZIqA.js";import{c as P}from"./constants-kQMh5otI.js";const L=k({__name:"InputNumberDesigner",props:{modelValue:{default:()=>({})},modelModifiers:{}},emits:["update:modelValue"],setup(E){const o=I(E,"modelValue"),_=b=>w.value.widgetList.filter(u=>u.type==="data-table").some(u=>{var n;return(n=u.widgetList)==null?void 0:n.some(p=>p.id===b)});return(b,e)=>{const u=M,n=S,p=y,m=F,c=O,x=W,N=q,d=C,g=D;return i(),s(g,{model:o.value,ref:"formRef","label-width":"100px"},{default:a(()=>[l(n,{label:"唯一标识",prop:"id",rules:[{required:!0,message:"必填项"}]},{default:a(()=>[l(u,{"model-value":o.value.id,placeholder:"请输入",disabled:""},null,8,["model-value"])]),_:1}),l(n,{prop:"idAlias"},{label:a(()=>[e[12]||(e[12]=f(" ID别名 ")),l(m,{content:"表单的 value 值对应的 key，默认为唯一标识",placement:"top",effect:"dark"},{default:a(()=>[l(p,null,{default:a(()=>[l(r(v))]),_:1})]),_:1})]),default:a(()=>[l(u,{modelValue:o.value.idAlias,"onUpdate:modelValue":e[0]||(e[0]=t=>o.value.idAlias=t),placeholder:"请输入"},null,8,["modelValue"])]),_:1}),l(n,{label:"标签名称",prop:"options.label"},{default:a(()=>[l(u,{modelValue:o.value.options.label,"onUpdate:modelValue":e[1]||(e[1]=t=>o.value.options.label=t),placeholder:"请输入"},null,8,["modelValue"])]),_:1}),l(n,{label:"占位内容",prop:"options.placeholder"},{default:a(()=>[l(u,{modelValue:o.value.options.placeholder,"onUpdate:modelValue":e[2]||(e[2]=t=>o.value.options.placeholder=t),placeholder:"请输入",type:"textarea",autosize:""},null,8,["modelValue"])]),_:1}),l(n,{label:"使用控制按钮",prop:"options.controls"},{default:a(()=>[l(c,{modelValue:o.value.options.controls,"onUpdate:modelValue":e[3]||(e[3]=t=>o.value.options.controls=t),"active-value":!0,"inactive-value":!1},null,8,["modelValue"])]),_:1}),o.value.options.controls?(i(),s(n,{key:0,label:"控制按钮位置",prop:"options.controlsPosition"},{default:a(()=>[l(N,{modelValue:o.value.options.controlsPosition,"onUpdate:modelValue":e[4]||(e[4]=t=>o.value.options.controlsPosition=t),placeholder:"请选择",clearable:"",filterable:""},{default:a(()=>[(i(!0),U(A,null,T(r(P),t=>(i(),s(x,{key:t.value,label:t.label,value:t.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})):V("",!0),l(n,{label:"默认值",prop:"options.defaultValue"},{default:a(()=>[l(d,{modelValue:o.value.options.defaultValue,"onUpdate:modelValue":e[5]||(e[5]=t=>o.value.options.defaultValue=t),placeholder:"请输入","controls-position":"right",max:Number.MAX_SAFE_INTEGER},null,8,["modelValue","max"])]),_:1}),l(n,{label:"必填",prop:"options.required"},{default:a(()=>[l(c,{modelValue:o.value.options.required,"onUpdate:modelValue":e[6]||(e[6]=t=>o.value.options.required=t),"active-value":!0,"inactive-value":!1},null,8,["modelValue"])]),_:1}),l(n,{label:"最小值",prop:"options.min"},{default:a(()=>[l(d,{modelValue:o.value.options.min,"onUpdate:modelValue":e[7]||(e[7]=t=>o.value.options.min=t),placeholder:"请输入","controls-position":"right",max:Number.MAX_SAFE_INTEGER},null,8,["modelValue","max"])]),_:1}),l(n,{label:"最大值",prop:"options.max"},{default:a(()=>[l(d,{modelValue:o.value.options.max,"onUpdate:modelValue":e[8]||(e[8]=t=>o.value.options.max=t),placeholder:"请输入","controls-position":"right",max:Number.MAX_SAFE_INTEGER},null,8,["modelValue","max"])]),_:1}),l(n,{label:"数值精度",prop:"options.precision"},{default:a(()=>[l(d,{modelValue:o.value.options.precision,"onUpdate:modelValue":e[9]||(e[9]=t=>o.value.options.precision=t),placeholder:"请输入","controls-position":"right",min:0,max:5},null,8,["modelValue"])]),_:1}),_(o.value.id)?(i(),s(n,{key:1,prop:"options.columnWidth"},{label:a(()=>[e[13]||(e[13]=f(" 列宽度 ")),l(m,{content:"在 table 列中所占的宽度",placement:"top",effect:"dark"},{default:a(()=>[l(p,null,{default:a(()=>[l(r(v))]),_:1})]),_:1})]),default:a(()=>[l(d,{modelValue:o.value.options.columnWidth,"onUpdate:modelValue":e[10]||(e[10]=t=>o.value.options.columnWidth=t),placeholder:"请输入",controls:!0,"controls-position":"right"},null,8,["modelValue"])]),_:1})):V("",!0),_(o.value.id)?(i(),s(n,{key:2,prop:"options.columnMinWidth"},{label:a(()=>[e[14]||(e[14]=f(" 列最小宽度 ")),l(m,{content:"在 table 列中所占的最小宽度",placement:"top",effect:"dark"},{default:a(()=>[l(p,null,{default:a(()=>[l(r(v))]),_:1})]),_:1})]),default:a(()=>[l(d,{modelValue:o.value.options.columnMinWidth,"onUpdate:modelValue":e[11]||(e[11]=t=>o.value.options.columnMinWidth=t),placeholder:"请输入",controls:!0,"controls-position":"right"},null,8,["modelValue"])]),_:1})):V("",!0)]),_:1},8,["model"])}}});export{L as default};
