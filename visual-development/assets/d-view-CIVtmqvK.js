import{d as m,C as d,o as p,c as _,w as t,e as o,u as a,E as b,F as R}from"./index-DhSvsdrQ.js";import{_ as w,R as E,a as I}from"./constants-CQ5zuKiP.js";import{a as g,_ as C}from"./table-column-items-editor.vue_vue_type_style_index_0_scoped_7a225e51_lang-xfUhpogr.js";const V=m({__name:"name-editor",props:{options:{},label:{default:"名称"},formItemProp:{default:()=>["options","name"]},formItemRules:{}},setup(r){const s=d(r,"options");return(e,n)=>{const u=w,f=b,c=R;return p(),_(c,{prop:e.formItemProp,rules:[{required:!0,message:"必填项"}]},{label:t(()=>[o(u,{label:e.label},null,8,["label"])]),default:t(()=>[o(f,{modelValue:a(s).name,"onUpdate:modelValue":n[0]||(n[0]=i=>a(s).name=i),placeholder:"请输入格式: my-view",clearable:""},null,8,["modelValue"])]),_:1},8,["prop"])}}}),h=m({__name:"d-view",props:{formData:{}},setup(r){return(l,s)=>{const e=C,n=I;return p(),_(n,{gutter:a(E)},{default:t(()=>[o(e,null,{default:t(()=>[o(a(g),{"form-data":l.formData},null,8,["form-data"])]),_:1}),o(e,null,{default:t(()=>[o(a(V),{options:l.formData.options,label:"视图名称"},null,8,["options"])]),_:1})]),_:1},8,["gutter"])}}});export{h as default};