import{d as m,y as c,o as f,c as v,w as d,e,z as V,u as _,az as b,c0 as x,dw as h,b$ as q,c2 as k,dx as w,dy as A}from"./index-BZtV8Jll.js";const y=m({__name:"RecursiveAreaDesigner",props:{modelValue:{default:()=>({})},modelModifiers:{}},emits:["update:modelValue"],setup(s){const l=c(s,"modelValue");return(B,a)=>{const t=x,o=h,r=q,i=k,p=w,n=A;return f(),v(n,{model:l.value,ref:"formRef","label-width":"90px"},{default:d(()=>[e(o,{label:"唯一标识",prop:"id",rules:[{required:!0,message:"必填项"}]},{default:d(()=>[e(t,{"model-value":l.value.id,placeholder:"请输入",disabled:""},null,8,["model-value"])]),_:1}),e(o,{prop:"idAlias"},{label:d(()=>[a[3]||(a[3]=V(" ID别名 ")),e(i,{content:"表单的 value 值对应的 key，默认为唯一标识",placement:"top",effect:"dark"},{default:d(()=>[e(r,null,{default:d(()=>[e(_(b))]),_:1})]),_:1})]),default:d(()=>[e(t,{modelValue:l.value.idAlias,"onUpdate:modelValue":a[0]||(a[0]=u=>l.value.idAlias=u),placeholder:"请输入"},null,8,["modelValue"])]),_:1}),e(o,{label:"标签名称",prop:"options.label"},{default:d(()=>[e(t,{modelValue:l.value.options.label,"onUpdate:modelValue":a[1]||(a[1]=u=>l.value.options.label=u),placeholder:"请输入"},null,8,["modelValue"])]),_:1}),e(o,{label:"必填",prop:"options.required"},{default:d(()=>[e(p,{modelValue:l.value.options.required,"onUpdate:modelValue":a[2]||(a[2]=u=>l.value.options.required=u),"active-value":!0,"inactive-value":!1},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])}}});export{y as default};
