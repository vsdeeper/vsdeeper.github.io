import{cr as b,d as _,y as h,o as p,c as i,w as u,e,z as y,u as n,az as k,a as x,F as U,A,c0 as q,dw as B,b$ as g,c2 as w,dx as D,cJ as M,cI as z,dy as C}from"./index-BZtV8Jll.js";import{O as I}from"./constants-CChYDb4d-BNrL-lGq.js";const F=_({__name:"CascaderDesigner",props:{modelValue:{default:()=>({})},modelModifiers:{}},emits:["update:modelValue"],setup(m){const a=h(m,"modelValue");return(L,o)=>{const t=q,d=B,r=g,v=w,s=D,c=M,f=z,V=C;return p(),i(V,{model:a.value,ref:"formRef","label-width":"100px"},{default:u(()=>[e(d,{label:"唯一标识",prop:"id",rules:[{required:!0,message:"必填项"}]},{default:u(()=>[e(t,{"model-value":a.value.id,placeholder:"请输入",disabled:""},null,8,["model-value"])]),_:1}),e(d,{prop:"idAlias"},{label:u(()=>[o[8]||(o[8]=y(" ID别名 ")),e(v,{content:"表单的 value 值对应的 key，默认为唯一标识",placement:"top",effect:"dark"},{default:u(()=>[e(r,null,{default:u(()=>[e(n(k))]),_:1})]),_:1})]),default:u(()=>[e(t,{modelValue:a.value.idAlias,"onUpdate:modelValue":o[0]||(o[0]=l=>a.value.idAlias=l),placeholder:"请输入"},null,8,["modelValue"])]),_:1}),e(d,{label:"标签名称",prop:"options.label"},{default:u(()=>[e(t,{modelValue:a.value.options.label,"onUpdate:modelValue":o[1]||(o[1]=l=>a.value.options.label=l),placeholder:"请输入"},null,8,["modelValue"])]),_:1}),e(d,{label:"占位内容",prop:"options.placeholder"},{default:u(()=>[e(t,{modelValue:a.value.options.placeholder,"onUpdate:modelValue":o[2]||(o[2]=l=>a.value.options.placeholder=l),placeholder:"请输入",type:"textarea",autosize:""},null,8,["modelValue"])]),_:1}),e(d,{label:"多选",prop:"options.multiple"},{default:u(()=>[e(s,{modelValue:a.value.options.multiple,"onUpdate:modelValue":o[3]||(o[3]=l=>a.value.options.multiple=l),"active-value":!0,"inactive-value":!1},null,8,["modelValue"])]),_:1}),e(d,{label:"必填",prop:"options.required"},{default:u(()=>[e(s,{modelValue:a.value.options.required,"onUpdate:modelValue":o[4]||(o[4]=l=>a.value.options.required=l),"active-value":!0,"inactive-value":!1},null,8,["modelValue"])]),_:1}),e(d,{label:"数据接口",prop:"options.systemApi"},{default:u(()=>[e(f,{modelValue:a.value.options.systemApi,"onUpdate:modelValue":o[5]||(o[5]=l=>a.value.options.systemApi=l),placeholder:"请选择",clearable:"",filterable:""},{default:u(()=>[(p(!0),x(U,null,A(n(I),l=>(p(),i(c,{key:l.value,label:l.label,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(d,{label:"选项名称key",prop:"options.map.label"},{default:u(()=>[e(t,{modelValue:a.value.options.map.label,"onUpdate:modelValue":o[6]||(o[6]=l=>a.value.options.map.label=l),modelModifiers:{trim:!0},placeholder:"请输入"},null,8,["modelValue"])]),_:1}),e(d,{label:"选项值key",prop:"options.map.value"},{default:u(()=>[e(t,{modelValue:a.value.options.map.value,"onUpdate:modelValue":o[7]||(o[7]=l=>a.value.options.map.value=l),modelModifiers:{trim:!0},placeholder:"请输入"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])}}}),J=b(F,[["__scopeId","data-v-ab81e647"]]);export{J as default};