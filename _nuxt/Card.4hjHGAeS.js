import{d as _,y as w,G as u,ag as C,ah as g,a_ as l,b as n,a9 as s,w as m,f as c,aA as t,n as i,t as S,e as p,c as A,aa as I,aC as U,a4 as $}from"./entry.1qyDqDZt.js";import{_ as B}from"./Card.9zWIDKK9.js";import{r as D}from"./slot.2pYcZ5Kj.js";import"./node.kQagOfUD.js";const L=p("span",{class:"absolute inset-0","aria-hidden":"true"},null,-1),T=_({inheritAttrs:!1,__name:"Card",props:{icon:{type:String,default:void 0},color:{type:String,default:"primary"},to:{type:String,default:void 0},target:{type:String,default:void 0},title:{type:String,default:void 0},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(e){const f=w(),y=u(()=>({wrapper:"relative group overflow-hidden flex items-center rounded-lg",to:"hover:ring-1 hover:ring-[--color-light] dark:hover:ring-[--color-dark] hover:bg-gray-100/50 dark:hover:bg-gray-800/50",icon:{base:"w-6 h-6 mb-4 inline-flex items-center text-[--color-light] dark:text-[--color-dark] pointer-events-none"},body:{base:"flex-1"},externalIcon:{name:f.ui.icons.external,base:"w-4 h-4 absolute right-2 top-2 text-gray-400 dark:text-gray-500 group-hover:text-[--color-light] dark:group-hover:text-[--color-dark]"},title:"text-gray-900 dark:text-white font-semibold text-base my-0",description:"text-[15px] text-gray-500 dark:text-gray-400 mt-1 mb-0"})),o=e,{ui:a,attrs:x}=C("content.card",g(o,"ui"),y,g(o,"class"),!0),h=u(()=>{var r;return o.color==="primary"?"rgb(var(--color-primary-DEFAULT))":((r=l[o.color])==null?void 0:r["500"])||l[o.color]||o.color}),b=u(()=>{var r;return o.color==="primary"?"rgb(var(--color-primary-DEFAULT))":((r=l[o.color])==null?void 0:r["400"])||l[o.color]||o.color});return(r,E)=>{const k=U,d=$,v=B;return n(),s(v,I({class:[t(a).wrapper,e.to&&t(a).to]},t(x),{ui:t(a),style:{"--color-light":t(h),"--color-dark":t(b)}}),{default:m(()=>[e.to?(n(),s(k,{key:0,to:e.to,target:e.target,class:"focus:outline-none",tabindex:"-1"},{default:m(()=>[L]),_:1},8,["to","target"])):c("",!0),e.icon?(n(),s(d,{key:1,name:e.icon,class:i(t(a).icon.base)},null,8,["name","class"])):c("",!0),e.to&&e.target==="_blank"?(n(),s(d,{key:2,name:t(a).externalIcon.name,class:i(t(a).externalIcon.base)},null,8,["name","class"])):c("",!0),p("p",{class:i(t(a).title)},S(e.title),3),r.$slots.default?(n(),A("p",{key:3,class:i(t(a).description)},[D(r.$slots,"default",{unwrap:"p",use:r.$slots.default})],2)):c("",!0)]),_:3},16,["class","ui","style"])}}});export{T as default};
