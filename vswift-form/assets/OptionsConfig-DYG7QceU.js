import{d as E,G as g,u as T,o as d,i as _,e as s,w as m,g as x,H as M,F as w,p as N,s as I,E as h,I as B,b as f,J as y,B as b,r as D,f as O,K as $,L as F,_ as L}from"./index-BZoslF9_.js";import{b as R}from"./index-MSLx2F-u.js";const C=E({__name:"OptionsConfigItem",props:g({index:{}},{modelValue:{default:()=>({})},modelModifiers:{}}),emits:g(["delete","change"],["update:modelValue"]),setup(c,{emit:o}){const i=o,n=T(c,"modelValue");return(v,a)=>{const e=N,l=I,r=h,V=B;return d(),_(w,null,[s(r,{modelValue:n.value.value,"onUpdate:modelValue":a[2]||(a[2]=u=>n.value.value=u),modelModifiers:{trim:!0},placeholder:"请输入",style:{width:"160px"}},{prepend:m(()=>[s(l,{modelValue:n.value.valueType,"onUpdate:modelValue":a[0]||(a[0]=u=>n.value.valueType=u),placeholder:"类型",style:{width:"90px"},onChange:a[1]||(a[1]=u=>i("change",n.value))},{default:m(()=>[s(e,{label:"数字",value:"number"}),s(e,{label:"字符串",value:"string"})]),_:1},8,["modelValue"])]),_:1},8,["modelValue"]),s(r,{modelValue:n.value.label,"onUpdate:modelValue":a[3]||(a[3]=u=>n.value.label=u),placeholder:"请输入",style:{flex:"1","margin-left":"5px"}},null,8,["modelValue"]),s(V,{type:"danger",size:"small",icon:x(M),circle:"",onClick:a[4]||(a[4]=u=>i("delete",v.index)),style:{"margin-left":"5px"}},null,8,["icon"])],64)}}}),z={class:"options-config"},A={key:1,class:"nodata"},G={class:"btns"},H=E({__name:"OptionsConfig",props:g({type:{},multiple:{type:Boolean}},{modelValue:{default:()=>[]},modelModifiers:{}}),emits:["update:modelValue"],setup(c){const o=T(c,"modelValue");function i(e){o.value.splice(e,1)}function n(){o.value||(o.value=[]),o.value.push({valueType:"number"})}function v(e,l){switch(e){case"valueType":{l.value=void 0;break}}}function a(e){return e.valueType==="number"?Number(e.value):e.value}return(e,l)=>{const r=$,V=R,u=F,U=B;return d(),_("div",z,[o.value.length?(d(),f(r,{key:0,class:"header",align:"middle"},{default:m(()=>l[4]||(l[4]=[y("div",{class:"label"},"选项值",-1),y("div",{class:"label"},"选项名称",-1)])),_:1})):b("",!0),(d(!0),_(w,null,D(o.value,(k,p)=>(d(),f(r,{key:"item"+p,align:"middle"},{default:m(()=>[e.type==="radio"||e.type==="select"&&!e.multiple?(d(),f(V,{key:0,value:a(k)},{default:m(()=>[s(C,{modelValue:o.value[p],"onUpdate:modelValue":t=>o.value[p]=t,index:p,onChange:l[0]||(l[0]=t=>v("valueType",t)),onDelete:l[1]||(l[1]=t=>i(t))},null,8,["modelValue","onUpdate:modelValue","index"])]),_:2},1032,["value"])):e.type==="checkbox"||e.type==="select"&&e.multiple?(d(),f(u,{key:1,value:a(k)},{default:m(()=>[s(C,{modelValue:o.value[p],"onUpdate:modelValue":t=>o.value[p]=t,index:p,onChange:l[2]||(l[2]=t=>v("valueType",t)),onDelete:l[3]||(l[3]=t=>i(t))},null,8,["modelValue","onUpdate:modelValue","index"])]),_:2},1032,["value"])):b("",!0)]),_:2},1024))),128)),o.value.length?b("",!0):(d(),_("div",A,"暂未配置")),y("div",G,[s(U,{type:"primary",onClick:n},{default:m(()=>l[5]||(l[5]=[O(" + 新增 ")])),_:1})])])}}}),S=L(H,[["__scopeId","data-v-d69bcb40"]]);export{S as _};
