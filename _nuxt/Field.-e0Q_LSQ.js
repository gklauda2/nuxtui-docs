import{d as f,ag as m,ah as y,b as s,c as i,e as n,n as r,aA as e,t as d,f as o,ac as g,j as x,aa as v}from"./entry.1qyDqDZt.js";const b=f({inheritAttrs:!1,__name:"Field",props:{name:{type:String,required:!0},description:{type:String,default:void 0},type:{type:String,default:void 0},required:{type:Boolean,default:!1},default:{type:String,default:void 0},class:{type:[String,Object,Array],default:void 0}},setup(t){const c={wrapper:"mt-5",container:"flex items-start gap-x-2.5 font-mono text-sm",name:"rounded-md font-semibold text-primary",required:"text-gray-500 dark:text-gray-400",type:"text-right",label:"flex flex-1 gap-x-2.5",description:"mt-3 mb-0 text-gray-600 dark:text-gray-300 text-sm space-y-3"},u=t,{ui:a,attrs:p}=m("content.field",void 0,c,y(u,"class"),!0);return(l,k)=>(s(),i("div",v({class:e(a).wrapper},e(p)),[n("div",{class:r(e(a).container)},[n("div",{class:r(e(a).label)},[n("span",{class:r(e(a).name)},d(t.name),3),t.required?(s(),i("span",{key:0,class:r(e(a).required)},"required",2)):o("",!0)],2),t.type?(s(),i("div",{key:0,class:r(e(a).type)},d(t.type),3)):o("",!0)],2),l.$slots.default||t.description?(s(),i("div",{key:0,class:r(e(a).description)},[g(l.$slots,"default",{},()=>[x(d(t.description),1)])],2)):o("",!0)],16))}});export{b as default};
