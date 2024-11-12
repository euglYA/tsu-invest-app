/*! For license information please see main.c1da4935.js.LICENSE.txt */
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,SE=sE`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,EE=sE`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,QE=lE("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${FE} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${SE} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${EE} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,UE=sE`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,OE=lE("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${UE} 1s linear infinite;
`,kE=sE`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,_E=sE`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,LE=lE("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${kE} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${_E} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,IE=lE("div")`
  position: absolute;
`,PE=lE("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,NE=sE`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,ME=lE("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${NE} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,jE=e=>{let{toast:t}=e,{icon:n,type:A,iconTheme:i}=t;return void 0!==n?"string"==typeof n?r.createElement(ME,null,n):n:"blank"===A?null:r.createElement(PE,null,r.createElement(OE,{...i}),"loading"!==A&&r.createElement(IE,null,"error"===A?r.createElement(QE,{...i}):r.createElement(LE,{...i})))},TE=e=>`\n0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n`,DE=e=>`\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}\n`,HE=lE("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,RE=lE("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,KE=r.memo((e=>{let{toast:t,position:n,style:A,children:i}=e,o=t.height?((e,t)=>{let n=e.includes("top")?1:-1,[r,A]=fE()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[TE(n),DE(n)];return{animation:t?`${sE(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${sE(A)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(t.position||n||"top-center",t.visible):{opacity:0},a=r.createElement(jE,{toast:t}),s=r.createElement(RE,{...t.ariaProps},uE(t.message,t));return r.createElement(HE,{className:t.className,style:{...o,...A,...t.style}},"function"==typeof i?i({icon:a,message:s}):r.createElement(r.Fragment,null,a,s))}));!function(e,t,n,r){tE.p=t,iE=e,oE=n,aE=r}(r.createElement);var VE=e=>{let{id:t,className:n,style:A,onHeightUpdate:i,children:o}=e,a=r.useCallback((e=>{if(e){let n=()=>{let n=e.getBoundingClientRect().height;i(t,n)};n(),new MutationObserver(n).observe(e,{subtree:!0,childList:!0,characterData:!0})}}),[t,i]);return r.createElement("div",{ref:a,className:n,style:A},o)},zE=AE`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,GE=e=>{let{reverseOrder:t,position:n="top-center",toastOptions:A,gutter:i,children:o,containerStyle:a,containerClassName:s}=e,{toasts:l,handlers:u}=CE(A);return r.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...a},className:s,onMouseEnter:u.startPause,onMouseLeave:u.endPause},l.map((e=>{let A=e.position||n,a=((e,t)=>{let n=e.includes("top"),r=n?{top:0}:{bottom:0},A=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:fE()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(n?1:-1)}px)`,...r,...A}})(A,u.calculateOffset(e,{reverseOrder:t,gutter:i,defaultPosition:n}));return r.createElement(VE,{id:e.id,key:e.id,onHeightUpdate:u.updateHeight,className:e.visible?zE:"",style:a},"custom"===e.type?uE(e.message,e):o?o(e):r.createElement(KE,{toast:e,position:A}))})))},WE=bE,qE=n(5766),YE=n.n(qE);const XE=e=>{let{onDataParsed:t}=e;return(0,Z.jsx)("div",{children:(0,Z.jsx)("div",{className:"flex items-center justify-center w-full",children:(0,Z.jsxs)("label",{htmlFor:"dropzone-file",className:"flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600",children:[(0,Z.jsxs)("div",{className:"flex flex-col items-center justify-center pt-5 pb-6",children:[(0,Z.jsx)("svg",{className:"w-8 h-8 mb-4 text-gray-500 dark:text-gray-400","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 20 16",children:(0,Z.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"})}),(0,Z.jsx)("p",{className:"mb-2 text-sm text-gray-500 dark:text-gray-400",children:(0,Z.jsx)("span",{className:"font-semibold",children:"\u041d\u0430\u0436\u043c\u0438\u0442\u0435 \u043d\u0430 \u043e\u0431\u043b\u0430\u0441\u0442\u044c, \u0447\u0442\u043e\u0431\u044b \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0444\u0430\u0439\u043b"})}),(0,Z.jsx)("p",{className:"text-xs text-gray-500 dark:text-gray-400",children:"\u043d\u0443\u0436\u043d\u044b\u0439 \u0444\u043e\u0440\u043c\u0430\u0442 \u0444\u0430\u0439\u043b\u0430: .CSV"})]}),(0,Z.jsx)("input",{id:"dropzone-file",type:"file",className:"hidden",accept:".csv",onChange:e=>{const n=e.target.files[0];n&&YE().parse(n,{header:!0,dynamicTyping:!0,complete:n=>{let r=n.data,A=Object.keys(r[0])[0],i=0;r=r.map((e=>{if(+e[A]>0&&+e[A]<1e8)return+e[A];e[A]&&(i+=1)})),0==i?(t(r),console.log(r)):(e.target.value="",t({errors:i}))},error:e=>{console.error("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0430\u0440\u0441\u0438\u043d\u0433\u0430 CSV:",e)}})}})]})})})};function JE(e){var t;return"undefined"!==typeof window&&null!=window.navigator&&((null===(t=window.navigator.userAgentData)||void 0===t?void 0:t.brands.some((t=>e.test(t.brand))))||e.test(window.navigator.userAgent))}function ZE(e){var t;return"undefined"!==typeof window&&null!=window.navigator&&e.test((null===(t=window.navigator.userAgentData)||void 0===t?void 0:t.platform)||window.navigator.platform)}function $E(e){let t=null;return()=>(null==t&&(t=e()),t)}const eQ=$E((function(){return ZE(/^Mac/i)})),tQ=$E((function(){return ZE(/^iPhone/i)})),nQ=$E((function(){return ZE(/^iPad/i)||eQ()&&navigator.maxTouchPoints>1})),rQ=$E((function(){return tQ()||nQ()})),AQ=($E((function(){return eQ()||rQ()})),$E((function(){return JE(/AppleWebKit/i)&&!AQ()})),$E((function(){return JE(/Chrome/i)}))),iQ=$E((function(){return JE(/Android/i)}));$E((function(){return JE(/Firefox/i)}));const oQ=e=>{var t;return null!==(t=null===e||void 0===e?void 0:e.ownerDocument)&&void 0!==t?t:document},aQ=e=>{if(e&&"window"in e&&e.window===e)return e;return oQ(e).defaultView||window};let sQ=null,lQ=new Set,uQ=new Map,cQ=!1,fQ=!1;const dQ={Tab:!0,Escape:!0};function hQ(e,t){for(let n of lQ)n(e,t)}function pQ(e){cQ=!0,function(e){return!(e.metaKey||!eQ()&&e.altKey||e.ctrlKey||"Control"===e.key||"Shift"===e.key||"Meta"===e.key)}(e)&&(sQ="keyboard",hQ("keyboard",e))}function gQ(e){sQ="pointer","mousedown"!==e.type&&"pointerdown"!==e.type||(cQ=!0,hQ("pointer",e))}function mQ(e){var t;(0===(t=e).mozInputSource&&t.isTrusted||(iQ()&&t.pointerType?"click"===t.type&&1===t.buttons:0===t.detail&&!t.pointerType))&&(cQ=!0,sQ="virtual")}function yQ(e){e.target!==window&&e.target!==document&&(cQ||fQ||(sQ="virtual",hQ("virtual",e)),cQ=!1,fQ=!1)}function vQ(){cQ=!1,fQ=!0}function wQ(e){if("undefined"===typeof window||uQ.get(aQ(e)))return;const t=aQ(e),n=oQ(e);let r=t.HTMLElement.prototype.focus;t.HTMLElement.prototype.focus=function(){cQ=!0,r.apply(this,arguments)},n.addEventListener("keydown",pQ,!0),n.addEventListener("keyup",pQ,!0),n.addEventListener("click",mQ,!0),t.addEventListener("focus",yQ,!0),t.addEventListener("blur",vQ,!1),"undefined"!==typeof PointerEvent?(n.addEventListener("pointerdown",gQ,!0),n.addEventListener("pointermove",gQ,!0),n.addEventListener("pointerup",gQ,!0)):(n.addEventListener("mousedown",gQ,!0),n.addEventListener("mousemove",gQ,!0),n.addEventListener("mouseup",gQ,!0)),t.addEventListener("beforeunload",(()=>{bQ(e)}),{once:!0}),uQ.set(t,{focus:r})}const bQ=(e,t)=>{const n=aQ(e),r=oQ(e);t&&r.removeEventListener("DOMContentLoaded",t),uQ.has(n)&&(n.HTMLElement.prototype.focus=uQ.get(n).focus,r.removeEventListener("keydown",pQ,!0),r.removeEventListener("keyup",pQ,!0),r.removeEventListener("click",mQ,!0),n.removeEventListener("focus",yQ,!0),n.removeEventListener("blur",vQ,!1),"undefined"!==typeof PointerEvent?(r.removeEventListener("pointerdown",gQ,!0),r.removeEventListener("pointermove",gQ,!0),r.removeEventListener("pointerup",gQ,!0)):(r.removeEventListener("mousedown",gQ,!0),r.removeEventListener("mousemove",gQ,!0),r.removeEventListener("mouseup",gQ,!0)),uQ.delete(n))};function BQ(){return"pointer"!==sQ}"undefined"!==typeof document&&function(e){const t=oQ(e);let n;"loading"!==t.readyState?wQ(e):(n=()=>{wQ(e)},t.addEventListener("DOMContentLoaded",n))}();const xQ=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]);function CQ(e,t,n){wQ(),(0,r.useEffect)((()=>{let t=(t,r)=>{(function(e,t,n){var r;const A="undefined"!==typeof window?aQ(null===n||void 0===n?void 0:n.target).HTMLInputElement:HTMLInputElement,i="undefined"!==typeof window?aQ(null===n||void 0===n?void 0:n.target).HTMLTextAreaElement:HTMLTextAreaElement,o="undefined"!==typeof window?aQ(null===n||void 0===n?void 0:n.target).HTMLElement:HTMLElement,a="undefined"!==typeof window?aQ(null===n||void 0===n?void 0:n.target).KeyboardEvent:KeyboardEvent;return!((e=e||(null===n||void 0===n?void 0:n.target)instanceof A&&!xQ.has(null===n||void 0===n||null===(r=n.target)||void 0===r?void 0:r.type)||(null===n||void 0===n?void 0:n.target)instanceof i||(null===n||void 0===n?void 0:n.target)instanceof o&&(null===n||void 0===n?void 0:n.target.isContentEditable))&&"keyboard"===t&&n instanceof a&&!dQ[n.key])})(!!(null===n||void 0===n?void 0:n.isTextInput),t,r)&&e(BQ())};return lQ.add(t),()=>{lQ.delete(t)}}),t)}const FQ="undefined"!==typeof document?r.useLayoutEffect:()=>{};function SQ(e){const t=(0,r.useRef)(null);return FQ((()=>{t.current=e}),[e]),(0,r.useCallback)((function(){const e=t.current;return null===e||void 0===e?void 0:e(...arguments)}),[])}class EQ{isDefaultPrevented(){return this.nativeEvent.defaultPrevented}preventDefault(){this.defaultPrevented=!0,this.nativeEvent.preventDefault()}stopPropagation(){this.nativeEvent.stopPropagation(),this.isPropagationStopped=()=>!0}isPropagationStopped(){return!1}persist(){}constructor(e,t){this.nativeEvent=t,this.target=t.target,this.currentTarget=t.currentTarget,this.relatedTarget=t.relatedTarget,this.bubbles=t.bubbles,this.cancelable=t.cancelable,this.defaultPrevented=t.defaultPrevented,this.eventPhase=t.eventPhase,this.isTrusted=t.isTrusted,this.timeStamp=t.timeStamp,this.type=e}}function QQ(e){let t=(0,r.useRef)({isFocused:!1,observer:null});FQ((()=>{const e=t.current;return()=>{e.observer&&(e.observer.disconnect(),e.observer=null)}}),[]);let n=SQ((t=>{null===e||void 0===e||e(t)}));return(0,r.useCallback)((e=>{if(e.target instanceof HTMLButtonElement||e.target instanceof HTMLInputElement||e.target instanceof HTMLTextAreaElement||e.target instanceof HTMLSelectElement){t.current.isFocused=!0;let r=e.target,A=e=>{t.current.isFocused=!1,r.disabled&&n(new EQ("blur",e)),t.current.observer&&(t.current.observer.disconnect(),t.current.observer=null)};r.addEventListener("focusout",A,{once:!0}),t.current.observer=new MutationObserver((()=>{if(t.current.isFocused&&r.disabled){var e;null===(e=t.current.observer)||void 0===e||e.disconnect();let n=r===document.activeElement?null:document.activeElement;r.dispatchEvent(new FocusEvent("blur",{relatedTarget:n})),r.dispatchEvent(new FocusEvent("focusout",{bubbles:!0,relatedTarget:n}))}})),t.current.observer.observe(r,{attributes:!0,attributeFilter:["disabled"]})}}),[n])}function UQ(e){let{isDisabled:t,onFocus:n,onBlur:A,onFocusChange:i}=e;const o=(0,r.useCallback)((e=>{if(e.target===e.currentTarget)return A&&A(e),i&&i(!1),!0}),[A,i]),a=QQ(o),s=(0,r.useCallback)((e=>{const t=oQ(e.target);e.target===e.currentTarget&&t.activeElement===e.target&&(n&&n(e),i&&i(!0),a(e))}),[i,n,a]);return{focusProps:{onFocus:!t&&(n||i||A)?s:void 0,onBlur:t||!A&&!i?void 0:o}}}function OQ(e){let{isDisabled:t,onBlurWithin:n,onFocusWithin:A,onFocusWithinChange:i}=e,o=(0,r.useRef)({isFocusWithin:!1}),a=(0,r.useCallback)((e=>{o.current.isFocusWithin&&!e.currentTarget.contains(e.relatedTarget)&&(o.current.isFocusWithin=!1,n&&n(e),i&&i(!1))}),[n,i,o]),s=QQ(a),l=(0,r.useCallback)((e=>{o.current.isFocusWithin||document.activeElement!==e.target||(A&&A(e),i&&i(!0),o.current.isFocusWithin=!0,s(e))}),[A,i,s]);return t?{focusWithinProps:{onFocus:void 0,onBlur:void 0}}:{focusWithinProps:{onFocus:l,onBlur:a}}}function kQ(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{autoFocus:t=!1,isTextInput:n,within:A}=e,i=(0,r.useRef)({isFocused:!1,isFocusVisible:t||BQ()}),[o,a]=(0,r.useState)(!1),[s,l]=(0,r.useState)((()=>i.current.isFocused&&i.current.isFocusVisible)),u=(0,r.useCallback)((()=>l(i.current.isFocused&&i.current.isFocusVisible)),[]),c=(0,r.useCallback)((e=>{i.current.isFocused=e,a(e),u()}),[u]);CQ((e=>{i.current.isFocusVisible=e,u()}),[],{isTextInput:n});let{focusProps:f}=UQ({isDisabled:A,onFocusChange:c}),{focusWithinProps:d}=OQ({isDisabled:!A,onFocusWithinChange:c});return{isFocused:o,isFocusVisible:s,focusProps:A?d:f}}let _Q=!1,LQ=0;function IQ(){_Q=!0,setTimeout((()=>{_Q=!1}),50)}function PQ(e){"touch"===e.pointerType&&IQ()}function NQ(){if("undefined"!==typeof document)return"undefined"!==typeof PointerEvent?document.addEventListener("pointerup",PQ):document.addEventListener("touchend",IQ),LQ++,()=>{LQ--,LQ>0||("undefined"!==typeof PointerEvent?document.removeEventListener("pointerup",PQ):document.removeEventListener("touchend",IQ))}}function MQ(e,t){return(0,r.useMemo)((()=>{var n;if(e.type)return e.type;let r=null!=(n=e.as)?n:"button";return"string"==typeof r&&"button"===r.toLowerCase()||"BUTTON"===(null==t?void 0:t.tagName)&&!t.hasAttribute("type")?"button":void 0}),[e.type,e.as,t])}function jQ(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];for(let[r,A]of Object.entries(e))DQ(n,TQ(t,r),A);return n}function TQ(e,t){return e?e+"["+t+"]":t}function DQ(e,t,n){if(Array.isArray(n))for(let[r,A]of n.entries())DQ(e,TQ(t,r.toString()),A);else n instanceof Date?e.push([t,n.toISOString()]):"boolean"==typeof n?e.push([t,n?"1":"0"]):"string"==typeof n?e.push([t,n]):"number"==typeof n?e.push([t,`${n}`]):null==n?e.push([t,""]):jQ(n,t,e)}let HQ=(0,r.createContext)(null);function RQ(e){let{children:t}=e,n=(0,r.useContext)(HQ);if(!n)return r.createElement(r.Fragment,null,t);let{target:A}=n;return A?(0,Mt.createPortal)(r.createElement(r.Fragment,null,t),A):null}function KQ(e){let{data:t,form:n,disabled:A,onReset:i,overrides:o}=e,[a,s]=(0,r.useState)(null),l=St();return(0,r.useEffect)((()=>{if(i&&a)return l.addEventListener(a,"reset",i)}),[a,n,i]),r.createElement(RQ,null,r.createElement(VQ,{setForm:s,formId:n}),jQ(t).map((e=>{let[t,i]=e;return r.createElement(Ze,{features:Je.Hidden,...qe({key:t,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:n,disabled:A,name:t,value:i,...o})})})))}function VQ(e){let{setForm:t,formId:n}=e;return(0,r.useEffect)((()=>{if(n){let e=document.getElementById(n);e&&t(e)}}),[t,n]),n?null:r.createElement(Ze,{features:Je.Hidden,as:"input",type:"hidden",hidden:!0,readOnly:!0,ref:e=>{if(!e)return;let n=e.closest("form");n&&t(n)}})}let zQ=(0,r.createContext)(void 0);function GQ(){return(0,r.useContext)(zQ)}function WQ(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=""===(null==t?void 0:t.getAttribute("disabled"));return(!r||!function(e){if(!e)return!1;let t=e.previousElementSibling;for(;null!==t;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}(n))&&r}let qQ=(0,r.createContext)(null);function YQ(){let e=(0,r.useContext)(qQ);if(null===e){let e=new Error("You used a <Label /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(e,YQ),e}return e}function XQ(e){var t,n,A;let i=null!=(n=null==(t=(0,r.useContext)(qQ))?void 0:t.value)?n:void 0;return(null!=(A=null==e?void 0:e.length)?A:0)>0?[i,...e].filter(Boolean).join(" "):i}qQ.displayName="LabelContext";let JQ=We((function(e,t){var n;let A=(0,r.useId)(),i=YQ(),o=GQ(),a=wt(),{id:s=`headlessui-label-${A}`,htmlFor:l=(null!=o?o:null==(n=i.props)?void 0:n.htmlFor),passive:u=!1,...c}=e,f=lt(t);ie((()=>i.register(s)),[s,i.register]);let d=de((e=>{let t=e.currentTarget;if(t instanceof HTMLLabelElement&&e.preventDefault(),i.props&&"onClick"in i.props&&"function"==typeof i.props.onClick&&i.props.onClick(e),t instanceof HTMLLabelElement){let e=document.getElementById(t.htmlFor);if(e){let t=e.getAttribute("disabled");if("true"===t||""===t)return;let n=e.getAttribute("aria-disabled");if("true"===n||""===n)return;(e instanceof HTMLInputElement&&("radio"===e.type||"checkbox"===e.type)||"radio"===e.role||"checkbox"===e.role||"switch"===e.role)&&e.click(),e.focus({preventScroll:!0})}}})),h=a||!1,p=(0,r.useMemo)((()=>({...i.slot,disabled:h})),[i.slot,h]),g={ref:f,...i.props,id:s,htmlFor:l,onClick:d};return u&&("onClick"in g&&(delete g.htmlFor,delete g.onClick),"onClick"in c&&delete c.onClick),Ke()({ourProps:g,theirProps:c,slot:p,defaultTag:l?"label":"div",name:i.name||"Label"})})),ZQ=Object.assign(JQ,{}),$Q=(0,r.createContext)(null);$Q.displayName="GroupContext";let eU=r.Fragment;let tU=We((function(e,t){var n;let A=(0,r.useId)(),i=GQ(),o=wt(),{id:a=i||`headlessui-switch-${A}`,disabled:s=o||!1,checked:l,defaultChecked:u,onChange:c,name:f,value:d,form:h,autoFocus:p=!1,...g}=e,m=(0,r.useContext)($Q),[y,v]=(0,r.useState)(null),w=lt((0,r.useRef)(null),t,null===m?null:m.setSwitch,v),b=function(e){let[t]=(0,r.useState)(e);return t}(u),[B,x]=function(e,t,n){let[A,i]=(0,r.useState)(n),o=void 0!==e,a=(0,r.useRef)(o),s=(0,r.useRef)(!1),l=(0,r.useRef)(!1);return!o||a.current||s.current?!o&&a.current&&!l.current&&(l.current=!0,a.current=o,console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")):(s.current=!0,a.current=o,console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")),[o?e:A,de((e=>(o||i(e),null==t?void 0:t(e))))]}(l,c,null!=b&&b),C=St(),[F,S]=(0,r.useState)(!1),E=de((()=>{S(!0),null==x||x(!B),C.nextFrame((()=>{S(!1)}))})),Q=de((e=>{if(WQ(e.currentTarget))return e.preventDefault();e.preventDefault(),E()})),U=de((e=>{e.key===te.Space?(e.preventDefault(),E()):e.key===te.Enter&&function(e){var t,n;let r=null!=(t=null==e?void 0:e.form)?t:e.closest("form");if(r){for(let t of r.elements)if(t!==e&&("INPUT"===t.tagName&&"submit"===t.type||"BUTTON"===t.tagName&&"submit"===t.type||"INPUT"===t.nodeName&&"image"===t.type))return void t.click();null==(n=r.requestSubmit)||n.call(r)}}(e.currentTarget)})),O=de((e=>e.preventDefault())),k=XQ(),_=function(){var e,t;return null!=(t=null==(e=(0,r.useContext)(bt))?void 0:e.value)?t:void 0}(),{isFocusVisible:L,focusProps:I}=kQ({autoFocus:p}),{isHovered:P,hoverProps:N}=function(e){let{onHoverStart:t,onHoverChange:n,onHoverEnd:A,isDisabled:i}=e,[o,a]=(0,r.useState)(!1),s=(0,r.useRef)({isHovered:!1,ignoreEmulatedMouseEvents:!1,pointerType:"",target:null}).current;(0,r.useEffect)(NQ,[]);let{hoverProps:l,triggerHoverEnd:u}=(0,r.useMemo)((()=>{let e=(e,r)=>{if(s.pointerType=r,i||"touch"===r||s.isHovered||!e.currentTarget.contains(e.target))return;s.isHovered=!0;let A=e.currentTarget;s.target=A,t&&t({type:"hoverstart",target:A,pointerType:r}),n&&n(!0),a(!0)},r=(e,t)=>{if(s.pointerType="",s.target=null,"touch"===t||!s.isHovered)return;s.isHovered=!1;let r=e.currentTarget;A&&A({type:"hoverend",target:r,pointerType:t}),n&&n(!1),a(!1)},o={};return"undefined"!==typeof PointerEvent?(o.onPointerEnter=t=>{_Q&&"mouse"===t.pointerType||e(t,t.pointerType)},o.onPointerLeave=e=>{!i&&e.currentTarget.contains(e.target)&&r(e,e.pointerType)}):(o.onTouchStart=()=>{s.ignoreEmulatedMouseEvents=!0},o.onMouseEnter=t=>{s.ignoreEmulatedMouseEvents||_Q||e(t,"mouse"),s.ignoreEmulatedMouseEvents=!1},o.onMouseLeave=e=>{!i&&e.currentTarget.contains(e.target)&&r(e,"mouse")}),{hoverProps:o,triggerHoverEnd:r}}),[t,n,A,i,s]);return(0,r.useEffect)((()=>{i&&u({currentTarget:s.target},s.pointerType)}),[i]),{hoverProps:l,isHovered:o}}({isDisabled:s}),{pressed:M,pressProps:j}=function(){let{disabled:e=!1}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,r.useRef)(null),[n,A]=(0,r.useState)(!1),i=St(),o=de((()=>{t.current=null,A(!1),i.dispose()})),a=de((e=>{if(i.dispose(),null===t.current){t.current=e.currentTarget,A(!0);{let n=ge(e.currentTarget);i.addEventListener(n,"pointerup",o,!1),i.addEventListener(n,"pointermove",(e=>{if(t.current){let n=function(e){let t=e.width/2,n=e.height/2;return{top:e.clientY-n,right:e.clientX+t,bottom:e.clientY+n,left:e.clientX-t}}(e);A(function(e,t){return!(!e||!t||e.right<t.left||e.left>t.right||e.bottom<t.top||e.top>t.bottom)}(n,t.current.getBoundingClientRect()))}}),!1),i.addEventListener(n,"pointercancel",o,!1)}}}));return{pressed:n,pressProps:e?{}:{onPointerDown:a,onPointerUp:o,onClick:o}}}({disabled:s}),T=(0,r.useMemo)((()=>({checked:B,disabled:s,hover:P,focus:L,active:M,autofocus:p,changing:F})),[B,P,L,M,s,F,p]),D=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];if(0===t.length)return{};if(1===t.length)return t[0];let r={},A={};for(let i of t)for(let e in i)e.startsWith("on")&&"function"==typeof i[e]?(null!=A[e]||(A[e]=[]),A[e].push(i[e])):r[e]=i[e];for(let i in A)Object.assign(r,{[i](){let e=A[i];for(let t of e)null==t||t(...arguments)}});return r}({id:a,ref:w,role:"switch",type:MQ(e,y),tabIndex:-1===e.tabIndex?0:null!=(n=e.tabIndex)?n:0,"aria-checked":B,"aria-labelledby":k,"aria-describedby":_,disabled:s||void 0,autoFocus:p,onClick:Q,onKeyUp:U,onKeyPress:O},I,N,j),H=(0,r.useCallback)((()=>{if(void 0!==b)return null==x?void 0:x(b)}),[x,b]),R=Ke();return r.createElement(r.Fragment,null,null!=f&&r.createElement(KQ,{disabled:s,data:{[f]:d||"on"},overrides:{type:"checkbox",checked:B},form:h,onReset:H}),R({ourProps:D,theirProps:g,slot:T,defaultTag:"button",name:"Switch"}))})),nU=function(e){var t;let[n,A]=(0,r.useState)(null),[i,o]=function(){let{inherit:e=!1}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=XQ(),[n,A]=(0,r.useState)([]),i=e?[t,...n].filter(Boolean):n;return[i.length>0?i.join(" "):void 0,(0,r.useMemo)((()=>function(e){let t=de((e=>(A((t=>[...t,e])),()=>A((t=>{let n=t.slice(),r=n.indexOf(e);return-1!==r&&n.splice(r,1),n}))))),n=(0,r.useMemo)((()=>({register:t,slot:e.slot,name:e.name,props:e.props,value:e.value})),[t,e.slot,e.name,e.props,e.value]);return r.createElement(qQ.Provider,{value:n},e.children)}),[A])]}(),[a,s]=xt(),l=(0,r.useMemo)((()=>({switch:n,setSwitch:A})),[n,A]),u=e,c=Ke();return r.createElement(s,{name:"Switch.Description",value:a},r.createElement(o,{name:"Switch.Label",value:i,props:{htmlFor:null==(t=l.switch)?void 0:t.id,onClick(e){n&&(e.currentTarget instanceof HTMLLabelElement&&e.preventDefault(),n.click(),n.focus({preventScroll:!0}))}}},r.createElement($Q.Provider,{value:l},c({ourProps:{},theirProps:u,slot:{},defaultTag:eU,name:"Switch.Group"}))))},rU=ZQ,AU=Ft,iU=Object.assign(tU,{Group:nU,Label:rU,Description:AU});const oU=e=>{const{onSave:t=()=>{},array:n=[]}=e,[A,i]=(0,r.useState)(!1),[o,a]=(0,r.useState)(n),[s,l]=(0,r.useState)(""),u=()=>{const e=parseFloat(s);e>0&&e<1e8?(a([...o,e]),l("")):WE.error("\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0432 \u0434\u0438\u0430\u043f\u0430\u0437\u043e\u043d\u0435 (1 \u2a7d x \u2a7d 100000000)")};return(0,Z.jsxs)("div",{className:"w-full p-4 h-fit relative",children:[(0,Z.jsx)("h1",{className:"text-xl font-bold text-gray-900/80",children:"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u043a\u0430\u043f\u0438\u0442\u0430\u043b\u043e\u0432"}),(0,Z.jsx)("p",{className:"mb-4 text-gray-900/80 text-sm font-semibold",children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0443\u043c\u043c\u044b \u043a\u0430\u043f\u0438\u0442\u0430\u043b\u043e\u0432 \u0434\u043b\u044f \u0430\u043d\u0430\u043b\u0438\u0437\u0430 (\u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0434\u0432\u0430 \u0438 \u0431\u043e\u043b\u0435\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439)"}),(0,Z.jsxs)("div",{className:"w-full flex items-center justify-center gap-4 mb-6",children:[(0,Z.jsx)("p",{children:"\u0412\u0440\u0443\u0447\u043d\u0443\u044e"}),(0,Z.jsxs)(iU,{checked:A,onChange:i,className:(A?"bg-blue-200":"bg-gray-200")+" relative inline-flex h-6 w-11 items-center rounded-full",children:[(0,Z.jsx)("span",{className:"sr-only",children:"Enable notifications"}),(0,Z.jsx)("span",{className:(A?"translate-x-6":"translate-x-1")+" inline-block h-4 w-4 transform rounded-full bg-white transition"})]}),(0,Z.jsx)("p",{children:"\u0424\u0430\u0439\u043b\u043e\u043c"})]}),(0,Z.jsxs)("div",{className:Nn(A&&"hidden","flex w-full flex-col items-center justify-center gap-2"),children:[(0,Z.jsxs)("div",{className:"flex w-full",children:[(0,Z.jsx)("input",{type:"number",value:s,onChange:e=>l(e.target.value),className:"flex-grow border border-gray-300 rounded-lg p-2 mr-2",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435",onKeyPress:e=>"Enter"===e.key&&u()}),(0,Z.jsx)("button",{onClick:u,className:"bg-blue-500 hover:bg-blue-400 text-white px-2 py-1 rounded-lg transition-all ease-in-out duration-200",children:(0,Z.jsx)(WS,{className:"w-6 h-6"})})]}),(0,Z.jsx)("ul",{className:"grid grid-cols-2 gap-x-8 gap-y-4 w-full",children:o.map(((e,t)=>(0,Z.jsxs)("li",{className:"flex justify-between items-center border-b py-2",children:[(0,Z.jsx)("span",{className:"text-gray-500 font-semibold text-sm",children:e}),(0,Z.jsx)("button",{onClick:()=>{(e=>{const t=o.filter(((t,n)=>n!==e));a(t)})(t)},className:Nn("text-red-500 hover:text-red-700 transition-all ease-in-out duration-200"),children:(0,Z.jsx)(YS,{className:"w-6 h-6"})})]},t)))}),(0,Z.jsx)("div",{className:"flex w-full items-center justify-center mt-6",children:(0,Z.jsx)("button",{type:"button",className:"transition-colors ease-in-out mt-3 inline-flex w-full items-center justify-center rounded-md bg-blue-500 px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 sm:mt-0 sm:w-auto",onClick:()=>{void 0==o||(null===o||void 0===o?void 0:o.length)<2?WE.error("\u0412\u044b \u0434\u043e\u043b\u0436\u043d\u044b \u0432\u0432\u0435\u0441\u0442\u0438 \u0434\u0432\u0430 \u0438 \u0431\u043e\u043b\u0435\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f"):t(o)},children:"\u0410\u043d\u0430\u043b\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u0442\u044c"})})]}),(0,Z.jsx)("div",{className:Nn(0==A&&"hidden"),children:(0,Z.jsx)(XE,{onDataParsed:e=>{console.log(e),(null===e||void 0===e?void 0:e.errors)>0?WE.error(`\u0424\u0430\u0439\u043b \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 "${null===e||void 0===e?void 0:e.errors}" \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u0432\u043d\u0435 \u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u043e\u0433\u043e \u0434\u0438\u0430\u043f\u0430\u0437\u043e\u043d\u0430 (1 \u2a7d x \u2a7d 100000000)`):(null===e||void 0===e?void 0:e.length)<=2?WE.error("\u0412 \u0444\u0430\u0439\u043b\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0434\u0432\u0430 \u0438 \u0431\u043e\u043b\u0435\u0435 \u043f\u043e\u0434\u0445\u043e\u0434\u044f\u0449\u0438\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 (\u043f\u043e\u043b\u043e\u0436\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0445)"):t(e)}})})]})},aU={calculateDensity(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;const n=Math.min(...e),r=(Math.max(...e)-n)/t;return Array.from({length:t},((e,t)=>n+t*r)).map((t=>({x:t,y:e.filter((e=>e>=t&&e<t+r)).length/e.length})))},computePareto(e,t,n){const r=[],A=[];let i=t,o=1;for(;o>n;)r.push(i),o=1-(1-Math.pow(t/i,e)),A.push(o),i+=(1e4-t)/100;return r.map(((e,t)=>({x:e,y:A[t]})))},analyzeInvestorCapital(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.001;const n=e.filter((e=>e>0)),r=Math.min(...n),A=1+n.length/n.reduce(((e,t)=>e+Math.log(t/r)),0);console.log("analyzeInvestorCapital: \u041e\u0446\u0435\u043d\u043a\u0430 \u043f\u043e\u043a\u0430\u0437\u0430\u0442\u0435\u043b\u044f \u0441\u0442\u0435\u043f\u0435\u043d\u0438 \u03b1:",A);const i=n.sort(((e,t)=>t-e)),o=i.length,a=Math.ceil(.2*o),s=i.slice(0,a);console.log("analyzeInvestorCapital: \u041a\u043b\u044e\u0447\u0435\u0432\u044b\u0435 \u0438\u0433\u0440\u043e\u043a\u0438 (20% \u0441 \u043d\u0430\u0438\u0431\u043e\u043b\u044c\u0448\u0438\u043c\u0438 \u043a\u0430\u043f\u0438\u0442\u0430\u043b\u0430\u043c\u0438):",s);return{density:this.computePareto(A,r,t),keyPlayers:s,alpha:A}},randomForChart(e){let t=[];for(let n=0;n<e;n++)t.push({x:n,y:Math.random()});return t}},sU=aU;function lU(e){const[t,n]=(0,r.useState)(1),[A,i]=(0,r.useState)([]),[o,a]=(0,r.useState)(void 0);return(0,Z.jsx)("div",{className:"flex flex-col items-center min-h-screen p-6",children:(0,Z.jsx)("div",{className:"rounded-md bg-white shadow-md flex flex-col my-14",children:(0,Z.jsxs)("div",{children:[(0,Z.jsx)(zS,{currentStep:t,click:e=>{n(e)}}),(0,Z.jsxs)("div",{className:"p-8 flex flex-col items-center ",children:[1==t&&(0,Z.jsx)("div",{className:"w-full",children:(0,Z.jsx)(oU,{array:A,onSave:e=>{i(e),n(t+1);let r=sU.analyzeInvestorCapital(e,1e-4);dr.addItem("investment",{date:new Date,capitals:e,...r}),(null===r||void 0===r?void 0:r.alpha)<1?WE.error("\u0410\u043d\u0430\u043b\u0438\u0437 \u0442\u0430\u043a\u0438\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u043d\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u0435\u043d"):a({...r,capitals:e})}})}),2==t&&(0,Z.jsx)("div",{className:"w-full",children:(0,Z.jsx)(TS,{data:o})})]})]})})})}const uU=(0,Z.jsxs)(B,{children:[(0,Z.jsx)(w,{path:"/",element:(0,Z.jsx)($,{})}),(0,Z.jsx)(w,{path:"/analyze",element:(0,Z.jsx)(lU,{})}),(0,Z.jsx)(w,{path:"/history",element:(0,Z.jsx)(HS,{})}),(0,Z.jsx)(w,{path:"/contacts",element:(0,Z.jsx)(Hn,{})}),(0,Z.jsx)(w,{path:"*",element:(0,Z.jsx)(Dn,{})})]});function cU(e){let t=uU;return(0,Z.jsxs)(X,{basename:"/tsu-invest-app",children:[(0,Z.jsx)(Tn,{component:t}),(0,Z.jsx)(GE,{})]})}function fU(e){return(0,Z.jsx)(cU,{})}i.createRoot(document.getElementById("root")).render((0,Z.jsx)(r.StrictMode,{children:(0,Z.jsx)(fU,{})}))})()})();
//# sourceMappingURL=main.c1da4935.js.map