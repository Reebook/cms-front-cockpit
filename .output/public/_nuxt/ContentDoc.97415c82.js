import{a as h,b as m,e as y,h as o,f as g,i as C}from"./entry.214bc213.js";import D from"./ContentRenderer.6b05bccf.js";import q from"./ContentQuery.b8cfd9b8.js";import"./MarkdownRenderer.7a6bc637.js";import"./asyncData.f064f27c.js";import"./json.197e0f19.js";import"./utils.d6d3cc2a.js";const H=h({props:{tag:{type:String,required:!1,default:"div"},excerpt:{type:Boolean,default:!1},path:{type:String,required:!1,default:()=>m().path},query:{type:Object,required:!1,default:void 0}},render(d){const t=y(),{tag:c,excerpt:a,path:p,query:f}=d,s=Object.assign(f||{},{path:p,find:"one"}),l=(n,e)=>o("pre",null,JSON.stringify({message:"You should use slots with <ContentDoc>",slot:n,data:e},null,2)),u=n=>{if(p!==m().path)return;const e=Object.assign({},n.head);e.title=e.title||n.title,e.meta=e.meta||[];const r=e.description||n.description;r&&e.meta.filter(i=>i.name==="description").length===0&&e.meta.push({name:"description",content:r}),e.image&&e.meta.filter(i=>i.property==="og:image").length===0&&e.meta.push({property:"og:image",content:e.image}),g(()=>C(e))};return o(q,s,{default:t!=null&&t.default?({data:n,refresh:e,isPartial:r})=>(u(n),t.default({doc:n,refresh:e,isPartial:r,excerpt:a,...this.$attrs})):({data:n})=>(u(n),o(D,{value:n,excerpt:a,tag:c,...this.$attrs},{empty:e=>t!=null&&t.empty?t.empty(e):l("default",n)})),empty:n=>{var e;return((e=t==null?void 0:t.empty)==null?void 0:e.call(t,n))||o("p",null,"Document is empty, overwrite this content with #empty slot in <ContentDoc>.")},"not-found":n=>{var e;return((e=t==null?void 0:t["not-found"])==null?void 0:e.call(t,n))||o("p",null,"Document not found, overwrite this content with #not-found slot in <ContentDoc>.")}})}});export{H as default};
