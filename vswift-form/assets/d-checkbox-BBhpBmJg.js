import{d as B,G as k,u as w,T as p,x as M,g as o,o as t,b as s,w as d,i as _,r as v,F as x,f,$ as F,aO as G,aP as K,L,A as N,aQ as P}from"./index-Cb27ZIqA.js";const O=B({__name:"d-checkbox",props:k({designData:{}},{modelValue:{},modelModifiers:{}}),emits:k(["change"],["update:modelValue"]),setup(m,{emit:g}){const y=m,h=g,c=w(m,"modelValue"),l=p(()=>y.designData.options),r=p(()=>{var e;return((e=l.value.map)==null?void 0:e.label)??"label"}),n=p(()=>{var e;return((e=l.value.map)==null?void 0:e.value)??"value"});M(()=>l.value.defaultValue,e=>{c.value=e},{immediate:!0});function V(e){h("change",e)}function b(e){return e.valueType==="number"?Number(e[n.value]):e[n.value]}return(e,u)=>{var i;const C=K,D=L,E=N,T=P;return(i=o(l).optionData)!=null&&i.length?(t(),s(E,G({key:0},o(l),{modelValue:c.value,"onUpdate:modelValue":u[0]||(u[0]=a=>c.value=a),onChange:V}),{default:d(()=>[o(l).checkboxType==="button"?(t(!0),_(x,{key:0},v(o(l).optionData,a=>(t(),s(C,{key:a[o(n)],label:a[o(r)],value:b(a)},null,8,["label","value"]))),128)):(t(!0),_(x,{key:1},v(o(l).optionData,a=>(t(),s(D,{key:a[o(n)],label:a[o(r)],value:b(a)},{default:d(()=>[f(F(a[o(r)]),1)]),_:2},1032,["label","value"]))),128))]),_:1},16,["modelValue"])):(t(),s(T,{key:1,type:"info"},{default:d(()=>u[1]||(u[1]=[f("暂未配置")])),_:1}))}}});export{O as default};