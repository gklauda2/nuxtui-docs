import{d as _,a$ as k,ag as w,ah as C,r as I,G as B,b as s,c as o,e as u,n as l,aA as e,F as v,a8 as y,a9 as f,f as S,t as A,am as D,al as N,b3 as $,aa as z,a4 as F}from"./entry.1qyDqDZt.js";const G=["onClick"],j=_({inheritAttrs:!1,__name:"Tabs",props:{selectedIndex:{type:Number,default:0},class:{type:[String,Object,Array],default:void 0}},setup(g){const h={wrapper:"relative my-5 space-y-6",header:"flex items-center relative",border:"absolute bottom-0 inset-x-0 w-full h-px bg-gray-200 dark:bg-gray-800",tab:{base:"px-4 py-2.5 font-semibold text-sm/6 flex items-center gap-1.5 border-b z-[1] focus-visible:outline-primary",active:"text-primary border-primary",inactive:"text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 border-transparent hover:border-gray-300 dark:hover:border-gray-700",icon:{base:"w-5 h-5 flex-shrink-0"}}},m=g,i=k(),{ui:r,attrs:x}=w("content.codeGroup",void 0,h,C(m,"class"),!0),p=I(m.selectedIndex||0),b=B(()=>{var d;return((d=i.default)==null?void 0:d.call(i).map((n,c)=>{var t,a;return{index:c,label:((t=n.props)==null?void 0:t.label)||`${c}`,icon:(a=n.props)==null?void 0:a.icon,component:n}}))||[]});return(d,n)=>{const c=F;return s(),o("div",z({class:e(r).wrapper},e(x)),[u("div",{class:l(e(r).header)},[u("div",{class:l(e(r).border)},null,2),(s(!0),o(v,null,y(e(b),(t,a)=>(s(),o("button",{key:a,class:l([e(r).tab.base,e(p)===a?e(r).tab.active:e(r).tab.inactive]),onClick:U=>p.value=a},[t.icon?(s(),f(c,{key:0,name:t.icon,class:l(e(r).tab.icon.base)},null,8,["name","class"])):S("",!0),u("span",null,A(t.label),1)],10,G))),128))],2),(s(!0),o(v,null,y(e(b),(t,a)=>D((s(),o("div",{key:a},[(s(),f($(t.component)))])),[[N,e(p)===a]])),128))],16)}}});export{j as default};
