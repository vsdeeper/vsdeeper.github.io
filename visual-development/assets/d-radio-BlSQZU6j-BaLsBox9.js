import{d as E,ay as y,y as M,p as i,W as F,u as l,o as u,c as r,w as d,a as k,A as g,F as V,m as N,z as p,cp as R,t as b}from"./index-BZtV8Jll.js";import{V as j,k as z,R as A}from"./index-CHGDm93g-CBU4w0vR.js";const S=E({__name:"d-radio",props:y({designData:{}},{modelValue:{},modelModifiers:{}}),emits:y(["change"],["update:modelValue"]),setup(v,{emit:h}){const D=v,_=h,m=M(v,"modelValue"),t=i(()=>D.designData.options),o=i(()=>{var e;return((e=t.value.map)==null?void 0:e.label)??"label"}),n=i(()=>{var e;return((e=t.value.map)==null?void 0:e.value)??"value"});F(()=>t.value.defaultValue,e=>{m.value=e},{immediate:!0});function x(e){_("change",e)}function c(e){return e.valueType==="number"?Number(e[n.value]):e[n.value]}return(e,s)=>{var f;const B=z,C=A,T=j,w=R;return(f=l(t).optionData)!=null&&f.length?(u(),r(T,N({key:0},l(t),{modelValue:m.value,"onUpdate:modelValue":s[0]||(s[0]=a=>m.value=a),onChange:x}),{default:d(()=>[l(t).radioType==="button"?(u(!0),k(V,{key:0},g(l(t).optionData,a=>(u(),r(B,{key:a[l(n)],label:a[l(o)],value:c(a)},{default:d(()=>[p(b(a[l(o)]),1)]),_:2},1032,["label","value"]))),128)):(u(!0),k(V,{key:1},g(l(t).optionData,a=>(u(),r(C,{key:a[l(n)],label:a[l(o)],value:c(a)},{default:d(()=>[p(b(a[l(o)]),1)]),_:2},1032,["label","value"]))),128))]),_:1},16,["modelValue"])):(u(),r(w,{key:1,type:"info"},{default:d(()=>s[1]||(s[1]=[p("暂未配置")])),_:1}))}}});export{S as default};
