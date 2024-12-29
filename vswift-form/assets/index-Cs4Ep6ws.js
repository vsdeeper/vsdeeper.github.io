import{d as E,h as R,m as M,a as A,c as x}from"./index-BaHOnCAb.js";var b=function(){if(typeof Map<"u")return Map;function e(t,n){var i=-1;return t.some(function(r,o){return r[0]===n?(i=o,!0):!1}),i}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(n){var i=e(this.__entries__,n),r=this.__entries__[i];return r&&r[1]},t.prototype.set=function(n,i){var r=e(this.__entries__,n);~r?this.__entries__[r][1]=i:this.__entries__.push([n,i])},t.prototype.delete=function(n){var i=this.__entries__,r=e(i,n);~r&&i.splice(r,1)},t.prototype.has=function(n){return!!~e(this.__entries__,n)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(n,i){i===void 0&&(i=null);for(var r=0,o=this.__entries__;r<o.length;r++){var s=o[r];n.call(i,s[1],s[0])}},t}()}(),l=typeof window<"u"&&typeof document<"u"&&window.document===document,h=function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()}(),S=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(h):function(e){return setTimeout(function(){return e(Date.now())},1e3/60)}}(),z=2;function C(e,t){var n=!1,i=!1,r=0;function o(){n&&(n=!1,e()),i&&a()}function s(){S(o)}function a(){var c=Date.now();if(n){if(c-r<z)return;i=!0}else n=!0,i=!1,setTimeout(s,t);r=c}return a}var L=20,T=["top","right","bottom","left","width","height","size","weight"],B=typeof MutationObserver<"u",k=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=C(this.refresh.bind(this),L)}return e.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},e.prototype.removeObserver=function(t){var n=this.observers_,i=n.indexOf(t);~i&&n.splice(i,1),!n.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){var t=this.updateObservers_();t&&this.refresh()},e.prototype.updateObservers_=function(){var t=this.observers_.filter(function(n){return n.gatherActive(),n.hasActive()});return t.forEach(function(n){return n.broadcastActive()}),t.length>0},e.prototype.connect_=function(){!l||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),B?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){!l||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(t){var n=t.propertyName,i=n===void 0?"":n,r=T.some(function(o){return!!~i.indexOf(o)});r&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),y=function(e,t){for(var n=0,i=Object.keys(t);n<i.length;n++){var r=i[n];Object.defineProperty(e,r,{value:t[r],enumerable:!1,writable:!1,configurable:!0})}return e},u=function(e){var t=e&&e.ownerDocument&&e.ownerDocument.defaultView;return t||h},g=d(0,0,0,0);function f(e){return parseFloat(e)||0}function m(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return t.reduce(function(i,r){var o=e["border-"+r+"-width"];return i+f(o)},0)}function D(e){for(var t=["top","right","bottom","left"],n={},i=0,r=t;i<r.length;i++){var o=r[i],s=e["padding-"+o];n[o]=f(s)}return n}function V(e){var t=e.getBBox();return d(0,0,t.width,t.height)}function W(e){var t=e.clientWidth,n=e.clientHeight;if(!t&&!n)return g;var i=u(e).getComputedStyle(e),r=D(i),o=r.left+r.right,s=r.top+r.bottom,a=f(i.width),c=f(i.height);if(i.boxSizing==="border-box"&&(Math.round(a+o)!==t&&(a-=m(i,"left","right")+o),Math.round(c+s)!==n&&(c-=m(i,"top","bottom")+s)),!P(e)){var v=Math.round(a+o)-t,p=Math.round(c+s)-n;Math.abs(v)!==1&&(a-=v),Math.abs(p)!==1&&(c-=p)}return d(r.left,r.top,a,c)}var G=function(){return typeof SVGGraphicsElement<"u"?function(e){return e instanceof u(e).SVGGraphicsElement}:function(e){return e instanceof u(e).SVGElement&&typeof e.getBBox=="function"}}();function P(e){return e===u(e).document.documentElement}function j(e){return l?G(e)?V(e):W(e):g}function $(e){var t=e.x,n=e.y,i=e.width,r=e.height,o=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,s=Object.create(o.prototype);return y(s,{x:t,y:n,width:i,height:r,top:n,right:t+i,bottom:r+n,left:t}),s}function d(e,t,n,i){return{x:e,y:t,width:n,height:i}}var q=function(){function e(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=d(0,0,0,0),this.target=t}return e.prototype.isActive=function(){var t=j(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},e}(),F=function(){function e(t,n){var i=$(n);y(this,{target:t,contentRect:i})}return e}(),H=function(){function e(t,n,i){if(this.activeObservations_=[],this.observations_=new b,typeof t!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=n,this.callbackCtx_=i}return e.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof u(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(t)||(n.set(t,new q(t)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof u(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(t)&&(n.delete(t),n.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach(function(n){n.isActive()&&t.activeObservations_.push(n)})},e.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,n=this.activeObservations_.map(function(i){return new F(i.target,i.broadcastRect())});this.callback_.call(t,n,t),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),w=typeof WeakMap<"u"?new WeakMap:new b,O=function(){function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=k.getInstance(),i=new H(t,n,this);w.set(this,i)}return e}();["observe","unobserve","disconnect"].forEach(function(e){O.prototype[e]=function(){var t;return(t=w.get(this))[e].apply(t,arguments)}});var I=function(){return typeof h.ResizeObserver<"u"?h.ResizeObserver:O}();const _=["blur","input","change","changeSelectionStyle","changeSession","copy","focus","paste"],K=E({name:"VAceEditor",props:{value:{type:String,required:!0},lang:{type:String,default:"text"},theme:{type:String,default:"chrome"},options:Object,placeholder:String,readonly:Boolean,wrap:Boolean,printMargin:{type:[Boolean,Number],default:!0},minLines:Number,maxLines:Number},emits:["update:value","init",..._],render(){return R("div")},mounted(){const e=this._editor=M(A.edit(this.$el,{placeholder:this.placeholder,readOnly:this.readonly,value:this.value,mode:"ace/mode/"+this.lang,theme:"ace/theme/"+this.theme,wrap:this.wrap,printMargin:this.printMargin,useWorker:!1,minLines:this.minLines,maxLines:this.maxLines,...this.options}));this._contentBackup=this.value,this._isSettingContent=!1,e.on("change",()=>{if(this._isSettingContent)return;const t=e.getValue();this._contentBackup=t,this.$emit("update:value",t)}),_.forEach(t=>{const n="on"+x(t);typeof this.$.vnode.props[n]=="function"&&e.on(t,this.$emit.bind(this,t))}),this._ro=new I(()=>e.resize()),this._ro.observe(this.$el),this.$emit("init",e)},beforeUnmount(){var e,t;(e=this._ro)===null||e===void 0||e.disconnect(),(t=this._editor)===null||t===void 0||t.destroy()},methods:{focus(){this._editor.focus()},blur(){this._editor.blur()},selectAll(){this._editor.selectAll()},getAceInstance(){return this._editor}},watch:{value(e){if(this._contentBackup!==e){try{this._isSettingContent=!0,this._editor.setValue(e,1)}finally{this._isSettingContent=!1}this._contentBackup=e}},theme(e){this._editor.setTheme("ace/theme/"+e)},options(e){this._editor.setOptions(e)},readonly(e){this._editor.setReadOnly(e)},placeholder(e){this._editor.setOption("placeholder",e)},wrap(e){this._editor.setWrapBehavioursEnabled(e)},printMargin(e){this._editor.setOption("printMargin",e)},lang(e){this._editor.setOption("mode","ace/mode/"+e)},minLines(e){this._editor.setOption("minLines",e)},maxLines(e){this._editor.setOption("maxLines",e)}}});export{K as VAceEditor};
