import{cr as w,d as k,ay as b,y as C,o as s,a as V,c as v,w as p,b as g,D as h,F as T,A as B,e as t,z as N,u as D,I,cE as z,cn as F,cz as U,cJ as E,cI as L,c0 as O}from"./index-BZtV8Jll.js";import{R}from"./index-CHGDm93g-CBU4w0vR.js";const _=k({__name:"OptionsConfigItem",props:b({index:{}},{modelValue:{default:()=>({})},modelModifiers:{}}),emits:b(["delete","change"],["update:modelValue"]),setup(y,{emit:a}){const c=a,d=C(y,"modelValue");return(m,u)=>{const e=E,l=L,r=O,f=U;return s(),V(T,null,[t(r,{modelValue:d.value.value,"onUpdate:modelValue":u[2]||(u[2]=n=>d.value.value=n),modelModifiers:{trim:!0},placeholder:"请输入",style:{width:"160px"}},{prepend:p(()=>[t(l,{modelValue:d.value.valueType,"onUpdate:modelValue":u[0]||(u[0]=n=>d.value.valueType=n),placeholder:"类型",style:{width:"90px"},onChange:u[1]||(u[1]=n=>c("change",d.value))},{default:p(()=>[t(e,{label:"数字",value:"number"}),t(e,{label:"字符串",value:"string"})]),_:1},8,["modelValue"])]),_:1},8,["modelValue"]),t(r,{modelValue:d.value.label,"onUpdate:modelValue":u[3]||(u[3]=n=>d.value.label=n),placeholder:"请输入",style:{flex:"1","margin-left":"5px"}},null,8,["modelValue"]),t(f,{type:"danger",size:"small",icon:D(I),circle:"",onClick:u[4]||(u[4]=n=>c("delete",m.index)),style:{"margin-left":"5px"}},null,8,["icon"])],64)}}}),j={class:"options-config"},A={key:1,class:"nodata"},J={class:"btns"},K=k({__name:"OptionsConfig",props:b({type:{},multiple:{type:Boolean}},{modelValue:{default:()=>[]},modelModifiers:{}}),emits:["update:modelValue"],setup(y){const a=C(y,"modelValue");function c(e){a.value.splice(e,1)}function d(){a.value||(a.value=[]),a.value.push({valueType:"number"})}function m(e,l){switch(e){case"valueType":{l.value=void 0;break}}}function u(e){return e.valueType==="number"?Number(e.value):e.value}return(e,l)=>{const r=z,f=R,n=F,M=U;return s(),V("div",j,[a.value.length?(s(),v(r,{key:0,class:"header",align:"middle"},{default:p(()=>l[4]||(l[4]=[g("div",{class:"label"},"选项值",-1),g("div",{class:"label"},"选项名称",-1)])),_:1})):h("",!0),(s(!0),V(T,null,B(a.value,(x,i)=>(s(),v(r,{key:"item"+i,align:"middle"},{default:p(()=>[e.type==="radio"||e.type==="select"&&!e.multiple?(s(),v(f,{key:0,value:u(x)},{default:p(()=>[t(_,{modelValue:a.value[i],"onUpdate:modelValue":o=>a.value[i]=o,index:i,onChange:l[0]||(l[0]=o=>m("valueType",o)),onDelete:l[1]||(l[1]=o=>c(o))},null,8,["modelValue","onUpdate:modelValue","index"])]),_:2},1032,["value"])):e.type==="checkbox"||e.type==="select"&&e.multiple?(s(),v(n,{key:1,value:u(x)},{default:p(()=>[t(_,{modelValue:a.value[i],"onUpdate:modelValue":o=>a.value[i]=o,index:i,onChange:l[2]||(l[2]=o=>m("valueType",o)),onDelete:l[3]||(l[3]=o=>c(o))},null,8,["modelValue","onUpdate:modelValue","index"])]),_:2},1032,["value"])):h("",!0)]),_:2},1024))),128)),a.value.length?h("",!0):(s(),V("div",A,"暂未配置")),g("div",J,[t(M,{type:"primary",onClick:d},{default:p(()=>l[5]||(l[5]=[N(" + 新增 ")])),_:1})])])}}}),q=w(K,[["__scopeId","data-v-d69bcb40"]]);export{q as K};