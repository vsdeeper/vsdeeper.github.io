import{d as m,z as i,o as _,c,w as o,e,u as t,E as f,A as V}from"./index-Dv1MvMk1.js";import{R as g,E,a as b}from"./constants-SsMrKvsq.js";const C=m({__name:"d-project",props:{formData:{}},setup(u){const l=i(u,"formData");return(w,a)=>{const p=f,r=V,s=E,d=b;return _(),c(d,{gutter:t(g)},{default:o(()=>[e(s,{span:24},{default:o(()=>[e(r,{label:"项目名称",prop:"name",rules:[{required:!0,message:"必填项"}]},{default:o(()=>[e(p,{modelValue:t(l).options.name,"onUpdate:modelValue":a[0]||(a[0]=n=>t(l).options.name=n),placeholder:"请输入",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(s,{span:24},{default:o(()=>[e(r,{label:"git地址",prop:"git"},{default:o(()=>[e(p,{modelValue:t(l).options.git,"onUpdate:modelValue":a[1]||(a[1]=n=>t(l).options.git=n),placeholder:"请输入",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(s,{span:24},{default:o(()=>[e(r,{label:"项目描述",prop:"description"},{default:o(()=>[e(p,{modelValue:t(l).options.description,"onUpdate:modelValue":a[2]||(a[2]=n=>t(l).options.description=n),type:"textarea",autosize:"",placeholder:"请输入",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["gutter"])}}});export{C as default};