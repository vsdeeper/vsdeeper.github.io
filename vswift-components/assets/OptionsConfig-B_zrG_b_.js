import{d as E,m as b,u as T,o as d,f as c,C as s,e as p,b as x,c0 as M,F as U,h as N,i as h,E as D,aQ as B,c as f,B as y,z as g,g as F,J as I,aU as O,p as $,aF as z}from"./index-BySsZVVZ.js";import{E as R}from"./index-BsJF6J-d.js";const C=E({__name:"OptionsConfigItem",props:b({index:{}},{modelValue:{default:()=>({})},modelModifiers:{}}),emits:b(["delete","change"],["update:modelValue"]),setup(_,{emit:o}){const i=o,n=T(_,"modelValue");return(v,a)=>{const e=N,l=h,r=D,V=B;return d(),c(U,null,[s(r,{modelValue:n.value.value,"onUpdate:modelValue":a[2]||(a[2]=u=>n.value.value=u),modelModifiers:{trim:!0},placeholder:"请输入",style:{width:"160px"}},{prepend:p(()=>[s(l,{modelValue:n.value.valueType,"onUpdate:modelValue":a[0]||(a[0]=u=>n.value.valueType=u),placeholder:"类型",style:{width:"90px"},onChange:a[1]||(a[1]=u=>i("change",n.value))},{default:p(()=>[s(e,{label:"数字",value:"number"}),s(e,{label:"字符串",value:"string"})]),_:1},8,["modelValue"])]),_:1},8,["modelValue"]),s(r,{modelValue:n.value.label,"onUpdate:modelValue":a[3]||(a[3]=u=>n.value.label=u),placeholder:"请输入",style:{flex:"1","margin-left":"5px"}},null,8,["modelValue"]),s(V,{type:"danger",size:"small",icon:x(M),circle:"",onClick:a[4]||(a[4]=u=>i("delete",v.index)),style:{"margin-left":"5px"}},null,8,["icon"])],64)}}}),A={class:"options-config"},J={key:1,class:"nodata"},L={class:"btns"},Q=E({__name:"OptionsConfig",props:b({type:{},multiple:{type:Boolean}},{modelValue:{default:()=>[]},modelModifiers:{}}),emits:["update:modelValue"],setup(_){const o=T(_,"modelValue");function i(e){o.value.splice(e,1)}function n(){o.value||(o.value=[]),o.value.push({valueType:"number"})}function v(e,l){switch(e){case"valueType":{l.value=void 0;break}}}function a(e){return e.valueType==="number"?Number(e.value):e.value}return(e,l)=>{const r=O,V=R,u=$,w=B;return d(),c("div",A,[o.value.length?(d(),f(r,{key:0,class:"header",align:"middle"},{default:p(()=>l[4]||(l[4]=[y("div",{class:"label"},"选项值",-1),y("div",{class:"label"},"选项名称",-1)])),_:1})):g("",!0),(d(!0),c(U,null,F(o.value,(k,m)=>(d(),f(r,{key:"item"+m,align:"middle"},{default:p(()=>[e.type==="radio"||e.type==="select"&&!e.multiple?(d(),f(V,{key:0,value:a(k)},{default:p(()=>[s(C,{modelValue:o.value[m],"onUpdate:modelValue":t=>o.value[m]=t,index:m,onChange:l[0]||(l[0]=t=>v("valueType",t)),onDelete:l[1]||(l[1]=t=>i(t))},null,8,["modelValue","onUpdate:modelValue","index"])]),_:2},1032,["value"])):e.type==="checkbox"||e.type==="select"&&e.multiple?(d(),f(u,{key:1,value:a(k)},{default:p(()=>[s(C,{modelValue:o.value[m],"onUpdate:modelValue":t=>o.value[m]=t,index:m,onChange:l[2]||(l[2]=t=>v("valueType",t)),onDelete:l[3]||(l[3]=t=>i(t))},null,8,["modelValue","onUpdate:modelValue","index"])]),_:2},1032,["value"])):g("",!0)]),_:2},1024))),128)),o.value.length?g("",!0):(d(),c("div",J,"暂未配置")),y("div",L,[s(w,{type:"primary",onClick:n},{default:p(()=>l[5]||(l[5]=[I(" + 新增 ")])),_:1})])])}}}),q=z(Q,[["__scopeId","data-v-4f2c2594"]]);export{q as _};
