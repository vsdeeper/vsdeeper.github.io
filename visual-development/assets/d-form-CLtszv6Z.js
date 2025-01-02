import{d as n,k as S,l as d,p as g,o as c,a as p,q as f,j as m,u as a,s as h,n as y,v as B,x as $,y as C,c as N,w as i,e as _,z as v}from"./index-BZtV8Jll.js";const b=n({name:"ElContainer"}),M=n({...b,props:{direction:{type:String}},setup(o){const t=o,e=S(),s=d("container"),l=g(()=>t.direction==="vertical"?!0:t.direction==="horizontal"?!1:e&&e.default?e.default().some(u=>{const E=u.type.name;return E==="ElHeader"||E==="ElFooter"}):!1);return(r,u)=>(c(),p("section",{class:m([a(s).b(),a(s).is("vertical",a(l))])},[f(r.$slots,"default")],2))}});var z=h(M,[["__file","container.vue"]]);const H=n({name:"ElAside"}),A=n({...H,props:{width:{type:String,default:null}},setup(o){const t=o,e=d("aside"),s=g(()=>t.width?e.cssVarBlock({width:t.width}):{});return(l,r)=>(c(),p("aside",{class:m(a(e).b()),style:y(a(s))},[f(l.$slots,"default")],6))}});var w=h(A,[["__file","aside.vue"]]);const F=n({name:"ElFooter"}),I=n({...F,props:{height:{type:String,default:null}},setup(o){const t=o,e=d("footer"),s=g(()=>t.height?e.cssVarBlock({height:t.height}):{});return(l,r)=>(c(),p("footer",{class:m(a(e).b()),style:y(a(s))},[f(l.$slots,"default")],6))}});var x=h(I,[["__file","footer.vue"]]);const j=n({name:"ElHeader"}),q=n({...j,props:{height:{type:String,default:null}},setup(o){const t=o,e=d("header"),s=g(()=>t.height?e.cssVarBlock({height:t.height}):{});return(l,r)=>(c(),p("header",{class:m(a(e).b()),style:y(a(s))},[f(l.$slots,"default")],6))}});var V=h(q,[["__file","header.vue"]]);const T=n({name:"ElMain"}),D=n({...T,setup(o){const t=d("main");return(e,s)=>(c(),p("main",{class:m(a(t).b())},[f(e.$slots,"default")],2))}});var k=h(D,[["__file","main.vue"]]);const G=B(z,{Aside:w,Footer:x,Header:V,Main:k}),J=$(w);$(x);const K=$(V),L=$(k),P=n({__name:"d-form",props:{modelValue:{default:()=>({options:{}})},modelModifiers:{}},emits:["update:modelValue"],setup(o){return C(o,"modelValue"),(t,e)=>{const s=J,l=K,r=L,u=G;return c(),N(u,null,{default:i(()=>[_(s,{width:"250px"},{default:i(()=>e[0]||(e[0]=[v(" 左侧边栏 ")])),_:1}),_(u,null,{default:i(()=>[_(l,{height:"50px"},{default:i(()=>e[1]||(e[1]=[v(" 顶部 ")])),_:1}),_(r,null,{default:i(()=>e[2]||(e[2]=[v(" 主体 ")])),_:1})]),_:1}),_(s,{width:"250px"},{default:i(()=>e[3]||(e[3]=[v(" 右侧边栏 ")])),_:1})]),_:1})}}});export{P as default};
