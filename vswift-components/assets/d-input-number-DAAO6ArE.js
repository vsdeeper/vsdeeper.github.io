import{Q as ce,a4 as de,aS as b,aT as me,T as ae,aU as C,aV as w,U as I,d as G,D as pe,j as be,H as fe,X as ve,aa as Ne,h as V,N as F,ac as Ve,aW as he,Y as ge,$ as ye,aX as Ie,aY as _e,o as v,b as O,ah as Q,g as a,A as L,an as k,as as D,z as Y,w as M,c as _,ak as we,aZ as Ee,n as Z,x as q,a_ as Se,a$ as Pe,y as W,E as Ae,_ as Fe,b0 as ke,b1 as Ce,ad as J,b2 as De,m as ee,u as Me,aF as Te,aM as Be,a as $e}from"./index-Ch7CaZpa.js";import{v as ne}from"./index-UA_hhVfh.js";const xe=ce({id:{type:String,default:void 0},step:{type:Number,default:1},stepStrictly:Boolean,max:{type:Number,default:Number.POSITIVE_INFINITY},min:{type:Number,default:Number.NEGATIVE_INFINITY},modelValue:Number,readonly:Boolean,disabled:Boolean,size:de,controls:{type:Boolean,default:!0},controlsPosition:{type:String,default:"",values:["","right"]},valueOnClear:{type:[String,Number,null],validator:l=>l===null||b(l)||["min","max"].includes(l),default:null},name:String,label:String,placeholder:String,precision:{type:Number,validator:l=>l>=0&&l===Number.parseInt(`${l}`,10)},validateEvent:{type:Boolean,default:!0},...me(["ariaLabel"])}),ze={[ae]:(l,h)=>h!==l,blur:l=>l instanceof FocusEvent,focus:l=>l instanceof FocusEvent,[C]:l=>b(l)||w(l),[I]:l=>b(l)||w(l)},Ue=["aria-label","onKeydown"],Ke=["aria-label","onKeydown"],Oe=G({name:"ElInputNumber"}),Le=G({...Oe,props:xe,emits:ze,setup(l,{expose:h,emit:i}){const t=l,{t:g}=pe(),d=be("input-number"),f=fe(),s=ve({currentValue:t.modelValue,userInput:null}),{formItem:m}=Ne(),N=V(()=>b(t.modelValue)&&t.modelValue<=t.min),E=V(()=>b(t.modelValue)&&t.modelValue>=t.max),T=V(()=>{const e=R(t.step);return F(t.precision)?Math.max(R(t.modelValue),e):(e>t.precision,t.precision)}),B=V(()=>t.controls&&t.controlsPosition==="right"),H=Ve(),y=he(),$=V(()=>{if(s.userInput!==null)return s.userInput;let e=s.currentValue;if(w(e))return"";if(b(e)){if(Number.isNaN(e))return"";F(t.precision)||(e=e.toFixed(t.precision))}return e}),x=(e,n)=>{if(F(n)&&(n=T.value),n===0)return Math.round(e);let r=String(e);const o=r.indexOf(".");if(o===-1||!r.replace(".","").split("")[o+n])return e;const P=r.length;return r.charAt(P-1)==="5"&&(r=`${r.slice(0,Math.max(0,P-1))}6`),Number.parseFloat(Number(r).toFixed(n))},R=e=>{if(w(e))return 0;const n=e.toString(),r=n.indexOf(".");let o=0;return r!==-1&&(o=n.length-r-1),o},X=(e,n=1)=>b(e)?x(e+t.step*n):s.currentValue,z=()=>{if(t.readonly||y.value||E.value)return;const e=Number($.value)||0,n=X(e);S(n),i(C,s.currentValue),K()},U=()=>{if(t.readonly||y.value||N.value)return;const e=Number($.value)||0,n=X(e,-1);S(n),i(C,s.currentValue),K()},j=(e,n)=>{const{max:r,min:o,step:u,precision:p,stepStrictly:P,valueOnClear:A}=t;r<o&&ke("InputNumber","min should not be greater than max.");let c=Number(e);if(w(e)||Number.isNaN(c))return null;if(e===""){if(A===null)return null;c=Ce(A)?{min:o,max:r}[A]:A}return P&&(c=x(Math.round(c/u)*u,p)),F(p)||(c=x(c,p)),(c>r||c<o)&&(c=c>r?r:o,n&&i(I,c)),c},S=(e,n=!0)=>{var r;const o=s.currentValue,u=j(e);if(!n){i(I,u);return}o===u&&e||(s.userInput=null,i(I,u),o!==u&&i(ae,u,o),t.validateEvent&&((r=m==null?void 0:m.validate)==null||r.call(m,"change").catch(p=>J())),s.currentValue=u)},te=e=>{s.userInput=e;const n=e===""?null:Number(e);i(C,n),S(n,!1)},re=e=>{const n=e!==""?Number(e):"";(b(n)&&!Number.isNaN(n)||e==="")&&S(n),K(),s.userInput=null},le=()=>{var e,n;(n=(e=f.value)==null?void 0:e.focus)==null||n.call(e)},se=()=>{var e,n;(n=(e=f.value)==null?void 0:e.blur)==null||n.call(e)},ue=e=>{i("focus",e)},oe=e=>{var n;s.userInput=null,i("blur",e),t.validateEvent&&((n=m==null?void 0:m.validate)==null||n.call(m,"blur").catch(r=>J()))},K=()=>{s.currentValue!==t.modelValue&&(s.currentValue=t.modelValue)},ie=e=>{document.activeElement===e.target&&e.preventDefault()};return ge(()=>t.modelValue,(e,n)=>{const r=j(e,!0);s.userInput===null&&r!==n&&(s.currentValue=r)},{immediate:!0}),ye(()=>{var e;const{min:n,max:r,modelValue:o}=t,u=(e=f.value)==null?void 0:e.input;if(u.setAttribute("role","spinbutton"),Number.isFinite(r)?u.setAttribute("aria-valuemax",String(r)):u.removeAttribute("aria-valuemax"),Number.isFinite(n)?u.setAttribute("aria-valuemin",String(n)):u.removeAttribute("aria-valuemin"),u.setAttribute("aria-valuenow",s.currentValue||s.currentValue===0?String(s.currentValue):""),u.setAttribute("aria-disabled",String(y.value)),!b(o)&&o!=null){let p=Number(o);Number.isNaN(p)&&(p=null),i(I,p)}u.addEventListener("wheel",ie,{passive:!1})}),Ie(()=>{var e,n;const r=(e=f.value)==null?void 0:e.input;r==null||r.setAttribute("aria-valuenow",`${(n=s.currentValue)!=null?n:""}`)}),_e({from:"label",replacement:"aria-label",version:"2.8.0",scope:"el-input-number",ref:"https://element-plus.org/en-US/component/input-number.html"},V(()=>!!t.label)),h({focus:le,blur:se}),(e,n)=>(v(),O("div",{class:L([a(d).b(),a(d).m(a(H)),a(d).is("disabled",a(y)),a(d).is("without-controls",!e.controls),a(d).is("controls-right",a(B))]),onDragstart:n[0]||(n[0]=W(()=>{},["prevent"]))},[e.controls?Q((v(),O("span",{key:0,role:"button","aria-label":a(g)("el.inputNumber.decrease"),class:L([a(d).e("decrease"),a(d).is("disabled",a(N))]),onKeydown:k(U,["enter"])},[D(e.$slots,"decrease-icon",{},()=>[Y(a(Z),null,{default:M(()=>[a(B)?(v(),_(a(we),{key:0})):(v(),_(a(Ee),{key:1}))]),_:1})])],42,Ue)),[[a(ne),U]]):q("v-if",!0),e.controls?Q((v(),O("span",{key:1,role:"button","aria-label":a(g)("el.inputNumber.increase"),class:L([a(d).e("increase"),a(d).is("disabled",a(E))]),onKeydown:k(z,["enter"])},[D(e.$slots,"increase-icon",{},()=>[Y(a(Z),null,{default:M(()=>[a(B)?(v(),_(a(Se),{key:0})):(v(),_(a(Pe),{key:1}))]),_:1})])],42,Ke)),[[a(ne),z]]):q("v-if",!0),Y(a(Ae),{id:e.id,ref_key:"input",ref:f,type:"number",step:e.step,"model-value":a($),placeholder:e.placeholder,readonly:e.readonly,disabled:a(y),size:a(H),max:e.max,min:e.min,name:e.name,"aria-label":e.label||e.ariaLabel,"validate-event":!1,onKeydown:[k(W(z,["prevent"]),["up"]),k(W(U,["prevent"]),["down"])],onBlur:oe,onFocus:ue,onInput:te,onChange:re},null,8,["id","step","model-value","placeholder","readonly","disabled","size","max","min","name","aria-label","onKeydown"])],34))}});var Ye=Fe(Le,[["__file","input-number.vue"]]);const We=De(Ye),Re=G({__name:"d-input-number",props:ee({designData:{}},{modelValue:{},modelModifiers:{}}),emits:ee(["change"],["update:modelValue"]),setup(l,{emit:h}){const i=l,t=h,g=Me(l,"modelValue"),d=V(()=>i.designData.options),f=Te();function s(m,N){t("change",m,N)}return(m,N)=>{const E=We;return v(),_(E,$e(a(d),{modelValue:g.value,"onUpdate:modelValue":N[0]||(N[0]=T=>g.value=T),onChange:s}),Be({_:2},[a(f)["decrease-icon"]?{name:"decrease-icon",fn:M(()=>[D(m.$slots,"decrease-icon")]),key:"0"}:void 0,a(f)["increase-icon"]?{name:"increase-icon",fn:M(()=>[D(m.$slots,"increase-icon")]),key:"1"}:void 0]),1040,["modelValue"])}}});export{Re as default};